
function showMealPreferences(){

  const proteins = [
    ["ground_beef", "Ground Beef"],
    ["beef", "Beef"],
    ["chicken", "Chicken"],
    ["pork", "Pork"],
    ["seafood", "Seafood"],
    ["mixed", "Mixed"]
  ];

  let html = "";

  proteins.forEach(p => {
    const checked = enabledProteins.includes(p[0]) ? "checked" : "";

    html += `
      <label style="display:block;padding:12px;border-bottom:1px solid #eee;">
        <input type="checkbox" value="${p[0]}" ${checked}>
        ${p[1]}
      </label>
    `;
  });

  html += `<h4>Diet Restrictions</h4>`;

  const restrictions = [
    ["no_pork", "No Pork"],
    ["no_red_meat", "No Red Meat"],
    ["no_seafood", "No Seafood"]
  ];

  restrictions.forEach(r => {
    const checked = dietRestrictions.includes(r[0]) ? "checked" : "";

    html += `
      <label style="display:block;padding:12px;border-bottom:1px solid #eee;">
        <input type="checkbox" class="dietRestriction" value="${r[0]}" ${checked}>
        ${r[1]}
      </label>
    `;
  });

  document.getElementById("proteinOptions").innerHTML = html;
  document.getElementById("mealPreferencesPanel").style.display = "block";
}

function saveMealPreferences(){

  const checked = document.querySelectorAll("#proteinOptions input:checked");

  enabledProteins = Array.from(checked).map(x => x.value);

  if(!enabledProteins.length){
    showToast("Please leave at least one protein enabled.");
    return;
  }

  localStorage.setItem("enabledProteins", JSON.stringify(enabledProteins));

  const restrictionChecks = document.querySelectorAll(".dietRestriction:checked");
  dietRestrictions = Array.from(restrictionChecks).map(x => x.value);
  localStorage.setItem("dietRestrictions", JSON.stringify(dietRestrictions));

  hideMealPreferences();
}
