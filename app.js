
let currentPlan = [];
let lunchPlan = [];
let locked = {};

function safeParseJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    console.warn("localStorage parse error for key:", key, e);
    return fallback;
  }
}

let favorites = safeParseJSON("favorites", []);
let blocked = safeParseJSON("blocked", []);
let pantry = safeParseJSON("pantry", []);

let enabledProteins = safeParseJSON("enabledProteins", [
  "ground_beef",
  "beef",
  "chicken",
  "pork",
  "seafood",
  "mixed"
]);

let dietRestrictions = safeParseJSON("dietRestrictions", []);

let plannerSettings = safeParseJSON("plannerSettings", null);

if (!plannerSettings || plannerSettings.version !== DEFAULT_PLANNER_SETTINGS.version) {
  plannerSettings = Object.assign({}, DEFAULT_PLANNER_SETTINGS, plannerSettings || {});
  plannerSettings.version = DEFAULT_PLANNER_SETTINGS.version;
}

// Ensure every expected key has a value — guards against old stored objects missing new keys
plannerSettings.lunchesEnabled   = plannerSettings.lunchesEnabled   ?? DEFAULT_PLANNER_SETTINGS.lunchesEnabled;
plannerSettings.takeoutDays      = plannerSettings.takeoutDays      ?? DEFAULT_PLANNER_SETTINGS.takeoutDays;
plannerSettings.takeoutDay       = plannerSettings.takeoutDay       ?? DEFAULT_PLANNER_SETTINGS.takeoutDay;
plannerSettings.calendarHour     = plannerSettings.calendarHour     ?? DEFAULT_PLANNER_SETTINGS.calendarHour;
plannerSettings.calendarDurationHours = plannerSettings.calendarDurationHours ?? DEFAULT_PLANNER_SETTINGS.calendarDurationHours;
plannerSettings.proteinLimit     = plannerSettings.proteinLimit     ?? DEFAULT_PLANNER_SETTINGS.proteinLimit;
plannerSettings.historyLength    = plannerSettings.historyLength    ?? DEFAULT_PLANNER_SETTINGS.historyLength;
plannerSettings.weekStartDay     = plannerSettings.weekStartDay     ?? DEFAULT_PLANNER_SETTINGS.weekStartDay;

function savePlan() {
  localStorage.setItem("currentPlan", JSON.stringify(currentPlan));
  localStorage.setItem("lunchPlan", JSON.stringify(lunchPlan));
  localStorage.setItem("locked", JSON.stringify(locked));
}

function loadPlan() {
  const savedPlan = safeParseJSON("currentPlan", null);
  const savedLunch = safeParseJSON("lunchPlan", null);
  const savedLocked = safeParseJSON("locked", null);

  if (Array.isArray(savedPlan) && savedPlan.length) {
    currentPlan = savedPlan;
    lunchPlan = Array.isArray(savedLunch) ? savedLunch : [];
    locked = (savedLocked && typeof savedLocked === "object") ? savedLocked : {};
    return true;
  }
  return false;
}

function r(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function getMealId(meal){
  return meal.id || meal.meal;
}

function getMealName(meal){
  return meal.meal || meal.name || meal.id;
}

function findMealByIdOrName(value){
  return MEALS.find(m => m.id === value || m.meal === value || m.name === value);
}

function canUseProtein(meal, proteinCount){
  if (meal.protein === "mixed") return true;
  return (proteinCount[meal.protein] || 0) < plannerSettings.proteinLimit;
}


function containsRestrictedIngredient(items){
  if(!items) return false;

  return items.some(item => {
    const s = item.toLowerCase();

    return dietRestrictions.some(rule => {
      const blocked = RESTRICTED_INGREDIENTS[rule] || [];
      return blocked.some(word => s.includes(word));
    });
  });
}

function mealAllowedByDiet(meal){
  return !containsRestrictedIngredient(meal.items);
}

function sideAllowedByDiet(sideName){
  const items = SIDE_ITEMS[sideName] || [];
  return !containsRestrictedIngredient(items);
}

function pickMeal(usedMeals, history, proteinCount){

  let options = MEALS.filter(m =>
    enabledProteins.includes(m.protein) &&
    mealAllowedByDiet(m) &&
    !usedMeals.includes(m.id) &&
    !usedMeals.includes(m.meal) &&
    !history.includes(m.id) &&
    !history.includes(m.meal) &&
    !blocked.includes(m.id) &&
    !blocked.includes(m.meal) &&
    canUseProtein(m, proteinCount)
  )

  if (!options.length) {
    options = MEALS.filter(m =>
      enabledProteins.includes(m.protein) &&
      mealAllowedByDiet(m) &&
      !usedMeals.includes(m.id) &&
      !usedMeals.includes(m.meal) &&
      canUseProtein(m, proteinCount)
    );
  }

  if (!options.length) {
    options = MEALS.filter(m => enabledProteins.includes(m.protein) &&
      mealAllowedByDiet(m) &&
      !usedMeals.includes(m.id) &&
      !usedMeals.includes(m.meal));
  }

  if (!options.length) {
    options = MEALS.filter(m =>
      enabledProteins.includes(m.protein) &&
      mealAllowedByDiet(m)
    );
  }

  // Favor favorites
  let favOptions = options.filter(m => favorites.includes(m.id) || favorites.includes(m.meal))

  if(favOptions.length && Math.random() < 0.6){
    options = favOptions
  }

  // Pantry scoring
  let scored = options.map(m => {

    let matches = 0

    if(m.items){
      matches = m.items.filter(i =>
        pantry.some(p => p.toLowerCase() === i.toLowerCase())
      ).length
    }

    return {
      meal: m,
      score: matches
    }
  })

  // Sort best matches first
  scored.sort((a,b) => b.score - a.score)

  // Keep some randomness
  let top = scored.slice(0, Math.max(3, Math.floor(scored.length / 2)))

  options = top.map(x => x.meal)

  // Pick randomly from best options
  const chosen = r(options)

  usedMeals.push(chosen.meal)

  if (chosen.protein !== "mixed") {
    proteinCount[chosen.protein] = (proteinCount[chosen.protein] || 0) + 1;
  }

  return chosen;
}

function pickSide(meal, protein){

  let pool =
    SIDE_OVERRIDES[meal.id] ||
    SIDE_OVERRIDES[meal.meal] ||
    SIDE_OVERRIDES[meal] ||
    SIDE_GROUPS[protein] ||
    [];

  pool = pool.filter(side => sideAllowedByDiet(side));

  if (!pool.length) return null;

  return r(pool);
}

function generate(){
  const usedMeals = [];
  const history = getHistory();
  const proteinCount = {};
  const plan = [];

  function add(day){
    if (locked[day] && currentPlan.length) {
      const existing = currentPlan.find(d => d.day === day);
      if (existing) {
        plan.push(existing);
        if (!existing.takeout && existing.meal) {
          usedMeals.push(existing.mealId || existing.meal);
        }
        return;
      }
    }

    const meal = pickMeal(usedMeals, history, proteinCount);
    const side = meal.complete ? null : pickSide(meal, meal.protein);

    plan.push({
      day,
      mealId: meal.id,
      meal: meal.meal,
      items: meal.items,
      side,
      sideItems: side ? (SIDE_ITEMS[side] || []) : [],
      complete: !!meal.complete,
      leftovers: meal.leftovers || 0,
    });
  }

  const allDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const startIndex = allDays.indexOf(plannerSettings.weekStartDay);

  const weekDays = allDays
    .slice(startIndex)
    .concat(allDays.slice(0, startIndex));

  weekDays.forEach(day => {

    const takeoutDays =
      plannerSettings.takeoutDays || [plannerSettings.takeoutDay];

    if(takeoutDays.includes(day)){

      if (locked[day] && currentPlan.length) {
        const existing = currentPlan.find(d => d.day === day);

        if (existing) {
          plan.push(existing);
        } else {
          plan.push({day, takeout:r(TAKEOUT)});
        }

      } else {
        plan.push({day, takeout:r(TAKEOUT)});
      }

    } else {
      add(day);
    }

  });

  currentPlan = plan;

  if(plannerSettings.lunchesEnabled){
    generateLunches();
  } else {
    lunchPlan = [];
  }

  const newMeals = plan.filter(d => !d.takeout).map(d => d.mealId || d.meal);
  const newHistory = history.concat(newMeals).slice(-plannerSettings.historyLength);
  saveHistory(newHistory);

  savePlan();
  render();
}


function copyShareLink(){

  try{

    const json = JSON.stringify(currentPlan)

    // encode safely
    const encoded = btoa(unescape(encodeURIComponent(json)))

    const url = location.origin + location.pathname + "#data=" + encoded

    navigator.clipboard.writeText(url)

    alert("Share link copied 👍")

  }catch(e){
    alert("Error creating link")
  }

}


function loadSharedWeek(){

  const hash = location.hash

  if(!hash.startsWith("#data=")) return false

  try{

    const encoded = hash.replace("#data=","")

    const json = decodeURIComponent(escape(atob(encoded)))

    const data = JSON.parse(json)

    if(Array.isArray(data)){
      currentPlan = data
      render()
      return true
    }

  }catch(e){
    console.log("Load failed", e)
  }

  return false

}

function toggleLock(day){

  const wasLocked = !!locked[day];

  locked[day] = !locked[day];

  if(!wasLocked && locked[day]){
    usePantryItemsForMeal(day);
  }

  savePlan();
  render();
}

let menuDay = null;

function showFavorites(){
  const panel = document.getElementById("favoritesPanel");
  const list = document.getElementById("favoritesList");

  if(!favorites.length){
    list.innerHTML = "<p>No favorites yet.</p>";
  } else {
    list.innerHTML = favorites.map(favoriteKey => {
      const meal = findMealByIdOrName(favoriteKey);
      const displayName = meal ? meal.meal : favoriteKey;
      const safeKey = String(favoriteKey).replace(/'/g, "\\'");

      return `
        <div style="padding:10px 0;border-bottom:1px solid #eee;">
          ${displayName}
          <button onclick="removeFavorite('${safeKey}')" style="margin-top:8px;">Remove</button>
        </div>
      `;
    }).join("");
  }

  panel.style.display = "block";
}

function removeFavorite(meal){
  favorites = favorites.filter(m => m !== meal);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  showFavorites();
}

function showBlockedMeals(){
  const panel = document.getElementById("blockedPanel");
  const list = document.getElementById("blockedList");

  if(!blocked.length){
    list.innerHTML = "<p>No skipped meals yet.</p>";
  } else {
    list.innerHTML = blocked.map(mealKey => {
      const meal = findMealByIdOrName(mealKey);
      const displayName = meal ? meal.meal : mealKey;
      const safeKey = String(mealKey).replace(/'/g, "\\'");

      return `
        <div style="padding:10px 0;border-bottom:1px solid #eee;">
          ${displayName}
          <button onclick="removeBlockedMeal('${safeKey}')" style="margin-top:8px;">Remove</button>
        </div>
      `;
    }).join("");
  }

  panel.style.display = "block";
}

function removeBlockedMeal(mealKey){
  blocked = blocked.filter(m => m !== mealKey);
  localStorage.setItem("blocked", JSON.stringify(blocked));
  showBlockedMeals();
}

function generateLunches(){

  lunchPlan = [];

  let leftoverQueue = [];

  for(let i = 0; i < currentPlan.length; i++){

    const today = currentPlan[i];

    // choose today's lunch
    if(leftoverQueue.length){
      lunchPlan.push({
        day: today.day,
        meal: "Leftovers: " + leftoverQueue.shift()
      });
    } else {
      lunchPlan.push({
        day: today.day,
        meal: pickLunch()
      });
    }

    // after dinner, add leftovers for future lunches
    if(today.leftovers && today.meal){
      for(let x = 0; x < today.leftovers; x++){
        leftoverQueue.push(today.meal);
      }
    }
  }
}

function pickLunch(){
  return r(LUNCHES);
}

function normalizeMealKeyList(list){
  if(!Array.isArray(list)) return [];

  const normalized = list.map(value => {
    const meal = findMealByIdOrName(value);
    return meal ? meal.id : value;
  });

  return [...new Set(normalized)];
}

function normalizeStoredMealKeys(){
  favorites = normalizeMealKeyList(favorites);
  blocked = normalizeMealKeyList(blocked);

  const history = normalizeMealKeyList(getHistory());

  localStorage.setItem("favorites", JSON.stringify(favorites));
  localStorage.setItem("blocked", JSON.stringify(blocked));
  saveHistory(history);
}

normalizeStoredMealKeys();

if (!loadSharedWeek()) {
  if (!loadPlan()) {
    generate();
  } else {
    render();
  }
}
