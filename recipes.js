let currentRecipeMealId = null;

function getRecipe(mealId) {
  return customRecipes[mealId] || RECIPES[mealId] || null;
}

function showRecipe(mealId) {
  currentRecipeMealId = mealId;

  const recipe = getRecipe(mealId);
  const meal = findMealByIdOrName(mealId);
  const name = meal ? meal.meal : mealId;

  document.getElementById("recipeTitle").textContent = name;

  if (recipe) {
    document.getElementById("recipeMeta").innerHTML =
      `<div class="recipe-meta-pill">⏱ ${escapeHtml(recipe.cookTime)}</div>` +
      `<div class="recipe-meta-pill">🍽 Serves ${recipe.servings}</div>`;

    document.getElementById("recipeSteps").innerHTML = recipe.steps
      .map((step, i) =>
        `<div class="recipe-step">
          <span class="recipe-step-num">${i + 1}</span>
          <span>${escapeHtml(step)}</span>
        </div>`
      ).join("");
  } else {
    document.getElementById("recipeMeta").innerHTML = "";
    document.getElementById("recipeSteps").innerHTML = "<p class='small'>No recipe yet. Tap Edit to add one.</p>";
  }

  document.getElementById("recipePanel").style.display = "block";
  document.getElementById("recipeOverlay").style.display = "block";
}

function closeRecipe() {
  document.getElementById("recipePanel").style.display = "none";
  document.getElementById("recipeOverlay").style.display = "none";
}

function openRecipeEditor() {
  const mealId = currentRecipeMealId;
  if (!mealId) return;

  const recipe = getRecipe(mealId);

  document.getElementById("recipeEditCookTime").value = recipe ? recipe.cookTime : "";
  document.getElementById("recipeEditServings").value = recipe ? recipe.servings : "";
  document.getElementById("recipeEditSteps").value = recipe ? recipe.steps.join("\n") : "";

  document.getElementById("deleteCustomRecipeBtn").style.display =
    customRecipes[mealId] ? "block" : "none";

  document.getElementById("recipeEditPanel").style.display = "block";
}

function closeRecipeEditor() {
  document.getElementById("recipeEditPanel").style.display = "none";
}

function saveRecipeEdit() {
  const mealId = currentRecipeMealId;
  if (!mealId) return;

  const cookTime = document.getElementById("recipeEditCookTime").value.trim();
  const servings = parseInt(document.getElementById("recipeEditServings").value, 10);
  const steps = document.getElementById("recipeEditSteps").value
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean);

  if (!cookTime || !servings || !steps.length) {
    showToast("Please fill in cook time, servings, and at least one step.");
    return;
  }

  customRecipes[mealId] = { cookTime, servings, steps };
  localStorage.setItem("customRecipes", JSON.stringify(customRecipes));
  pushToCloud();

  closeRecipeEditor();
  showRecipe(mealId);
  showToast("Recipe saved");
}

function deleteCustomRecipe() {
  const mealId = currentRecipeMealId;
  if (!mealId) return;

  delete customRecipes[mealId];
  localStorage.setItem("customRecipes", JSON.stringify(customRecipes));
  pushToCloud();

  closeRecipeEditor();
  showRecipe(mealId);
  showToast("Reverted to default recipe");
}
