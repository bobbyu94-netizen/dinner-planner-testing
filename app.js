
let currentPlan = [];
let lunchPlan = [];  
let locked = {};

let favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
let blocked = JSON.parse(localStorage.getItem("blocked") || "[]")

let pantry = JSON.parse(localStorage.getItem("pantry") || "[]")

let enabledProteins = JSON.parse(
  localStorage.getItem("enabledProteins")
) || [
  "ground_beef",
  "beef",
  "chicken",
  "pork",
  "seafood",
  "mixed"
];

let dietRestrictions = JSON.parse(localStorage.getItem("dietRestrictions") || "[]");

 

let plannerSettings = JSON.parse(
  localStorage.getItem("plannerSettings")
) || DEFAULT_PLANNER_SETTINGS;
   
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
  return (proteinCount[meal.protein] || 0) < (plannerSettings.proteinLimit || 3);
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
    !usedMeals.includes(m.meal) &&
    !history.includes(m.meal) &&
    !blocked.includes(m.meal) &&
    canUseProtein(m, proteinCount)
  )

  if (!options.length) {
    options = MEALS.filter(m =>
      enabledProteins.includes(m.protein) &&
      mealAllowedByDiet(m) &&
      !usedMeals.includes(m.meal) &&
      canUseProtein(m, proteinCount)
    );
  }

  if (!options.length) {
    options = MEALS.filter(m => enabledProteins.includes(m.protein) &&
      mealAllowedByDiet(m) &&
      !usedMeals.includes(m.meal));
  }

 if (!options.length) {
  options = MEALS.filter(m =>
    enabledProteins.includes(m.protein) &&
    mealAllowedByDiet(m)
  );
 }

  // Favor favorites
  let favOptions = options.filter(m => favorites.includes(m.meal))

  if(favOptions.length && Math.random() < 0.6){
    options = favOptions
  }

  // 🥫 Pantry scoring
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

function pickSide(mealName, protein){

  let pool = SIDE_OVERRIDES[mealName] || SIDE_GROUPS[protein] || [];

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
          usedMeals.push(existing.meal);
        }
        return;
      }
    }

    const meal = pickMeal(usedMeals, history, proteinCount);
    const side = meal.complete ? null : pickSide(meal.meal, meal.protein);

    plan.push({
      day,
      meal: meal.meal,
      items: meal.items,
      side,
      sideItems: side ? (SIDE_ITEMS[side] || []) : [],
      complete: !!meal.complete,
      leftovers: meal.leftovers ||0,
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

const startIndex = allDays.indexOf(
  plannerSettings.weekStartDay || "Thursday"
);

const weekDays = allDays
  .slice(startIndex)
  .concat(allDays.slice(0, startIndex));

weekDays.forEach(day => {

  const takeoutDays =
  plannerSettings.takeoutDays || [plannerSettings.takeoutDay || "Tuesday"];

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

  const newMeals = plan.filter(d => !d.takeout).map(d => d.meal);
  const newHistory = history.concat(newMeals).slice(-(plannerSettings.historyLength || 24));
  saveHistory(newHistory);

  render();
}
  
  function categorize(item){
  const s = item.toLowerCase();

  if (
    s.includes("frozen")
    ) return "Frozen";
   
  if (
    s.includes("beef") || s.includes("chicken") || s.includes("pork") ||
    s.includes("steak") || s.includes("shrimp") || s.includes("sausage") ||
    s.includes("salmon") || s.includes("ribs") || s.includes("hot dogs") || 
    s.includes("turkey") || s.includes ("bacon")
  ) return "Meat";

  if (
    s.includes("lettuce") || s.includes("tomato") || s.includes("potato") ||
    s.includes("broccoli") || s.includes("corn") || s.includes("carrot") ||
    s.includes("asparagus") || s.includes("sprouts") || s.includes("beans") ||
    s.includes("green beans") || s.includes("vegetables") || s.includes("onions") || s.includes("mushrooms") 
  ) return "Produce";

  if (
    s.includes("cheese") || s.includes("milk") || s.includes("butter") ||
    s.includes("alfredo")
  ) return "Dairy";

  if (
    s.includes("pasta") || s.includes("rice") || s.includes("bread") ||
    s.includes("shells") || s.includes("sauce") || s.includes("dressing") || s.includes("chili") ||
    s.includes("breadcrumbs") || s.includes("mix") || s.includes("dumplings") || s.includes("buns") || s.includes("mac") || s.includes("kit") || s.includes("gravy") || s.includes("noodles") || s.includes("canned") || s.includes("box")
  ) return "Pantry";

   

  return "Other";
}

function render(){
  let html = "";
  const grocery = [];

  currentPlan.forEach(d => {
  html += `<div class="day" style="display:flex;justify-content:space-between;gap:10px;">`
html += `<div style="flex:1;">`
    html += `<div style="display:flex;align-items:center;gap:8px;">
  <h3 style="margin:0;">${d.day}</h3>
  ${locked[d.day] ? `<span class="lock">🔒 Locked</span>` : ""}
</div>`;
    const lunch = lunchPlan.find(l => l.day === d.day);

if(lunch){
  html += `<div class="side">🥪 ${lunch.meal}</div>`;
}

  if (d.dateNight) {
  html += `<div class="meal">❤️ Date Night</div>`;
}
else if (d.takeout) {
  html += `<div class="meal">🍔 ${d.takeout}</div>`;
}
else {
  html += `<div class="meal">🍽 ${d.meal}</div>`;

  if(d.items){
    grocery.push(...d.items);
  }

  if (d.side) {
    html += `<div class="side">🥗 ${d.side}</div>`;
    if(d.sideItems){
      grocery.push(...d.sideItems);
    }
  }
}


html += `</div>`

html += `<div style="display:flex;flex-direction:column;width:44px;">
  <button onclick="toggleLock('${d.day}')" style="height:50%;padding:0;margin:0 0 6px 0;background:white;color:#111827;border:1px solid #d1d5db;">${locked[d.day] ? "🔒" : "🔓"}</button>
  <button onclick="openMenu('${d.day}')" style="height:50%;padding:0;margin:0;background:white;color:#111827;border:1px solid #d1d5db;font-size:20px;">⋮</button>
</div>`

html += `</div>`;
    
  });

  document.getElementById("planner").innerHTML = html;

  const unique = [...new Set(grocery)];
  const groups = {};

  unique.forEach(item => {
    const cat = categorize(item);
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  });

  const order = ["Produce","Meat","Dairy","Pantry","Frozen","Other"];
  let list = "";

  order.forEach(cat => {
    if (!groups[cat] || !groups[cat].length) return;
    groups[cat].sort((a,b) => a.localeCompare(b));
    list += `<h4>${cat}</h4><ul>`;
    groups[cat].forEach(i => {
      list += `<li>${i}</li>`;
    });
    list += `</ul>`;
  });

  document.getElementById("grocery").innerHTML = list || "<div class='small'>No items yet.</div>";
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

  render();
}

let menuDay = null;
function favoriteMeal(day){
  const d = currentPlan.find(x => x.day === day);
  if(!d || d.takeout) return;

  if(!favorites.includes(d.meal)){
    favorites.push(d.meal);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  closeMenu();
  alert(d.meal + " added to favorites ⭐");
}

function skipMeal(day){
  const d = currentPlan.find(x => x.day === day);
  if(!d || d.takeout) return;

  if(!blocked.includes(d.meal)){
    blocked.push(d.meal);
    localStorage.setItem("blocked", JSON.stringify(blocked));
  }

  closeMenu();
  alert(d.meal + " skipped 🚫");
}

function regenerateDay(day){
  let history = getHistory();
  let proteinCount = {};

  currentPlan.forEach(d => {
    if(d.day !== day && d.meal){
      const m = MEALS.find(x => x.meal === d.meal);
      if(m && m.protein !== "mixed"){
        proteinCount[m.protein] = (proteinCount[m.protein] || 0) + 1;
      }
    }
  });

  const usedMeals = currentPlan
    .filter(d => d.day !== day)
    .map(d => d.meal)
    .filter(Boolean);

  const meal = pickMeal(usedMeals, history, proteinCount);
  const side = meal.complete ? null : pickSide(meal.meal, meal.protein);

  const index = currentPlan.findIndex(d => d.day === day);

  currentPlan[index] = {
    day,
    meal: meal.meal,
    items: meal.items,
    side,
    sideItems: side ? (SIDE_ITEMS[side] || []) : [],
    complete: !!meal.complete
  };

  closeMenu();
  render();
}

let moveFromDay = null;

function moveMeal(fromDay){
  moveFromDay = fromDay;

  const days = currentPlan.map(d => d.day);

  let html = "";

  days.forEach(day => {
    if(day === fromDay) return;

    html += `<div style="padding:14px;border-bottom:1px solid #eee;cursor:pointer;"
    onclick="confirmMove('${day}')">
    ${day}
    </div>`;
  });

  document.getElementById("moveList").innerHTML = html;
  document.getElementById("movePanel").style.display = "block";

  closeMenu();
}

function confirmMove(toDay){

  const fromIndex = currentPlan.findIndex(d => d.day === moveFromDay);
  const toIndex = currentPlan.findIndex(d => d.day === toDay);

  if(fromIndex === -1 || toIndex === -1){
    alert("Invalid move");
    return;
  }

  const fromEntry = currentPlan[fromIndex];
  const toEntry = currentPlan[toIndex];

  const fromContent = {
    takeout: fromEntry.takeout,
    meal: fromEntry.meal,
    items: fromEntry.items,
    side: fromEntry.side,
    sideItems: fromEntry.sideItems,
    complete: fromEntry.complete
  };

  const toContent = {
    takeout: toEntry.takeout,
    meal: toEntry.meal,
    items: toEntry.items,
    side: toEntry.side,
    sideItems: toEntry.sideItems,
    complete: toEntry.complete
  };

  currentPlan[fromIndex] = { day: fromEntry.day, ...toContent };
  currentPlan[toIndex] = { day: toEntry.day, ...fromContent };

  closeMove();
  render();
}
   
function showFavorites(){
  const panel = document.getElementById("favoritesPanel");
  const list = document.getElementById("favoritesList");

  if(!favorites.length){
    list.innerHTML = "<p>No favorites yet.</p>";
  } else {
    list.innerHTML = favorites.map(m => `
      <div style="padding:10px 0;border-bottom:1px solid #eee;">
        ${m}
        <button onclick="removeFavorite('${m.replace(/'/g, "\\'")}')" style="margin-top:8px;">Remove</button>
      </div>
    `).join("");
  }

  panel.style.display = "block";
}

function removeFavorite(meal){
  favorites = favorites.filter(m => m !== meal);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  showFavorites();
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
   
  let quickHtml = "<h4>Quick Add</h4><div style='display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;'>";

  quickItems.forEach(item => {
    quickHtml += `<button onclick="quickAddPantryItem('${item}')" style="width:auto;padding:8px 10px;margin:0;border-radius:20px;font-size:14px;">+ ${item}</button>`;
  });

  quickHtml += "</div>";

  let groups = {};

  pantry.forEach(item => {
    const cat = categorize(item);
    if(!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  });

  const order = ["Meat","Produce","Dairy","Frozen","Pantry","Other"];

  let pantryHtml = "";

  order.forEach(cat => {
    if(!groups[cat] || !groups[cat].length) return;

    pantryHtml += `<h4>${cat}</h4>`;
    pantryHtml += `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px;">`;

    groups[cat].forEach(item => {
      pantryHtml += `<button onclick="removePantryItem('${item}')" style="width:auto;padding:8px 10px;margin:0;border-radius:20px;background:#f3f4f6;color:#111827;border:1px solid #d1d5db;font-size:14px;">
        ${item} ✕
      </button>`;
    });

    pantryHtml += "</div>";
  });

  if(!pantry.length){
    pantryHtml = "<p class='small'>No pantry items yet. Add items you want to use soon.</p>";
  }

  document.getElementById("quickPantryItems").innerHTML = quickHtml;
  document.getElementById("pantryList").innerHTML = pantryHtml;
  document.getElementById("pantryPanel").style.display = "block";

  setTimeout(() => {
    document.getElementById("pantryInput").focus();
  }, 100);
}
 
 function updateTakeoutDaysSummary(){

  const days =
    plannerSettings.takeoutDays || [plannerSettings.takeoutDay || "Tuesday"];

  document.getElementById("takeoutDaysSummary").innerText =
    days.join(", ");
}

function saveTakeoutDaysSelection(){

  const selected = Array.from(
    document.querySelectorAll(".settingsTakeoutDay:checked")
  ).map(box => box.value);

  if(!selected.length){
    alert("Please choose at least one takeout day.");
    return;
  }

  plannerSettings.takeoutDays = selected;
  plannerSettings.takeoutDay = selected[0];

  updateTakeoutDaysSummary();
  hideTakeoutDaysPanel();
}
   
function savePlannerSettings(){

  plannerSettings.lunchesEnabled =
    document.getElementById("settingsLunchesEnabled").checked;
  plannerSettings.takeoutDays = Array.from(
  document.querySelectorAll(".settingsTakeoutDay:checked")
).map(box => box.value);

if(!plannerSettings.takeoutDays.length){
  alert("Please choose at least one takeout day.");
  return;
}

plannerSettings.takeoutDay = plannerSettings.takeoutDays[0];

plannerSettings.calendarHour =
  parseInt(document.getElementById("settingsCalendarHour").value);

plannerSettings.calendarDurationHours =
  parseFloat(document.getElementById("settingsCalendarDuration").value);

  plannerSettings.proteinLimit =
  parseInt(document.getElementById("settingsProteinLimit").value);

plannerSettings.historyLength =
  parseInt(document.getElementById("settingsHistoryLength").value);
  plannerSettings.weekStartDay =
  document.getElementById("settingsWeekStartDay").value;

  localStorage.setItem(
    "plannerSettings",
    JSON.stringify(plannerSettings)
  );

  hidePlannerSettings();

  alert("Settings saved 👍");
}
   
function pickLunch(){
  return r(LUNCHES);
}  
   
  function setDateNight(day){

  const index = currentPlan.findIndex(d => d.day === day);

  if(index === -1) return;

  currentPlan[index] = {
    day,
    dateNight: true
  };

  closeMenu();
  render();
}
   
  function showMealPreferences(){

  const proteins = [
    ["ground_beef", "Ground Beef"],
    ["beef", "Beef"],
    ["chicken", "Chicken"],
    ["pork", "Pork"],
    ["seafood", "Seafood"],
    ["mixed", "Mixed"]
  ];

  let html = "";

  proteins.forEach(p => {
    const checked = enabledProteins.includes(p[0]) ? "checked" : "";

    html += `
      <label style="display:block;padding:12px;border-bottom:1px solid #eee;">
        <input type="checkbox" value="${p[0]}" ${checked}>
        ${p[1]}
      </label>
    `;
  });

html += `<h4>Diet Restrictions</h4>`;

const restrictions = [
  ["no_pork", "No Pork"],
  ["no_red_meat", "No Red Meat"],
  ["no_seafood", "No Seafood"]
];

restrictions.forEach(r => {
  const checked = dietRestrictions.includes(r[0]) ? "checked" : "";

  html += `
    <label style="display:block;padding:12px;border-bottom:1px solid #eee;">
      <input type="checkbox" class="dietRestriction" value="${r[0]}" ${checked}>
      ${r[1]}
    </label>
  `;
});
     
  document.getElementById("proteinOptions").innerHTML = html;
  document.getElementById("mealPreferencesPanel").style.display = "block";
}

function saveMealPreferences(){

  const checked = document.querySelectorAll("#proteinOptions input:checked");

  enabledProteins = Array.from(checked).map(x => x.value);

  if(!enabledProteins.length){
    alert("Please leave at least one protein enabled.");
    return;
  }

  localStorage.setItem("enabledProteins", JSON.stringify(enabledProteins));

  const restrictionChecks = document.querySelectorAll(".dietRestriction:checked");
dietRestrictions = Array.from(restrictionChecks).map(x => x.value);
localStorage.setItem("dietRestrictions", JSON.stringify(dietRestrictions));

  hideMealPreferences();
}
   
  if (!loadSharedWeek()) {
  generate();
}

