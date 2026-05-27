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

function addPantryItem(){

  const input = document.getElementById("pantryInput");

  const value = input.value.trim();

  if(!value){
    alert("Please enter an item");
    return;
  }

  pantry.push(value);
  localStorage.setItem("pantry", JSON.stringify(pantry));

  input.value = "";

  showPantry();
}

function quickAddPantryItem(item){

  if(!pantry.some(p => p.toLowerCase() === item.toLowerCase())){
    pantry.push(item);
    localStorage.setItem("pantry", JSON.stringify(pantry));
  }

  showPantry();
}
   
function removePantryItem(item){

  pantry = pantry.filter(i => i !== item)
  localStorage.setItem("pantry", JSON.stringify(pantry))

  showPantry()
}
