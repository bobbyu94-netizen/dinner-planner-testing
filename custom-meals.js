// Custom meals use the same shape as MEALS in data.js (plus optional cost and
// calories), so a meal can be copied into data.js later. Their recipes live in
// customRecipes under the same id.

const CUSTOM_MEAL_ID_PATTERN = /^custom_[a-z0-9_]+$/;

let editingCustomMealId = null;
let draftIngredients = [];
let addingFromMealSearch = false;

// Household data can be written by anyone with the code, so only accept
// well-formed meals. The id ends up in onclick handlers, so its format matters.
function sanitizeCustomMeals(list){
  if(!Array.isArray(list)) return [];

  return list.filter(m =>
    m && typeof m === "object" &&
    typeof m.id === "string" && CUSTOM_MEAL_ID_PATTERN.test(m.id) &&
    typeof m.meal === "string" && m.meal.trim() &&
    PROTEIN_LABELS[m.protein] &&
    Array.isArray(m.items) && m.items.every(i => typeof i === "string")
  );
}

function saveCustomMealsState(){
  localStorage.setItem("customMeals", JSON.stringify(customMeals));
  localStorage.setItem("customRecipes", JSON.stringify(customRecipes));
  pushToCloud();
}

function newCustomMealId(){
  return "custom_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
}

// ── My Meals list ───────────────────────────────────────────────────────────

function showCustomMeals(){
  const list = document.getElementById("customMealsList");

  if(!customMeals.length){
    list.innerHTML = "<p class='small'>No custom meals yet. Add one and it can show up in your weekly plan.</p>";
  } else {
    list.innerHTML = [...customMeals]
      .sort((a,b) => a.meal.localeCompare(b.meal))
      .map(m => {
        const details = [PROTEIN_LABELS[m.protein]];
        if(typeof m.cost === "number") details.push("~$" + Math.round(m.cost));
        if(typeof m.calories === "number") details.push(m.calories + " cal");

        return `<div class="meal-picker-row" onclick="openCustomMealForm('${m.id}')">
          <span>${escapeHtml(m.meal)}</span>
          <span class="meal-picker-tag">${escapeHtml(details.join(" · "))}</span>
        </div>`;
      }).join("");
  }

  document.getElementById("customMealsPanel").style.display = "block";
}

function closeCustomMeals(){
  document.getElementById("customMealsPanel").style.display = "none";
}

// ── Add / edit form ─────────────────────────────────────────────────────────

function getKnownIngredients(){
  const seen = {};

  getAllMeals().forEach(m => m.items.forEach(i => {
    const key = i.trim().toLowerCase();
    if(key && !seen[key]) seen[key] = i.trim();
  }));

  Object.values(SIDE_ITEMS).forEach(items => items.forEach(i => {
    const key = i.trim().toLowerCase();
    if(key && !seen[key]) seen[key] = i.trim();
  }));

  return Object.values(seen).sort((a,b) => a.localeCompare(b));
}

function openCustomMealForm(mealId, startingName){
  const meal = mealId ? customMeals.find(m => m.id === mealId) : null;
  const recipe = meal ? customRecipes[meal.id] : null;

  editingCustomMealId = meal ? meal.id : null;
  draftIngredients = meal ? [...meal.items] : [];

  document.getElementById("customMealFormTitle").textContent = meal ? "Edit Meal" : "Add a Meal";
  document.getElementById("customMealName").value = meal ? meal.meal : (startingName || "");
  document.getElementById("customMealProtein").value = meal ? meal.protein : "";
  document.getElementById("customMealIngredientInput").value = "";
  document.getElementById("customMealNeedsSide").checked = meal ? !meal.complete : true;
  document.getElementById("customMealLeftovers").value = meal ? String(meal.leftovers || 0) : "0";
  document.getElementById("customMealCost").value = meal && typeof meal.cost === "number" ? meal.cost : "";
  document.getElementById("customMealCalories").value = meal && typeof meal.calories === "number" ? meal.calories : "";
  document.getElementById("customMealCookTime").value = recipe ? recipe.cookTime : "";
  document.getElementById("customMealServings").value = recipe ? recipe.servings : "";
  document.getElementById("customMealSteps").value = recipe ? recipe.steps.join("\n") : "";
  document.getElementById("customMealRecipeDetails").open = !!recipe;

  document.getElementById("ingredientSuggestions").innerHTML = getKnownIngredients()
    .map(i => `<option value="${escapeHtml(i)}"></option>`)
    .join("");

  const deleteBtn = document.getElementById("deleteCustomMealBtn");
  deleteBtn.style.display = meal ? "block" : "none";
  deleteBtn.textContent = "Delete Meal";
  deleteBtn.dataset.armed = "";

  renderDraftIngredients();
  document.getElementById("customMealFormPanel").style.display = "block";
}

function closeCustomMealForm(){
  addingFromMealSearch = false;
  document.getElementById("customMealFormPanel").style.display = "none";
}

function openCustomMealFormFromSearch(){
  addingFromMealSearch = true;
  openCustomMealForm(null, document.getElementById("mealPickerSearch").value.trim());
}

function renderDraftIngredients(){
  document.getElementById("customMealIngredients").innerHTML = draftIngredients
    .map((item, i) =>
      `<button type="button" class="pantry-tag" onclick="removeDraftIngredient(${i})">${escapeHtml(item)} ✕</button>`
    ).join("");
}

function addDraftIngredient(){
  const input = document.getElementById("customMealIngredientInput");
  const known = getKnownIngredients();

  input.value.split(",").map(s => s.trim()).filter(Boolean).forEach(typed => {
    const lower = typed.toLowerCase();
    if(draftIngredients.some(i => i.toLowerCase() === lower)) return;
    draftIngredients.push(known.find(k => k.toLowerCase() === lower) || typed);
  });

  input.value = "";
  renderDraftIngredients();
}

function removeDraftIngredient(index){
  draftIngredients.splice(index, 1);
  renderDraftIngredients();
}

function saveCustomMeal(){
  addDraftIngredient();

  const name = document.getElementById("customMealName").value.trim();
  const protein = document.getElementById("customMealProtein").value;
  const costText = document.getElementById("customMealCost").value.trim();
  const caloriesText = document.getElementById("customMealCalories").value.trim();

  if(!name){
    showToast("Please enter a meal name.");
    return;
  }

  const nameInUse = getAllMeals().some(m =>
    m.id !== editingCustomMealId && m.meal.toLowerCase() === name.toLowerCase()
  );

  if(nameInUse){
    showToast("You already have a meal with that name.");
    return;
  }

  if(!protein){
    showToast("Please choose a protein.");
    return;
  }

  if(!draftIngredients.length){
    showToast("Please add at least one ingredient.");
    return;
  }

  const cost = parseFloat(costText);
  const calories = parseInt(caloriesText, 10);

  if(costText && !(cost >= 0)){
    showToast("Please enter a valid cost.");
    return;
  }

  if(caloriesText && !(calories >= 0)){
    showToast("Please enter valid calories.");
    return;
  }

  const existing = customMeals.find(m => m.id === editingCustomMealId);

  const meal = {
    id: existing ? existing.id : newCustomMealId(),
    meal: name,
    protein,
    items: [...draftIngredients],
    leftovers: parseInt(document.getElementById("customMealLeftovers").value, 10) || 0,
    complete: !document.getElementById("customMealNeedsSide").checked,
    custom: true,
    createdAt: existing && existing.createdAt ? existing.createdAt : new Date().toISOString()
  };

  // Leave blank values out: Firestore rejects undefined
  if(costText) meal.cost = cost;
  if(caloriesText) meal.calories = calories;

  if(existing){
    customMeals = customMeals.map(m => m.id === existing.id ? meal : m);
  } else {
    customMeals.push(meal);
  }

  saveCustomRecipeFromForm(meal.id);
  saveCustomMealsState();

  const fromSearch = addingFromMealSearch;
  closeCustomMealForm();

  if(fromSearch){
    assignPickedMeal(meal.id);
    return;
  }

  updatePlanForEditedMeal(meal);

  if(document.getElementById("customMealsPanel").style.display === "block"){
    showCustomMeals();
  }

  showToast(meal.meal + " saved");
}

// Recipe details are only kept when there are steps to show
function saveCustomRecipeFromForm(mealId){
  const steps = document.getElementById("customMealSteps").value
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean);

  if(!steps.length){
    delete customRecipes[mealId];
    return;
  }

  customRecipes[mealId] = {
    cookTime: document.getElementById("customMealCookTime").value.trim() || "Time not set",
    servings: parseInt(document.getElementById("customMealServings").value, 10) || costSettings.householdSize,
    steps
  };
}

// The plan keeps its own copy of each meal, so bring it up to date after an edit
function updatePlanForEditedMeal(meal){
  let changed = false;

  currentPlan.forEach((d, index) => {
    if(d.mealId !== meal.id) return;

    const keepSide = !meal.complete && d.side;
    const side = meal.complete ? null : (keepSide ? d.side : pickSide(meal, meal.protein));

    currentPlan[index] = Object.assign({}, d, {
      meal: meal.meal,
      items: meal.items,
      side,
      sideItems: side ? (SIDE_ITEMS[side] || []) : [],
      complete: !!meal.complete,
      leftovers: meal.leftovers || 0
    });
    changed = true;
  });

  if(changed){
    savePlan();
    render();
  }
}

// Deleting takes two taps, since browser confirm dialogs interrupt the app
function deleteCustomMeal(){
  const button = document.getElementById("deleteCustomMealBtn");

  if(button.dataset.armed !== "yes"){
    button.dataset.armed = "yes";
    button.textContent = "Tap again to delete";
    return;
  }

  const id = editingCustomMealId;
  const meal = customMeals.find(m => m.id === id);
  if(!meal) return;

  customMeals = customMeals.filter(m => m.id !== id);
  delete customRecipes[id];

  favorites = favorites.filter(key => key !== id);
  blocked = blocked.filter(key => key !== id);
  saveHistory(getHistory().filter(key => key !== id));

  localStorage.setItem("favorites", JSON.stringify(favorites));
  localStorage.setItem("blocked", JSON.stringify(blocked));
  saveCustomMealsState();

  closeCustomMealForm();
  showCustomMeals();
  render();
  showToast(meal.meal + " deleted");
}
