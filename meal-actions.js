function favoriteMeal(day){
  const d = currentPlan.find(x => x.day === day);
  if(!d || d.takeout) return;

  const favoriteKey = d.mealId || d.meal;

  if(!favorites.includes(favoriteKey)){
    favorites.push(favoriteKey);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    pushToCloud();
  }

  closeMenu();
  showToast(d.meal + " added to favorites ⭐");
}

function skipMeal(day){
  const d = currentPlan.find(x => x.day === day);
  if(!d || d.takeout) return;

  const mealKey = d.mealId || d.meal;

  if(!blocked.includes(mealKey)){
    blocked.push(mealKey);
    localStorage.setItem("blocked", JSON.stringify(blocked));
    pushToCloud();
  }

  closeMenu();
  showToast(d.meal + " skipped 🚫");
}

function regenerateDay(day){
  let history = getHistory();
  let proteinCount = {};

  currentPlan.forEach(d => {
    if(d.day !== day && d.meal){
      const m = findMealByIdOrName(d.mealId || d.meal);
      if(m && m.protein !== "mixed"){
        proteinCount[m.protein] = (proteinCount[m.protein] || 0) + 1;
      }
    }
  });

  const usedMeals = currentPlan
    .filter(d => d.day !== day)
    .map(d => d.mealId || d.meal)
    .filter(Boolean);

  const meal = pickMeal(usedMeals, history, proteinCount);
  const side = meal.complete ? null : pickSide(meal, meal.protein);

  const index = currentPlan.findIndex(d => d.day === day);

  currentPlan[index] = {
    day,
    mealId: meal.id,
    meal: meal.meal,
    items: meal.items,
    side,
    sideItems: side ? (SIDE_ITEMS[side] || []) : [],
    complete: !!meal.complete,
    leftovers: meal.leftovers || 0,
  };

  savePlan();
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
    showToast("Invalid move");
    return;
  }

  const fromEntry = currentPlan[fromIndex];
  const toEntry = currentPlan[toIndex];

  const { day: fromDay, ...fromContent } = fromEntry;
  const { day: toDayKey, ...toContent } = toEntry;

  currentPlan[fromIndex] = { day: fromDay, ...toContent };
  currentPlan[toIndex] = { day: toDayKey, ...fromContent };

  savePlan();
  closeMove();
  render();
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

let pickerDay = null;

function openMealPicker(day){
  pickerDay = day;
  closeMenu();

  document.getElementById("mealPickerTitle").textContent = "Choose a meal for " + day;
  document.getElementById("mealPickerSearch").value = "";
  renderMealPickerList("");

  document.getElementById("mealPickerPanel").style.display = "block";

  setTimeout(() => {
    document.getElementById("mealPickerSearch").focus();
  }, 100);
}

function closeMealPicker(){
  document.getElementById("mealPickerPanel").style.display = "none";
}

function filterMealPicker(){
  renderMealPickerList(document.getElementById("mealPickerSearch").value);
}

function renderMealPickerList(filterText){

  const usedThisWeek = {};

  currentPlan.forEach(d => {
    if(d.day !== pickerDay && !d.takeout && !d.dateNight && d.meal){
      usedThisWeek[d.mealId || d.meal] = d.day;
    }
  });

  const query = (filterText || "").toLowerCase().trim();
  const groups = {};

  MEALS.forEach(m => {
    if(blocked.includes(m.id) || blocked.includes(m.meal)) return;
    if(!mealAllowedByDiet(m)) return;
    if(query && !m.meal.toLowerCase().includes(query)) return;

    const group = PROTEIN_LABELS[m.protein] || "Other";
    if(!groups[group]) groups[group] = [];
    groups[group].push(m);
  });

  const order = ["Ground Beef","Beef","Chicken","Pork","Seafood","Mixed"];
  let html = "";

  order.forEach(group => {
    if(!groups[group] || !groups[group].length) return;

    html += `<h4>${group}</h4>`;

    groups[group].forEach(m => {
      const isFavorite = favorites.includes(m.id) || favorites.includes(m.meal);
      const usedDay = usedThisWeek[m.id] || usedThisWeek[m.meal];

      html += `<div class="meal-picker-row" onclick="assignPickedMeal('${m.id}')">
        <span>${escapeHtml(m.meal)}</span>
        ${isFavorite ? `<span class="meal-picker-tag">⭐</span>` : ""}
        ${usedDay ? `<span class="meal-picker-tag">used ${escapeHtml(usedDay)}</span>` : ""}
      </div>`;
    });
  });

  document.getElementById("mealPickerList").innerHTML = html || "<p class='small'>No meals match.</p>";
}

function assignPickedMeal(mealId){

  const meal = findMealByIdOrName(mealId);
  if(!meal) return;

  const side = meal.complete ? null : pickSide(meal, meal.protein);
  const index = currentPlan.findIndex(d => d.day === pickerDay);

  currentPlan[index] = {
    day: pickerDay,
    mealId: meal.id,
    meal: meal.meal,
    items: meal.items,
    side,
    sideItems: side ? (SIDE_ITEMS[side] || []) : [],
    complete: !!meal.complete,
    leftovers: meal.leftovers || 0,
  };

  savePlan();
  closeMealPicker();
  render();
  showToast(meal.meal + " assigned to " + pickerDay);
}
