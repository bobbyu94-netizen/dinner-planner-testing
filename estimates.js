// Estimated cost and calories for meals and sides.
//
// cost     = dollars for the whole recipe at a household size of 4, counting
//            only the portion of each ingredient used. Scaled by household size.
// calories = per serving, not scaled.
//
// Prices last reviewed: November 2026 (Walmart and regional averages, with the
// rest estimated). Sale prices are not reflected.

const ESTIMATE_BASE_HOUSEHOLD_SIZE = 4;

const DEFAULT_COST_SETTINGS = {
  householdSize: 4,
  takeoutCost: 30,
  dateNightCost: 60
};

const MEAL_ESTIMATES = {
  meatloaf: {cost:15, calories:490},
  hamburger_steak: {cost:15, calories:480},
  smash_burgers: {cost:12, calories:640},
  cheeseburgers: {cost:12, calories:640},
  tacos: {cost:17, calories:850},
  spaghetti_meat_sauce: {cost:14, calories:720},
  sloppy_joes: {cost:10, calories:530},
  hamburger_helper: {cost:9, calories:490},
  hamburger_soup: {cost:16, calories:390},
  lasagna: {cost:25, calories:730},
  shepherds_pie: {cost:15, calories:550},
  stuffed_peppers: {cost:12, calories:440},
  baked_ziti: {cost:15, calories:690},
  cubed_steak: {cost:12, calories:280},
  roast: {cost:36, calories:770},
  steak: {cost:27, calories:450},
  philly_cheesesteaks: {cost:19, calories:700},
  chicken_wings: {cost:11, calories:560},
  chicken_parm: {cost:12, calories:610},
  grilled_chicken: {cost:8, calories:270},
  chicken_quesadillas: {cost:10, calories:690},
  grilled_chicken_sandwiches: {cost:15, calories:580},
  alice_springs_chicken: {cost:10, calories:590},
  buffalo_chicken: {cost:8, calories:260},
  chicken_fajitas: {cost:11, calories:510},
  chicken_yellow_rice: {cost:7, calories:430},
  chicken_pot_pie: {cost:11, calories:500},
  french_onion_chicken: {cost:8, calories:300},
  chicken_alfredo: {cost:13, calories:1110},
  bruschetta_chicken: {cost:12, calories:260},
  lemon_pepper_chicken: {cost:7, calories:240},
  smoked_chicken: {cost:10, calories:500},
  chicken_bowls: {cost:10, calories:600},
  chicken_caesar_salad: {cost:12, calories:350},
  chicken_fried_rice: {cost:7, calories:620},
  cajun_chicken_pasta: {cost:12, calories:980},
  white_chicken_chili: {cost:17, calories:510},
  buffalo_chicken_wraps: {cost:10, calories:490},
  tuscan_chicken: {cost:16, calories:670},
  chicken_enchiladas: {cost:13, calories:670},
  chicken_dumplings: {cost:14, calories:920},
  pork_chops: {cost:9, calories:330},
  pork_tenderloin: {cost:11, calories:270},
  bbq_pork: {cost:13, calories:720},
  ribs: {cost:19, calories:920},
  smoked_sausage: {cost:5, calories:430},
  fried_potatoes_sausage: {cost:8, calories:670},
  hot_dogs: {cost:6, calories:640},
  chili_dogs: {cost:10, calories:830},
  breakfast_for_dinner: {cost:9, calories:650},
  red_beans_rice: {cost:7, calories:810},
  cajun_sausage_pasta: {cost:11, calories:1170},
  bbq_baked_potatoes: {cost:9, calories:850},
  shrimp_boil: {cost:30, calories:580},
  steamed_shrimp: {cost:17, calories:230},
  salmon: {cost:21, calories:450},
  shrimp_alfredo: {cost:18, calories:1080},
  shrimp_pasta: {cost:12, calories:560},
  fried_catfish: {cost:17, calories:440},
  shrimp_tacos: {cost:16, calories:620},
  blackened_salmon: {cost:22, calories:450},
  baked_tilapia: {cost:13, calories:320},
  mahi_mahi: {cost:21, calories:200},
  seared_scallops: {cost:28, calories:250},
  clam_chowder: {cost:13, calories:470},
  fried_oysters: {cost:34, calories:460},
  chili: {cost:15, calories:440},
  gumbo: {cost:24, calories:830},
  jambalaya: {cost:10, calories:530},
  veggie_soup: {cost:8, calories:170},
  loaded_potato_soup: {cost:8, calories:530},
  hibachi: {cost:13, calories:740},
  chef_salads: {cost:18, calories:380},
  stuffed_shells: {cost:18, calories:730},
  blts: {cost:8, calories:430}
};

const SIDE_ESTIMATES = {
  "Asparagus": {cost:4, calories:20},
  "Wild Rice": {cost:2, calories:180},
  "Broccoli Cheddar Rice": {cost:4, calories:360},
  "Mexican Rice": {cost:1, calories:320},
  "Black Beans": {cost:2, calories:180},
  "Baked Beans": {cost:2, calories:200},
  "Baked Potato": {cost:2, calories:280},
  "Mac & Cheese": {cost:4, calories:350},
  "Mashed Potatoes": {cost:3, calories:340},
  "Brussels Sprouts": {cost:3, calories:50},
  "Fried Potatoes": {cost:3, calories:280},
  "Side Salad": {cost:3, calories:20},
  "Garlic Bread": {cost:3, calories:300},
  "Broccoli": {cost:2, calories:40},
  "Biscuits": {cost:2, calories:200},
  "Cornbread": {cost:1, calories:230},
  "Hushpuppies": {cost:2, calories:250},
  "Spaghetti": {cost:1, calories:210},
  "Rice & Tomato Gravy": {cost:2, calories:310},
  "French Fries": {cost:2, calories:160},
  "Tater Tots": {cost:3, calories:280},
  "Seasoned Italian Green Beans": {cost:2, calories:40},
  "Dirty Rice": {cost:2, calories:200},
  "Squash & Onions": {cost:4, calories:90},
  "Coleslaw": {cost:3, calories:130},
  "Pasta Salad": {cost:3, calories:410},
  "Sweet Potatoes": {cost:2, calories:180}
};

function scaleCost(cost){
  return cost * (costSettings.householdSize / ESTIMATE_BASE_HOUSEHOLD_SIZE);
}

// Returns {cost, calories} for one day of the plan, or null if it has no estimate.
// Takeout and Date Night are flat amounts with no calories.
function getDayEstimate(d){
  if (d.dateNight) return {cost: costSettings.dateNightCost, calories: null};
  if (d.takeout) return {cost: costSettings.takeoutCost, calories: null};

  const mealRecord = findMealByIdOrName(d.mealId || d.meal);
  if (!mealRecord) return null;

  // A custom meal's cost is what it costs that family, so it isn't scaled
  const isCustom = !!mealRecord.custom;
  const meal = isCustom ? mealRecord : MEAL_ESTIMATES[mealRecord.id];
  if (!meal) return null;

  const side = d.side ? SIDE_ESTIMATES[d.side] : null;
  const hasCost = typeof meal.cost === "number";
  const hasCalories = typeof meal.calories === "number";

  return {
    cost: hasCost
      ? (isCustom ? meal.cost : scaleCost(meal.cost)) + (side ? scaleCost(side.cost) : 0)
      : null,
    calories: hasCalories ? meal.calories + (side ? side.calories : 0) : null
  };
}

function formatDayEstimate(estimate){
  if (!estimate) return "";

  const parts = [];
  if (estimate.cost !== null) parts.push("~$" + Math.round(estimate.cost));
  if (estimate.calories !== null) parts.push(estimate.calories + " cal");

  return parts.join(" · ");
}

// Returns {total, missing}: the week's total and how many days have no estimate.
function getWeekEstimate(plan){
  let total = 0;
  let missing = 0;

  plan.forEach(d => {
    const estimate = getDayEstimate(d);
    if (estimate && estimate.cost !== null) total += estimate.cost;
    else missing++;
  });

  return {total, missing};
}
