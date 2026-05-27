function getHistory(){
  return JSON.parse(localStorage.getItem("mealHistory") || "[]");
}

function saveHistory(h){
  localStorage.setItem("mealHistory", JSON.stringify(h));
}
