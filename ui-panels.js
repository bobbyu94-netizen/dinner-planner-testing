
function openMenu(day){
  menuDay = day;
  document.getElementById("menu").style.display = "block";
}

function closeMenu(){
  document.getElementById("menu").style.display = "none";
}

function closeMove(){
  document.getElementById("movePanel").style.display = "none";
}

function showMainMenu(){
  document.getElementById("mainMenuPanel").style.display = "block";
}

function hideMainMenu(){
  document.getElementById("mainMenuPanel").style.display = "none";
}
   
 function showCalendarPanel(){
  document.getElementById("calendarPanel").style.display = "block";
}

function hideCalendarPanel(){
  document.getElementById("calendarPanel").style.display = "none";
}

function showPlannerSettings(){

  document.getElementById("settingsLunchesEnabled").checked =
    plannerSettings.lunchesEnabled;
  const savedTakeoutDays =
  plannerSettings.takeoutDays || [plannerSettings.takeoutDay || "Tuesday"];

document.querySelectorAll(".settingsTakeoutDay").forEach(box => {
  box.checked = savedTakeoutDays.includes(box.value);
});

  updateTakeoutDaysSummary();
   
  document.getElementById("settingsCalendarHour").value =
  plannerSettings.calendarHour ?? 18;

document.getElementById("settingsCalendarDuration").value =
  plannerSettings.calendarDurationHours ?? 1;
  document.getElementById("settingsProteinLimit").value =
  plannerSettings.proteinLimit ?? 3;

document.getElementById("settingsHistoryLength").value =
  plannerSettings.historyLength ?? 24;
  document.getElementById("settingsWeekStartDay").value =
  plannerSettings.weekStartDay || "Thursday";
  document.getElementById("plannerSettingsPanel").style.display = "block";
}

function hidePlannerSettings(){
  document.getElementById("plannerSettingsPanel").style.display = "none";
}

function showTakeoutDaysPanel(){

  const savedTakeoutDays =
    plannerSettings.takeoutDays || [plannerSettings.takeoutDay || "Tuesday"];

  document.querySelectorAll(".settingsTakeoutDay").forEach(box => {
    box.checked = savedTakeoutDays.includes(box.value);
  });

  document.getElementById("takeoutDaysPanel").style.display = "block";
}

function hideTakeoutDaysPanel(){
  document.getElementById("takeoutDaysPanel").style.display = "none";
}

function closeFavorites(){
  document.getElementById("favoritesPanel").style.display = "none";
}

function hideMealPreferences(){
  document.getElementById("mealPreferencesPanel").style.display = "none";
}

function closePantry(){
  document.getElementById("pantryPanel").style.display = "none"
}
