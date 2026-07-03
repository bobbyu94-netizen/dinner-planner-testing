function categorize(item){
  const s = item.toLowerCase();

  if (
    s.includes("frozen")
    ) return "Frozen";

  if (
    s.includes("broth") || s.includes("cornmeal") || s.includes("cornbread")
    ) return "Pantry";

  if (
    s.includes("beef") || s.includes("chicken") || s.includes("pork") ||
    s.includes("steak") || s.includes("shrimp") || s.includes("sausage") ||
    s.includes("salmon") || s.includes("ribs") || s.includes("hot dogs") ||
    s.includes("turkey") || s.includes ("bacon") || s.includes("catfish") ||
    s.includes("tilapia") || s.includes("mahi") || s.includes("scallop") ||
    s.includes("clam") || s.includes("oyster")
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

  currentPlan.forEach(d => {
  html += `<div class="day" style="display:flex;justify-content:space-between;gap:10px;">`
html += `<div style="flex:1;">`
    html += `<div style="display:flex;align-items:center;gap:8px;">
  <h3 style="margin:0;">${escapeHtml(d.day)}</h3>
  ${locked[d.day] ? `<span class="lock">🔒 Locked</span>` : ""}
</div>`;
    const lunch = lunchPlan.find(l => l.day === d.day);

if(lunch){
  html += `<div class="side">🥪 ${escapeHtml(lunch.meal)}</div>`;
}

  if (d.dateNight) {
  html += `<div class="meal">❤️ Date Night</div>`;
}
else if (d.takeout) {
  html += `<div class="meal">🍔 ${escapeHtml(d.takeout)}</div>`;
}
else {
  const recipeKey = d.mealId || (findMealByIdOrName(d.meal) || {}).id || null;
  html += `<div class="meal">🍽 ${recipeKey
    ? `<span class="meal-tappable" onclick="showRecipe('${recipeKey}')">${escapeHtml(d.meal)}</span>`
    : escapeHtml(d.meal)
  }</div>`;

  if (d.side) {
    html += `<div class="side">🥗 ${escapeHtml(d.side)}</div>`;
  }
}


html += `</div>`

html += `<div style="display:flex;flex-direction:column;width:44px;">
  <button onclick="toggleLock('${d.day}')" class="icon-btn" style="height:50%;padding:0;margin:0 0 6px 0;">${locked[d.day] ? "🔒" : "🔓"}</button>
  <button onclick="openMenu('${d.day}')" class="icon-btn" style="height:50%;padding:0;margin:0;font-size:20px;">⋮</button>
</div>`

html += `</div>`;
    
  });

  document.getElementById("planner").innerHTML = html;

  renderGroceryList();
}

function getGroceryItems(){
  const grocery = [];

  currentPlan.forEach(d => {
    if (d.takeout || d.dateNight) return;
    if (d.items) grocery.push(...d.items);
    if (d.sideItems) grocery.push(...d.sideItems);
  });

  return [...new Set(grocery)];
}

function renderGroceryList(){
  const unique = getGroceryItems();
  const uniqueSet = new Set(unique);

  Object.keys(shoppingListChecks).forEach(key => {
    if (!uniqueSet.has(key)) delete shoppingListChecks[key];
  });
  localStorage.setItem("shoppingListChecks", JSON.stringify(shoppingListChecks));

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
    list += `<h4>${cat}</h4><ul class="grocery-list">`;
    groups[cat].forEach(i => {
      const checked = shoppingListChecks[i] !== false;
      list += `<li class="grocery-row${checked ? "" : " grocery-row-unchecked"}">
        <label>
          <input type="checkbox" data-item="${escapeHtml(i)}" ${checked ? "checked" : ""} onchange="toggleShoppingCheck(this.dataset.item, this.checked)">
          <span>${escapeHtml(i)}</span>
        </label>
      </li>`;
    });
    list += `</ul>`;
  });

  document.getElementById("grocery").innerHTML = list || "<div class='small'>No items yet.</div>";
}

function toggleShoppingCheck(item, isChecked){
  if (isChecked) {
    delete shoppingListChecks[item];
  } else {
    shoppingListChecks[item] = false;
  }

  localStorage.setItem("shoppingListChecks", JSON.stringify(shoppingListChecks));
  pushToCloud();
  renderGroceryList();
}

function exportShoppingList(){
  const unique = getGroceryItems().filter(i => shoppingListChecks[i] !== false);

  if (!unique.length) {
    showToast("No items to export.");
    return;
  }

  const groups = {};

  unique.forEach(item => {
    const cat = categorize(item);
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  });

  const order = ["Produce","Meat","Dairy","Pantry","Frozen","Other"];
  let text = "Shopping List\n";

  order.forEach(cat => {
    if (!groups[cat] || !groups[cat].length) return;
    groups[cat].sort((a,b) => a.localeCompare(b));
    text += "\n" + cat + "\n";
    groups[cat].forEach(i => {
      text += "- " + i + "\n";
    });
  });

  if (navigator.share) {
    navigator.share({ text: text }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("Copied — paste into Notes");
    });
  } else {
    showToast("Sharing not supported on this browser.");
  }
}
