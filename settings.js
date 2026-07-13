
function updateTakeoutDaysSummary(){

  const days =
    plannerSettings.takeoutDays || [plannerSettings.takeoutDay || "Tuesday"];

  document.getElementById("takeoutDaysSummary").innerText =
    days.length ? days.join(", ") : "None";
}

function saveTakeoutDaysSelection(){

  const selected = Array.from(
    document.querySelectorAll(".settingsTakeoutDay:checked")
  ).map(box => box.value);

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

  applyDarkMode(
    document.getElementById("settingsDarkMode").checked ? "dark" : "auto"
  );

  hidePlannerSettings();

  showToast("Settings saved 👍");
}
