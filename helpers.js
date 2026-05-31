function r(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function escapeHtml(str){
  if(str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getMealId(meal){
  return meal.id || meal.meal;
}

function getMealName(meal){
  return meal.meal || meal.name || meal.id;
}

function findMealByIdOrName(value){
  return MEALS.find(m => m.id === value || m.meal === value || m.name === value);
}

function showToast(message){
  const existing = document.getElementById("toast");
  if(existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("toast-visible");
    });
  });

  setTimeout(() => {
    toast.classList.remove("toast-visible");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}
