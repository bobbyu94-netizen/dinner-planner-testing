
function updateTakeoutDaysSummary(){

  const days =
    plannerSettings.takeoutDays || [plannerSettings.takeoutDay || "Tuesday"];

  document.getElementById("takeoutDaysSummary").innerText =
    days.join(", ");
}

function saveTakeoutDaysSelection(){

  const selected = Array.from(
    document.querySelectorAll(".settingsTakeoutDay:checked")
  ).map(box => box.value);

  if(!selected.length){
    showToast("Please choose at least one takeout day.");
    return;
  }

  plannerSettings.takeoutDays = selected;
  plannerSettings.takeoutDay = selected[0];

  updateTakeoutDaysSummary();
  hideTakeoutDaysPanel();
}

function savePlannerSettings(){

  plannerSettings.lunchesEnabled =
    document.getElementById("settingsLunchesEnabled").checked;

  plannerSettings.takeoutDays = Array.from(
    document.querySelectorAll(".settingsTakeoutDay:checked")
  ).map(box => box.value);

  if(!plannerSettings.takeoutDays.length){
    showToast("Please choose at least one takeout day.");
    return;
  }

  plannerSettings.takeoutDay = plannerSettings.takeoutDays[0];

  plannerSettings.calendarHour =
    parseInt(document.getElementById("settingsCalendarHour").value);

  plannerSettings.calendarDurationHours =
    parseFloat(document.getElementById("settingsCalendarDuration").value);

  plannerSettings.proteinLimit =
    parseInt(document.getElementById("settingsProteinLimit").value);

  plannerSettings.historyLength =
    parseInt(document.getElementById("settingsHistoryLength").value);

  plannerSettings.weekStartDay =
    document.getElementById("settingsWeekStartDay").value;

  localStorage.setItem(
    "plannerSettings",
    JSON.stringify(plannerSettings)
  );

  hidePlannerSettings();

  showToast("Settings saved 👍");
}
