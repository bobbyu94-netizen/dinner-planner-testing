function usePantryItemsForMeal(day){

  const d = currentPlan.find(x => x.day === day);

  if(!d || d.takeout || d.dateNight || !d.items) return;

  d.items.forEach(item => {
    pantry = pantry.filter(p => p.toLowerCase() !== item.toLowerCase());
  });

  localStorage.setItem("pantry", JSON.stringify(pantry));
}

function showPantry(){

  const quickItems = [
    "Chicken",
    "Ground beef",
    "Shrimp",
    "Bacon",
    "Rice",
    "Milk",
    "Potatoes",
    "Lettuce",
    "Tomatoes",
    "Cheese"
  ];
