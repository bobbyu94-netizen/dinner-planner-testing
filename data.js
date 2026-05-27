
const MEALS = [
  {id:"meatloaf", meal:"Meatloaf", protein:"ground_beef", items:["Ground beef","Breadcrumbs","Eggs","Ketchup","Hot sauce"], leftovers:true},
  {id:"hamburger_steak", meal:"Hamburger Steak", protein:"ground_beef", items:["Ground beef","Onions","Gravy","Mushrooms"], leftovers:true},
  {id:"smash_burgers", meal:"Smash Burgers", protein:"ground_beef", items:["Ground beef","Buns","Onions","American cheese"], leftovers:true},
  {id:"cheeseburgers", meal:"Cheeseburgers", protein:"ground_beef", items:["Ground beef","Buns","Onions","American cheese"]},
  {id:"tacos", meal:"Tacos", protein:"ground_beef", items:["Ground beef","Taco Kit","Onions","Tomatoes","Lettuce","Cheddar cheese"], leftovers:true, complete:true},
  {id:"spaghetti_meat_sauce", meal:"Spaghetti w Meat Sauce", protein:"ground_beef", items:["Ground beef","Spaghetti noodles","Pasta sauce"], leftovers:true},
  {id:"sloppy_joes", meal:"Sloppy Joes", protein:"ground_beef", items:["Ground beef","Hamburger buns","Canned Manwhich"], leftovers:true},
  {id:"hamburger_helper", meal:"Hamburger Helper", protein:"ground_beef", items:["Ground beef","Hamburger Helper box","Milk"], leftovers:true},
  {id:"hamburger_soup", meal:"Hamburger Soup", protein:"ground_beef", items:["Ground beef","Mixed vegetables"], complete:true, leftovers:2},
  {id:"lasagna", meal:"Lasagna", protein:"ground_beef", items:["Ground beef","Pasta","Mozzarella Cheese","Pasta Sauce","Ricotta cheese","Sharp chedder cheese"], leftovers:2},
  {id:"shepherds_pie", meal:"Shepherd's Pie", protein:"ground_beef", items:["Ground beef","Potatoes","Onions","Brown gravy"], complete:true, leftovers:true},
  {id:"stuffed_peppers", meal:"Stuffed Peppers", protein:"ground_beef", items:["Ground beef","Bell peppers","Rice","Tomato sauce"],complete:true, leftovers:true},
  {id:"baked_ziti", meal:"Baked Ziti", protein:"ground_beef", items:["Ground beef","Pasta","Mozzarella Cheese","Pasta Sauce"], leftovers:2},

  {id:"cubed_steak", meal:"Cubed Steak", protein:"beef", items:["Cubed steak"]},
  {id:"roast", meal:"Roast", protein:"beef", items:["Beef Chuck Roast","Potatoes","Carrots","Onions","Ranch dressing packet","Pepperoncinis","Brown gravy packet","Au jus packet"], leftovers:true},
  {id:"steak", meal:"Steak", protein:"beef", items:["Steak"]},
  {id:"philly_cheesesteaks", meal:"Philly Cheesesteaks", protein:"beef", items:["Steak","French bread","White American cheese","Onions","Mushrooms"]},

  {id:"chicken_wings", meal:"Chicken Wings", protein:"chicken", items:["Chicken wings"]},
  {id:"chicken_parm", meal:"Chicken Parm", protein:"chicken", items:["Chicken","Marinara","Mozzarella cheese","Italian bread crumbs","Parmasean cheese"], leftovers:true},
  {id:"grilled_chicken", meal:"Grilled Chicken", protein:"chicken", items:["Chicken"], leftovers:true},
  {id:"chicken_quesadillas", meal:"Chicken Quesadillas", protein:"chicken", items:["Chicken","Tortillas","Cheese","Rotel"]},
  {id:"grilled_chicken_sandwiches", meal:"Grilled Chicken Sandwiches", protein:"chicken", items:["Chicken","Pretzel Buns","Swiss cheese","Mushrooms","Onions"]},
  {id:"alice_springs_chicken", meal:"Alice Springs Chicken", protein:"chicken", items:["Chicken","Bacon","Cheese","Honey mustard"]},
  {id:"buffalo_chicken", meal:"Buffalo Chicken", protein:"chicken", items:["Chicken","Buffalo sauce"]},
  {id:"chicken_fajitas", meal:"Chicken Fajitas", protein:"chicken", items:["Chicken","Peppers","Tortillas"], leftovers:true},
  {id:"chicken_yellow_rice", meal:"Chicken & Yellow Rice", protein:"chicken", items:["Chicken","Yellow Rice"], complete:true},
  {id:"chicken_pot_pie", meal:"Chicken Pot Pie", protein:"chicken", items:["Chicken","Vegetables"], complete:true},
  {id:"french_onion_chicken", meal:"French Onion Chicken", protein:"chicken", items:["Chicken","Onion soup mix"]},
  {id:"chicken_alfredo", meal:"Chicken Alfredo", protein:"chicken", items:["Chicken","Pasta","Heavy whipping cream","Parmasean cheese","Garlic"]},
  {id:"bruschetta_chicken", meal:"Bruschetta Chicken", protein:"chicken", items:["Chicken","Tomatoes","Basil", "Balsalmic vinegar"]},
  {id:"lemon_pepper_chicken", meal:"Lemon Pepper Chicken", protein:"chicken", items:["Chicken","Lemon pepper seasoning"]},
  {id:"smoked_chicken", meal:"Smoked Chicken", protein:"chicken", items:["Chicken"], leftovers:true},
  {id:"chicken_bowls", meal:"Chicken Bowls", protein:"chicken", items:["Chicken","Lettuce","Rice","Black beans","Cheddar cheese","Salsa"], complete:true},
  {id:"chicken_caesar_salad", meal:"Chicken Caesar Salad", protein:"chicken", items:["Chicken","Lettuce","Caesar dressing"], complete:true},
  {id:"chicken_fried_rice", meal:"Chicken Fried Rice", protein:"chicken", items:["Chicken","Rice","Eggs","Mixed vegetables","Soy sauce"], leftovers:true, complete:true},
  {id:"cajun_chicken_pasta", meal:"Cajun Chicken Pasta", protein:"chicken", items:["Chicken","Pasta","Heavy whipping cream","Parmasean cheese","Cajun seasoning"], leftovers:true},
  {id:"white_chicken_chili", meal:"White Chicken Chili", protein:"chicken", items:["Chicken","White beans","Cream cheese","Green chilies"], leftovers:true, complete:true},
  {id:"buffalo_chicken_wraps", meal:"Buffalo Chicken Wraps", protein:"chicken", items:["Chicken","Buffalo sauce","Lettuce","Ranch","Tortillas"]},
  {id:"tuscan_chicken", meal:"Tuscan Chicken", protein:"chicken", items:["Chicken","Spinach","Heavy whipping cream","Parmasean cheese","Sun dried tomatoes"], leftovers:true, complete:true},
  {id:"chicken_enchiladas", meal:"Chicken Enchiladas", protein:"chicken", items:["Chicken","Tortillas","Enchilada sauce","Cheddar cheese"], leftovers:true},
  {id:"chicken_dumplings", meal:"Chicken & Dumplings", protein:"chicken", items:["Chicken","Biscuits","Cream soup"], leftovers:2, complete:true},

  {id:"pork_chops", meal:"Pork Chops", protein:"pork", items:["Pork chops"], leftovers:true},
  {id:"pork_tenderloin", meal:"Pork Tenderloin", protein:"pork", items:["Pork tenderloin"], leftovers:true},
  {id:"bbq_pork", meal:"BBQ Pork", protein:"pork", items:["Pork","BBQ sauce"], leftovers:true, complete:true},
  {id:"ribs", meal:"Ribs", protein:"pork", items:["Ribs","BBQ sauce"], leftovers:true},
  {id:"smoked_sausage", meal:"Smoked Sausage", protein:"pork", items:["Smoked sausage"]},
  {id:"fried_potatoes_sausage", meal:"Fried Potatoes w Sausage", protein:"pork", items:["Sausage","Potatoes","Onions"], leftovers:true, complete:true},
  {id:"hot_dogs", meal:"Hot Dogs", protein:"pork", items:["Hot dogs","Buns","American cheese","Onions"]},
  {id:"chili_dogs", meal:"Chili Dogs", protein:"pork", items:["Hot dogs","Chili","American cheese","Onions"]},
  {id:"breakfast_for_dinner", meal:"Breakfast for Dinner", protein:"pork", items:["Bacon","Eggs","Biscuits","Gravy"], leftovers:false, complete:true},
  {id:"red_beans_rice", meal:"Red Beans & Rice", protein:"pork", items:["Smoked sausage","Rice","Red beans"], leftovers:true, complete:true},
  {id:"cajun_sausage_pasta", meal:"Cajun Sausage Pasta", protein:"pork", items:["Smoked sausage","Pasta","Heavy whipping cream","Parmasean cheese","Cajun seasoning"], leftovers:true, complete:true},
  {id:"bbq_baked_potatoes", meal:"BBQ Baked Potatoes", protein:"pork", items:["Pork","Potatoes","Cheddar cheese","BBQ sauce"], leftovers:true, complete:true},

  {id:"shrimp_boil", meal:"Shrimp Boil", protein:"seafood", items:["Shrimp","Frozen corn","Potatoes","Onions","Andouille sausage","Old Bay seasoning"], complete:true},
  {id:"steamed_shrimp", meal:"Steamed Shrimp", protein:"seafood", items:["Shrimp","Old Bay seasoning"]},
  {id:"salmon", meal:"Salmon", protein:"seafood", items:["Salmon"]},
  {id:"shrimp_alfredo", meal:"Shrimp Alfredo", protein:"seafood", items:["Shrimp","Pasta","Heavy whipping cream","Parmasean cheese","garlic"]},
  {id:"shrimp_pasta", meal:"Shrimp Pasta", protein:"seafood", items:["Shrimp","Pasta"]},
  {id:"fried_catfish", meal:"Fried Catfish", protein:"seafood", items:["Catfish","Breading","Oil"], leftovers:false},

  {id:"chili", meal:"Chili", protein:"mixed", items:["Ground beef","Beans","Diced tomatoes",":Chili seasoning"], leftovers:true, complete:true},
  {id:"gumbo", meal:"Gumbo", protein:"mixed", items:["Chicken","Sausage","Rice","Green Peppers","Celery","Onions","Chicken Broth"], leftovers:2, complete:true},
  {id:"jambalaya", meal:"Jambalaya", protein:"mixed", items:["Chicken","Sausage","Rice"], leftovers:true, complete:true},
  {id:"mixed_chicken_dumplings", meal:"Chicken & Dumplings", protein:"mixed", items:["Chicken","Dumplings"], leftovers:true, complete:2},
  {id:"veggie_soup", meal:"Veggie Soup", protein:"mixed", items:["Mixed vegetables"], leftovers:true, complete:true},
  {id:"loaded_potato_soup", meal:"Loaded Potato Soup", protein:"mixed", items:["Potatoes","Cheese"], leftovers:true, complete:true},
  {id:"hibachi", meal:"Hibachi", protein:"mixed", items:["Chicken","Rice","Squash","Zuccini","Onions","Yum Yum sauce"], leftovers:true, complete:true},
  {id:"chef_salads", meal:"Chef Salads", protein:"mixed", items:["Lettuce","Ham","Turkey","Eggs","Onions","Cucumbers","Tomatoes","Croutons"]},
  {id:"stuffed_shells", meal:"Stuffed Shells", protein:"mixed", items:["Shell Pasta","Ricotta Cheese","Mozzerella Cheese","Ground Beef","Pasta Sauce"], leftovers:true},
  {id:"blts", meal:"BLTs", protein:"mixed", items:["Bacon","Bread","Lettuce","Tomatoes"]}
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