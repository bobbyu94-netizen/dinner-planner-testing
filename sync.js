// ── Firebase config ──────────────────────────────────────────────────────────
// Fill these in after creating your Firebase project.
// See setup instructions in the README or ask Claude.
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyAp6eqzmQIf3I1rszGbnU7vnkjeloMVb28",
  authDomain:        "dinner-planner-34290.firebaseapp.com",
  projectId:         "dinner-planner-34290",
};
// ─────────────────────────────────────────────────────────────────────────────

let db = null;
let householdCode = null;
let _unsubscribe = null;
let _applyingCloudUpdate = false;

function _getSharedState() {
  return {
    currentPlan,
    lunchPlan,
    locked,
    favorites,
    blocked,
    pantry,
    mealHistory: getHistory(),
  };
}

function _applySharedState(data) {
  _applyingCloudUpdate = true;

  if (Array.isArray(data.currentPlan))              currentPlan = data.currentPlan;
  if (Array.isArray(data.lunchPlan))                lunchPlan   = data.lunchPlan;
  if (data.locked && typeof data.locked === "object") locked    = data.locked;
  if (Array.isArray(data.favorites))                favorites   = data.favorites;
  if (Array.isArray(data.blocked))                  blocked     = data.blocked;
  if (Array.isArray(data.pantry))                   pantry      = data.pantry;
  if (Array.isArray(data.mealHistory))              saveHistory(data.mealHistory);

  localStorage.setItem("currentPlan", JSON.stringify(currentPlan));
  localStorage.setItem("lunchPlan",   JSON.stringify(lunchPlan));
  localStorage.setItem("locked",      JSON.stringify(locked));
  localStorage.setItem("favorites",   JSON.stringify(favorites));
  localStorage.setItem("blocked",     JSON.stringify(blocked));
  localStorage.setItem("pantry",      JSON.stringify(pantry));

  _applyingCloudUpdate = false;
}

function pushToCloud() {
  if (!db || !householdCode || _applyingCloudUpdate) return;
  _setSyncStatus("syncing");
  db.collection("households").doc(householdCode)
    .set(_getSharedState())
    .then(() => _setSyncStatus("synced"))
    .catch(e => { console.warn("Sync error:", e); _setSyncStatus("error"); });
}

function _setSyncStatus(status) {
  const el = document.getElementById("syncStatus");
  if (!el) return;
  const map = {
    synced:  { text: "☁️ Synced",   color: "" },
    syncing: { text: "☁️ Syncing…", color: "" },
    error:   { text: "⚠️ Sync error", color: "red" },
    off:     { text: "",             color: "" },
  };
  const s = map[status] || map.off;
  el.textContent  = s.text;
  el.style.color  = s.color;
}

function initSync(code) {
  householdCode = code;
  localStorage.setItem("householdCode", code);

  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
  db = firebase.firestore();

  if (_unsubscribe) _unsubscribe();

  _unsubscribe = db.collection("households").doc(householdCode).onSnapshot(doc => {
    if (!doc.exists) {
      // First device to use this code — push local state up
      pushToCloud();
      return;
    }
    _applySharedState(doc.data());
    render();
    _setSyncStatus("synced");
  }, err => {
    console.warn("Sync listener error:", err);
    _setSyncStatus("error");
  });
}

// ── Household panel UI ───────────────────────────────────────────────────────

function showHouseholdPanel() {
  const el = document.getElementById("householdCodeInput");
  if (el) el.value = householdCode || "";

  const status = document.getElementById("householdCurrentStatus");
  if (status) {
    status.textContent = householdCode
      ? "Connected: " + householdCode
      : "Not connected to a household.";
  }

  document.getElementById("householdPanel").style.display = "block";
}

function hideHouseholdPanel() {
  document.getElementById("householdPanel").style.display = "none";
}

function generateHouseholdCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  document.getElementById("householdCodeInput").value = code;
}

function saveHouseholdCode() {
  const raw = document.getElementById("householdCodeInput").value.trim().toUpperCase();
  if (raw.length < 3) {
    showToast("Enter at least 3 characters.");
    return;
  }
  initSync(raw);
  hideHouseholdPanel();
  showToast("Household connected! ☁️");
}

function disconnectHousehold() {
  if (_unsubscribe) { _unsubscribe(); _unsubscribe = null; }
  db = null;
  householdCode = null;
  localStorage.removeItem("householdCode");
  _setSyncStatus("off");
  hideHouseholdPanel();
  showToast("Household disconnected.");
}
