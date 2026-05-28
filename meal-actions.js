function favoriteMeal(day){
  const d = currentPlan.find(x => x.day === day);
  if(!d || d.takeout) return;

  const favoriteKey = d.mealId || d.meal;

  if(!favorites.includes(favoriteKey)){
    favorites.push(favoriteKey);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  closeMenu();
  alert(d.meal + " added to favorites ⭐");
}

function skipMeal(day){
  const d = currentPlan.find(x => x.day === day);
  if(!d || d.takeout) return;

  const mealKey = d.mealId || d.meal;

  if(!blocked.includes(mealKey)){
    blocked.push(mealKey);
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
    mealId: fromEntry.mealId,
    meal: fromEntry.meal,
    items: fromEntry.items,
    side: fromEntry.side,
    sideItems: fromEntry.sideItems,
    complete: fromEntry.complete
  };

  const toContent = {
    takeout: toEntry.takeout,
    mealId: toEntry.mealId,
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
