function usePantryItemsForMeal(day){

  const d = currentPlan.find(x => x.day === day);

  if(!d || d.takeout || d.dateNight || !d.items) return;

  d.items.forEach(item => {
    pantry = pantry.filter(p => p.toLowerCase() !== item.toLowerCase());
  });

  localStorage.setItem("pantry", JSON.stringify(pantry));
  pushToCloud();
}

function showPantry(){

  const quickItems = [
    "Chicken breast",
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
      pantryHtml += `<button data-item="${escapeHtml(item)}" onclick="removePantryItem(this.dataset.item)" class="pantry-tag">
        ${escapeHtml(item)} ✕
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

function addPantryItem(){

  const input = document.getElementById("pantryInput");

  const value = input.value.trim();

  if(!value){
    showToast("Please enter an item");
    return;
  }

  pantry.push(value);
  localStorage.setItem("pantry", JSON.stringify(pantry));
  pushToCloud();

  input.value = "";

  showPantry();
}

function quickAddPantryItem(item){

  if(!pantry.some(p => p.toLowerCase() === item.toLowerCase())){
    pantry.push(item);
    localStorage.setItem("pantry", JSON.stringify(pantry));
    pushToCloud();
  }

  showPantry();
}
   
function removePantryItem(item){

  pantry = pantry.filter(i => i !== item)
  localStorage.setItem("pantry", JSON.stringify(pantry))
  pushToCloud()

  showPantry()
}
