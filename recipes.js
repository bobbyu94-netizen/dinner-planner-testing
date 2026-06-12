function showRecipe(mealId) {
  const recipe = RECIPES[mealId];
  if (!recipe) return;

  const meal = findMealByIdOrName(mealId);
  const name = meal ? meal.meal : mealId;

  document.getElementById("recipeTitle").textContent = name;

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

  document.getElementById("recipePanel").style.display = "block";
  document.getElementById("recipeOverlay").style.display = "block";
}

function closeRecipe() {
  document.getElementById("recipePanel").style.display = "none";
  document.getElementById("recipeOverlay").style.display = "none";
}
