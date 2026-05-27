function getMealId(meal){
  return meal.id || meal.meal;
}

function getMealName(meal){
  return meal.meal || meal.name || meal.id;
}

function findMealByIdOrName(value){
  return MEALS.find(m => m.id === value || m.meal === value || m.name === value);
}
