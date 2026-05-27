
const MEALS = [
  {meal:"Meatloaf", protein:"ground_beef", items:["Ground beef","Breadcrumbs","Eggs","Ketchup","Hot sauce"], leftovers:true},
  {meal:"Hamburger Steak", protein:"ground_beef", items:["Ground beef","Onions","Gravy","Mushrooms"], leftovers:true},
  {meal:"Smash Burgers", protein:"ground_beef", items:["Ground beef","Buns","Onions","American cheese"], leftovers:true},
  {meal:"Cheeseburgers", protein:"ground_beef", items:["Ground beef","Buns","Onions","American cheese"]},
  {meal:"Tacos", protein:"ground_beef", items:["Ground beef","Taco Kit","Onions","Tomatoes","Lettuce","Cheddar cheese"], leftovers:true, complete:true},
  {meal:"Spaghetti w Meat Sauce", protein:"ground_beef", items:["Ground beef","Spaghetti noodles","Pasta sauce"], leftovers:true},
  {meal:"Sloppy Joes", protein:"ground_beef", items:["Ground beef","Hamburger buns","Canned Manwhich"], leftovers:true},
  {meal:"Hamburger Helper", protein:"ground_beef", items:["Ground beef","Hamburger Helper box","Milk"], leftovers:true},
  {meal:"Hamburger Soup", protein:"ground_beef", items:["Ground beef","Mixed vegetables"], complete:true, leftovers:2},
  {meal:"Lasagna", protein:"ground_beef", items:["Ground beef","Pasta","Mozzarella Cheese","Pasta Sauce","Ricotta cheese","Sharp chedder cheese"], leftovers:2},
  {meal:"Shepherd's Pie", protein:"ground_beef", items:["Ground beef","Potatoes","Onions","Brown gravy"], complete:true, leftovers:true},
  {meal:"Stuffed Peppers", protein:"ground_beef", items:["Ground beef","Bell peppers","Rice","Tomato sauce"],complete:true, leftovers:true},
  {meal:"Baked Ziti", protein:"ground_beef", items:["Ground beef","Pasta","Mozzarella Cheese","Pasta Sauce"], leftovers:2},

  {meal:"Cubed Steak", protein:"beef", items:["Cubed steak"]},
  {meal:"Roast", protein:"beef", items:["Beef Chuck Roast","Potatoes","Carrots","Onions","Ranch dressing packet","Pepperoncinis","Brown gravy packet","Au jus packet"], leftovers:true},
  {meal:"Steak", protein:"beef", items:["Steak"]},
  {meal:"Philly Cheesesteaks", protein:"beef", items:["Steak","French bread","White American cheese","Onions","Mushrooms"]},

  {meal:"Chicken Wings", protein:"chicken", items:["Chicken wings"]},
  {meal:"Chicken Parm", protein:"chicken", items:["Chicken","Marinara","Mozzarella cheese","Italian bread crumbs","Parmasean cheese"], leftovers:true},
  {meal:"Grilled Chicken", protein:"chicken", items:["Chicken"], leftovers:true},
  {meal:"Chicken Quesadillas", protein:"chicken", items:["Chicken","Tortillas","Cheese","Rotel"]},
  {meal:"Grilled Chicken Sandwiches", protein:"chicken", items:["Chicken","Pretzel Buns","Swiss cheese","Mushrooms","Onions"]},
  {meal:"Alice Springs Chicken", protein:"chicken", items:["Chicken","Bacon","Cheese","Honey mustard"]},
  {meal:"Buffalo Chicken", protein:"chicken", items:["Chicken","Buffalo sauce"]},
  {meal:"Chicken Fajitas", protein:"chicken", items:["Chicken","Peppers","Tortillas"], leftovers:true},
  {meal:"Chicken & Yellow Rice", protein:"chicken", items:["Chicken","Yellow Rice"], complete:true},
  {meal:"Chicken Pot Pie", protein:"chicken", items:["Chicken","Vegetables"], complete:true},
  {meal:"French Onion Chicken", protein:"chicken", items:["Chicken","Onion soup mix"]},
  {meal:"Chicken Alfredo", protein:"chicken", items:["Chicken","Pasta","Heavy whipping cream","Parmasean cheese","Garlic"]},
  {meal:"Bruschetta Chicken", protein:"chicken", items:["Chicken","Tomatoes","Basil", "Balsalmic vinegar"]},
  {meal:"Lemon Pepper Chicken", protein:"chicken", items:["Chicken","Lemon pepper seasoning"]},
  {meal:"Smoked Chicken", protein:"chicken", items:["Chicken"], leftovers:true},
  {meal:"Chicken Bowls", protein:"chicken", items:["Chicken","Lettuce","Rice","Black beans","Cheddar cheese","Salsa"], complete:true},
  {meal:"Chicken Caesar Salad", protein:"chicken", items:["Chicken","Lettuce","Caesar dressing"], complete:true},
  {meal:"Chicken Fried Rice", protein:"chicken", items:["Chicken","Rice","Eggs","Mixed vegetables","Soy sauce"], leftovers:true, complete:true},
  {meal:"Cajun Chicken Pasta", protein:"chicken", items:["Chicken","Pasta","Heavy whipping cream","Parmasean cheese","Cajun seasoning"], leftovers:true},
  {meal:"White Chicken Chili", protein:"chicken", items:["Chicken","White beans","Cream cheese","Green chilies"], leftovers:true, complete:true},
  {meal:"Buffalo Chicken Wraps", protein:"chicken", items:["Chicken","Buffalo sauce","Lettuce","Ranch","Tortillas"]},
  {meal:"Tuscan Chicken", protein:"chicken", items:["Chicken","Spinach","Heavy whipping cream","Parmasean cheese","Sun dried tomatoes"], leftovers:true, complete:true},
  {meal:"Chicken Enchiladas", protein:"chicken", items:["Chicken","Tortillas","Enchilada sauce","Cheddar cheese"], leftovers:true},
  {meal:"Chicken & Dumplings", protein:"chicken", items:["Chicken","Biscuits","Cream soup"], leftovers:2, complete:true},

  {meal:"Pork Chops", protein:"pork", items:["Pork chops"], leftovers:true},
  {meal:"Pork Tenderloin", protein:"pork", items:["Pork tenderloin"], leftovers:true},
  {meal:"BBQ Pork", protein:"pork", items:["Pork","BBQ sauce"], leftovers:true, complete:true},
  {meal:"Ribs", protein:"pork", items:["Ribs","BBQ sauce"], leftovers:true},
  {meal:"Smoked Sausage", protein:"pork", items:["Smoked sausage"]},
  {meal:"Fried Potatoes w Sausage", protein:"pork", items:["Sausage","Potatoes","Onions"], leftovers:true, complete:true},
  {meal:"Hot Dogs", protein:"pork", items:["Hot dogs","Buns","American cheese","Onions"]},
  {meal:"Chili Dogs", protein:"pork", items:["Hot dogs","Chili","American cheese","Onions"]},
  {meal:"Breakfast for Dinner", protein:"pork", items:["Bacon","Eggs","Biscuits","Gravy"], leftovers:false, complete:true},
  {meal:"Red Beans & Rice", protein:"pork", items:["Smoked sausage","Rice","Red beans"], leftovers:true, complete:true},
  {meal:"Cajun Sausage Pasta", protein:"pork", items:["Smoked sausage","Pasta","Heavy whipping cream","Parmasean cheese","Cajun seasoning"], leftovers:true, complete:true},
  {meal:"BBQ Baked Potatoes", protein:"pork", items:["Pork","Potatoes","Cheddar cheese","BBQ sauce"], leftovers:true, complete:true},

  {meal:"Shrimp Boil", protein:"seafood", items:["Shrimp","Frozen corn","Potatoes","Onions","Andouille sausage","Old Bay seasoning"], complete:true},
  {meal:"Steamed Shrimp", protein:"seafood", items:["Shrimp","Old Bay seasoning"]},
  {meal:"Salmon", protein:"seafood", items:["Salmon"]},
  {meal:"Shrimp Alfredo", protein:"seafood", items:["Shrimp","Pasta","Heavy whipping cream","Parmasean cheese","garlic"]},
  {meal:"Shrimp Pasta", protein:"seafood", items:["Shrimp","Pasta"]},
  {meal:"Fried Catfish", protein:"seafood", items:["Catfish","Breading","Oil"], leftovers:false},

  {meal:"Chili", protein:"mixed", items:["Ground beef","Beans","Diced tomatoes",":Chili seasoning"], leftovers:true, complete:true},
  {meal:"Gumbo", protein:"mixed", items:["Chicken","Sausage","Rice","Green Peppers","Celery","Onions","Chicken Broth"], leftovers:2, complete:true},
  {meal:"Jambalaya", protein:"mixed", items:["Chicken","Sausage","Rice"], leftovers:true, complete:true},
  {meal:"Chicken & Dumplings", protein:"mixed", items:["Chicken","Dumplings"], leftovers:true, complete:2},
  {meal:"Veggie Soup", protein:"mixed", items:["Mixed vegetables"], leftovers:true, complete:true},
  {meal:"Loaded Potato Soup", protein:"mixed", items:["Potatoes","Cheese"], leftovers:true, complete:true},
  {meal:"Hibachi", protein:"mixed", items:["Chicken","Rice","Squash","Zuccini","Onions","Yum Yum sauce"], leftovers:true, complete:true},
  {meal:"Chef Salads", protein:"mixed", items:["Lettuce","Ham","Turkey","Eggs","Onions","Cucumbers","Tomatoes","Croutons"]},
  {meal:"Stuffed Shells", protein:"mixed", items:["Shell Pasta","Ricotta Cheese","Mozzerella Cheese","Ground Beef","Pasta Sauce"], leftovers:true},
  {meal:"BLTs", protein:"mixed", items:["Bacon","Bread","Lettuce","Tomatoes"]}
];

const SIDE_ITEMS = {
  "Asparagus":["Asparagus"],
  "Wild Rice":["Rice"],
  "Broccoli Cheddar Rice":["Rice","Cheese","Broccoli"],
  "Mexican Rice":["Rice"],
  "Black Beans":["Beans"],
  "Baked Beans":["Baked beans"],
  "Baked Potato":["Potatoes"],
  "Mac & Cheese":["Velvetta mac"],
  "Mashed Potatoes":["Potatoes","Butter","Milk"],
  "Brussels Sprouts":["Brussels sprouts"],
  "Fried Potatoes":["Potatoes","Onions","American cheese"],
  "Side Salad":["Lettuce","Tomatoes"],
  "Garlic Bread":["Frozen garlic bread"],
  "Broccoli":["Broccoli"],
  "Biscuits":["Canned biscuits"],
  "Cornbread":["Cornbread mix"],
  "Hushpuppies":["Hushpuppy mix"],
  "Spaghetti":["Spaghetti noodles"],
  "Rice & Tomato Gravy":["Rice","Tomato sauce","Bacon"],
  "French Fries":["Frozen French fries"],
  "Tater Tots":["Frozen tater tots"],
  "Seasoned Italian Green Beans":["Green beans"],
  "Dirty Rice":["Rice"],
  "Squash & Onions":["Squash","Onions"],
  "Coleslaw":["Coleslaw mix"],
  "Pasta Salad":["Pasta","Dressing"],
  "Sweet Potatoes":["Sweet potatoes"]
};

const SIDE_GROUPS = {
  ground_beef:["Mac & Cheese","French Fries","Tater Tots","Pasta Salad","Side Salad"],
  beef:["Mashed Potatoes","Asparagus","Sweet Potatoes","Seasoned Italian Green Beans","Side Salad"],
  chicken:["Broccoli","Side Salad","Mexican Rice","Pasta Salad","Wild Rice"],
  pork:["Coleslaw","Baked Beans","Mac & Cheese","Sweet Potatoes","Mashed Potatoes","Fried Potatoes"],
  seafood:["Asparagus","Wild Rice","Cornbread","Broccoli","Pasta Salad"],
  mixed:[]
};

const SIDE_OVERRIDES = {
  "Tacos":["Mexican Rice","Black Beans"],
  "Chicken Fajitas":["Mexican Rice","Black Beans"],
  "Chicken Quesadillas":["Mexican Rice","Black Beans"],
  "Chicken Enchiladas":["Mexican Rice","Black Beans"],
  "Spaghetti w Meat Sauce":["Garlic Bread"],
  "Chicken Alfredo":["Garlic Bread"],
  "Shrimp Alfredo":["Garlic Bread"],
  "Shrimp Pasta":["Broccoli","Side Salad"],
  "Cajun Chicken Pasta":["Garlic Bread","Salad"],
  "Ribs":["Baked Beans","Coleslaw","Mac & Cheese"],
  "BBQ Pork":["Coleslaw","Baked Beans"],
  "Hot Dogs":["French Fries","Baked Beans","Coleslaw"],
  "Chili Dogs":["French Fries"],
  "Philly Cheesesteaks":["French Fries","Tater Tots"],
  "Pork Chops":["Rice and Tomato Gravy", "Fried Potatoes"],
  "BLTs":["French Fries","Tater Tots"],
  "Salmon":["Asparagus","Wild Rice","Broccoli"],
  "Steak":["Baked Potatoes"],
  "Hamburger Steak":["Mashed Potatoes"],
  "Hamburger Helper":["Biscuits"],
  "Smash Burgers":["French fries"],
  "Buffalo Chicken Wraps":["French fries","Tater Tots"],
  "Chicken Wings":["French fries","Tater Tots"],
  "Fried Catfish":["Hushpuppies"],
  "Lasagna":["Garlic Bread"],
  "Buffalo Chicken":["French fries","Tater Tots"],
  "Chicken Parm":["Spaghetti"],
  "Baked Ziti":["Garlic Bread", "Salad"],
  "Smoked Sausage":["Pasta Salad"],
  "Roast":["Mashed Potatoes"],
  "Meatloaf":["Mashed Potatoes","Seasoned Italian Green Beans","Mac & Cheese"]
};

const LUNCHES = [
  "Sandwiches",
  "Chicken Nuggets",
  "Party Pizza",
  "Frozen BBQ",
  "Fish Sticks",
  "Something in a Can",
];
   
  const TAKEOUT = [
  "McDonald's","Chick-fil-A","Chili's","Wendy's","Joey's",
  "Subs","Publix Chicken","Chinese","Mexican Food Truck","Slim Chickens"
];

const DEFAULT_PLANNER_SETTINGS = {
  lunchesEnabled: true,
  takeoutDay: "Tuesday",
  takeoutDays: ["Tuesday"],
  calendarHour: 18,
  calendarDurationHours: 1,
  proteinLimit: 3,
  historyLength: 24,
  weekStartDay: "Thursday"
};

const RESTRICTED_INGREDIENTS = {
  no_pork:["pork","bacon","ham","sausage","hot dogs","ribs","andouille"],
  no_red_meat:["ground beef","beef","steak","roast","cubed steak"],
  no_seafood:["shrimp","salmon","fish","crab","seafood"]
};
