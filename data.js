
const MEALS = [
  {id:"meatloaf", meal:"Meatloaf", protein:"ground_beef", items:["Ground beef","Breadcrumbs","Eggs","Ketchup","Hot sauce"], leftovers:1},
  {id:"hamburger_steak", meal:"Hamburger Steak", protein:"ground_beef", items:["Ground beef","Onions","Gravy","Mushrooms"], leftovers:1},
  {id:"smash_burgers", meal:"Smash Burgers", protein:"ground_beef", items:["Ground beef","Buns","Onions","American cheese"], leftovers:1},
  {id:"cheeseburgers", meal:"Cheeseburgers", protein:"ground_beef", items:["Ground beef","Buns","Onions","American cheese"]},
  {id:"tacos", meal:"Tacos", protein:"ground_beef", items:["Ground beef","Taco Kit","Onions","Tomatoes","Lettuce","Cheddar cheese"], leftovers:1, complete:true},
  {id:"spaghetti_meat_sauce", meal:"Spaghetti w Meat Sauce", protein:"ground_beef", items:["Ground beef","Spaghetti noodles","Pasta sauce"], leftovers:1},
  {id:"sloppy_joes", meal:"Sloppy Joes", protein:"ground_beef", items:["Ground beef","Hamburger buns","Canned Manwhich"], leftovers:1},
  {id:"hamburger_helper", meal:"Hamburger Helper", protein:"ground_beef", items:["Ground beef","Hamburger Helper box","Milk"], leftovers:1},
  {id:"hamburger_soup", meal:"Hamburger Soup", protein:"ground_beef", items:["Ground beef","Mixed vegetables"], complete:true, leftovers:2},
  {id:"lasagna", meal:"Lasagna", protein:"ground_beef", items:["Ground beef","Pasta","Mozzarella Cheese","Pasta Sauce","Ricotta cheese","Sharp cheddar cheese"], leftovers:2},
  {id:"shepherds_pie", meal:"Shepherd's Pie", protein:"ground_beef", items:["Ground beef","Potatoes","Onions","Brown gravy"], complete:true, leftovers:1},
  {id:"stuffed_peppers", meal:"Stuffed Peppers", protein:"ground_beef", items:["Ground beef","Bell peppers","Rice","Tomato sauce"], complete:true, leftovers:1},
  {id:"baked_ziti", meal:"Baked Ziti", protein:"ground_beef", items:["Ground beef","Pasta","Mozzarella Cheese","Pasta Sauce"], leftovers:2},

  {id:"cubed_steak", meal:"Cubed Steak", protein:"beef", items:["Cubed steak"]},
  {id:"roast", meal:"Roast", protein:"beef", items:["Beef Chuck Roast","Potatoes","Carrots","Onions","Ranch dressing packet","Pepperoncinis","Brown gravy packet","Au jus packet"], leftovers:1},
  {id:"steak", meal:"Steak", protein:"beef", items:["Steak"]},
  {id:"philly_cheesesteaks", meal:"Philly Cheesesteaks", protein:"beef", items:["Shaved steak","French bread","White American cheese","Onions","Mushrooms"]},

  {id:"chicken_wings", meal:"Chicken Wings", protein:"chicken", items:["Chicken wings"]},
  {id:"chicken_parm", meal:"Chicken Parm", protein:"chicken", items:["Chicken breast","Marinara","Mozzarella cheese","Italian bread crumbs","Parmesan cheese"], leftovers:1},
  {id:"grilled_chicken", meal:"Grilled Chicken", protein:"chicken", items:["Chicken breast"], leftovers:1},
  {id:"chicken_quesadillas", meal:"Chicken Quesadillas", protein:"chicken", items:["Chicken breast","Tortillas","Cheese","Rotel"]},
  {id:"grilled_chicken_sandwiches", meal:"Grilled Chicken Sandwiches", protein:"chicken", items:["Chicken breast","Pretzel Buns","Swiss cheese","Mushrooms","Onions"]},
  {id:"alice_springs_chicken", meal:"Alice Springs Chicken", protein:"chicken", items:["Chicken breast","Bacon","Cheese","Honey mustard"]},
  {id:"buffalo_chicken", meal:"Buffalo Chicken", protein:"chicken", items:["Chicken breast","Buffalo sauce"]},
  {id:"chicken_fajitas", meal:"Chicken Fajitas", protein:"chicken", items:["Chicken breast","Peppers","Tortillas"], leftovers:1},
  {id:"chicken_yellow_rice", meal:"Chicken & Yellow Rice", protein:"chicken", items:["Chicken breast","Yellow Rice"], complete:true},
  {id:"chicken_pot_pie", meal:"Chicken Pot Pie", protein:"chicken", items:["Chicken breast","Vegetables"], complete:true},
  {id:"french_onion_chicken", meal:"French Onion Chicken", protein:"chicken", items:["Chicken breast","Onion soup mix"]},
  {id:"chicken_alfredo", meal:"Chicken Alfredo", protein:"chicken", items:["Chicken breast","Pasta","Heavy whipping cream","Parmesan cheese","Garlic"]},
  {id:"bruschetta_chicken", meal:"Bruschetta Chicken", protein:"chicken", items:["Chicken breast","Tomatoes","Basil","Balsamic vinegar"]},
  {id:"lemon_pepper_chicken", meal:"Lemon Pepper Chicken", protein:"chicken", items:["Chicken breast","Lemon pepper seasoning"]},
  {id:"smoked_chicken", meal:"Smoked Chicken", protein:"chicken", items:["Whole chicken"], leftovers:1},
  {id:"chicken_bowls", meal:"Chicken Bowls", protein:"chicken", items:["Chicken breast","Lettuce","Rice","Black beans","Cheddar cheese","Salsa"], complete:true},
  {id:"chicken_caesar_salad", meal:"Chicken Caesar Salad", protein:"chicken", items:["Chicken breast","Lettuce","Caesar dressing"], complete:true},
  {id:"chicken_fried_rice", meal:"Chicken Fried Rice", protein:"chicken", items:["Chicken breast","Rice","Eggs","Mixed vegetables","Soy sauce"], leftovers:1, complete:true},
  {id:"cajun_chicken_pasta", meal:"Cajun Chicken Pasta", protein:"chicken", items:["Chicken breast","Pasta","Heavy whipping cream","Parmesan cheese","Cajun seasoning"], leftovers:1},
  {id:"white_chicken_chili", meal:"White Chicken Chili", protein:"chicken", items:["Chicken breast","White beans","Cream cheese","Green chilies"], leftovers:1, complete:true},
  {id:"buffalo_chicken_wraps", meal:"Buffalo Chicken Wraps", protein:"chicken", items:["Chicken breast","Buffalo sauce","Lettuce","Ranch","Tortillas"]},
  {id:"tuscan_chicken", meal:"Tuscan Chicken", protein:"chicken", items:["Chicken breast","Spinach","Heavy whipping cream","Parmesan cheese","Sun dried tomatoes"], leftovers:1, complete:true},
  {id:"chicken_enchiladas", meal:"Chicken Enchiladas", protein:"chicken", items:["Chicken breast","Tortillas","Enchilada sauce","Cheddar cheese"], leftovers:1},
  {id:"chicken_dumplings", meal:"Chicken & Dumplings", protein:"chicken", items:["Whole chicken","Biscuits","Cream soup"], leftovers:2, complete:true},

  {id:"pork_chops", meal:"Pork Chops", protein:"pork", items:["Pork chops"], leftovers:1},
  {id:"pork_tenderloin", meal:"Pork Tenderloin", protein:"pork", items:["Pork tenderloin"], leftovers:1},
  {id:"bbq_pork", meal:"BBQ Pork", protein:"pork", items:["Pork butt","BBQ sauce"], leftovers:1, complete:true},
  {id:"ribs", meal:"Ribs", protein:"pork", items:["Ribs","BBQ sauce"], leftovers:1},
  {id:"smoked_sausage", meal:"Smoked Sausage", protein:"pork", items:["Smoked sausage"]},
  {id:"fried_potatoes_sausage", meal:"Fried Potatoes w Sausage", protein:"pork", items:["Smoked sausage","Potatoes","Onions"], leftovers:1, complete:true},
  {id:"hot_dogs", meal:"Hot Dogs", protein:"pork", items:["Hot dogs","Buns","American cheese","Onions"]},
  {id:"chili_dogs", meal:"Chili Dogs", protein:"pork", items:["Hot dogs","Chili","American cheese","Onions"]},
  {id:"breakfast_for_dinner", meal:"Breakfast for Dinner", protein:"pork", items:["Bacon","Eggs","Biscuits","Gravy"], complete:true},
  {id:"red_beans_rice", meal:"Red Beans & Rice", protein:"pork", items:["Smoked sausage","Rice","Red beans"], leftovers:1, complete:true},
  {id:"cajun_sausage_pasta", meal:"Cajun Sausage Pasta", protein:"pork", items:["Smoked sausage","Pasta","Heavy whipping cream","Parmesan cheese","Cajun seasoning"], leftovers:1, complete:true},
  {id:"bbq_baked_potatoes", meal:"BBQ Baked Potatoes", protein:"pork", items:["Pork butt","Potatoes","Cheddar cheese","BBQ sauce"], leftovers:1, complete:true},

  {id:"shrimp_boil", meal:"Shrimp Boil", protein:"seafood", items:["Shrimp","Frozen corn","Potatoes","Onions","Andouille sausage","Old Bay seasoning"], complete:true},
  {id:"steamed_shrimp", meal:"Steamed Shrimp", protein:"seafood", items:["Shrimp","Old Bay seasoning"]},
  {id:"salmon", meal:"Salmon", protein:"seafood", items:["Salmon"]},
  {id:"shrimp_alfredo", meal:"Shrimp Alfredo", protein:"seafood", items:["Shrimp","Pasta","Heavy whipping cream","Parmesan cheese","Garlic"]},
  {id:"shrimp_pasta", meal:"Shrimp Pasta", protein:"seafood", items:["Shrimp","Pasta"]},
  {id:"fried_catfish", meal:"Fried Catfish", protein:"seafood", items:["Catfish","Breading","Oil"]},
  {id:"shrimp_tacos", meal:"Shrimp Tacos", protein:"seafood", items:["Shrimp","Tortillas","Cabbage","Lime","Chipotle mayo"], complete:true},
  {id:"blackened_salmon", meal:"Blackened Salmon", protein:"seafood", items:["Salmon","Blackening seasoning"]},
  {id:"baked_tilapia", meal:"Baked Tilapia", protein:"seafood", items:["Tilapia","Lemon","Butter","Old Bay seasoning"]},
  {id:"mahi_mahi", meal:"Mahi Mahi", protein:"seafood", items:["Mahi mahi","Lemon pepper seasoning"]},
  {id:"seared_scallops", meal:"Seared Scallops", protein:"seafood", items:["Scallops","Butter","Garlic"]},
  {id:"clam_chowder", meal:"Clam Chowder", protein:"seafood", items:["Clams","Potatoes","Bacon","Heavy whipping cream","Onions"], leftovers:1, complete:true},
  {id:"fried_oysters", meal:"Fried Oysters", protein:"seafood", items:["Oysters","Cornmeal","Oil"]},

  {id:"chili", meal:"Chili", protein:"mixed", items:["Ground beef","Beans","Diced tomatoes","Chili seasoning"], leftovers:1, complete:true},
  {id:"gumbo", meal:"Gumbo", protein:"mixed", items:["Whole chicken","Sausage","Rice","Green Peppers","Celery","Onions","Chicken Broth"], leftovers:2, complete:true},
  {id:"jambalaya", meal:"Jambalaya", protein:"mixed", items:["Chicken breast","Sausage","Rice"], leftovers:1, complete:true},
  {id:"veggie_soup", meal:"Veggie Soup", protein:"mixed", items:["Mixed vegetables"], leftovers:1, complete:true},
  {id:"loaded_potato_soup", meal:"Loaded Potato Soup", protein:"mixed", items:["Potatoes","Cheese"], leftovers:1, complete:true},
  {id:"hibachi", meal:"Hibachi", protein:"mixed", items:["Chicken breast","Rice","Squash","Zucchini","Onions","Yum Yum sauce"], leftovers:1, complete:true},
  {id:"chef_salads", meal:"Chef Salads", protein:"mixed", items:["Lettuce","Ham","Turkey","Eggs","Onions","Cucumbers","Tomatoes","Croutons"]},
  {id:"stuffed_shells", meal:"Stuffed Shells", protein:"mixed", items:["Shell Pasta","Ricotta Cheese","Mozzarella Cheese","Ground beef","Pasta Sauce"], leftovers:1},
  {id:"blts", meal:"BLTs", protein:"mixed", items:["Bacon","Bread","Lettuce","Tomatoes"]}
];

const PROTEIN_LABELS = {
  ground_beef: "Ground Beef",
  beef: "Beef",
  chicken: "Chicken",
  pork: "Pork",
  seafood: "Seafood",
  mixed: "Mixed"
};

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
  tacos:["Mexican Rice","Black Beans"],
  chicken_fajitas:["Mexican Rice","Black Beans"],
  chicken_quesadillas:["Mexican Rice","Black Beans"],
  chicken_enchiladas:["Mexican Rice","Black Beans"],
  spaghetti_meat_sauce:["Garlic Bread"],
  chicken_alfredo:["Garlic Bread"],
  shrimp_alfredo:["Garlic Bread"],
  shrimp_pasta:["Broccoli","Side Salad"],
  cajun_chicken_pasta:["Garlic Bread","Side Salad"],
  ribs:["Baked Beans","Coleslaw","Mac & Cheese"],
  bbq_pork:["Coleslaw","Baked Beans"],
  hot_dogs:["French Fries","Baked Beans","Coleslaw"],
  chili_dogs:["French Fries"],
  philly_cheesesteaks:["French Fries","Tater Tots"],
  pork_chops:["Rice & Tomato Gravy","Fried Potatoes"],
  blts:["French Fries","Tater Tots"],
  salmon:["Asparagus","Wild Rice","Broccoli"],
  steak:["Baked Potato"],
  hamburger_steak:["Mashed Potatoes"],
  hamburger_helper:["Biscuits"],
  smash_burgers:["French Fries"],
  buffalo_chicken_wraps:["French Fries","Tater Tots"],
  chicken_wings:["French Fries","Tater Tots"],
  fried_catfish:["Hushpuppies"],
  fried_oysters:["Hushpuppies"],
  shrimp_tacos:["Mexican Rice","Black Beans"],
  lasagna:["Garlic Bread"],
  buffalo_chicken:["French Fries","Tater Tots"],
  chicken_parm:["Spaghetti"],
  baked_ziti:["Garlic Bread","Side Salad"],
  smoked_sausage:["Pasta Salad"],
  roast:["Mashed Potatoes"],
  meatloaf:["Mashed Potatoes","Seasoned Italian Green Beans","Mac & Cheese"]
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
  version: 2,
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

const RECIPES = {
  meatloaf: {
    cookTime: "1 hr 15 min", servings: 6,
    steps: [
      "Preheat oven to 350°F.",
      "Mix ground beef, breadcrumbs, eggs, a splash of hot sauce, and half the ketchup until just combined — don't overwork it.",
      "Press into a loaf pan or shape on a baking sheet.",
      "Spread remaining ketchup over the top.",
      "Bake 60–70 minutes until internal temp reaches 160°F.",
      "Let rest 10 minutes before slicing."
    ]
  },
  hamburger_steak: {
    cookTime: "30 min", servings: 4,
    steps: [
      "Season ground beef with salt and pepper, shape into thick oval patties.",
      "Sear patties in a skillet over medium-high heat, 4 min per side. Set aside.",
      "In the same pan, sauté sliced onions and mushrooms until soft.",
      "Add gravy (packet or jarred), stir to combine, and nestle patties back in.",
      "Simmer 10 minutes until patties are cooked through.",
      "Serve over mashed potatoes."
    ]
  },
  smash_burgers: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Heat a cast iron skillet or griddle over high heat until very hot.",
      "Roll ground beef into loose 3 oz balls — do not pack tightly.",
      "Place a ball on the hot skillet and immediately smash flat with a spatula. Hold for 10 seconds.",
      "Season with salt and pepper. Cook 2 min until edges are crispy and brown.",
      "Flip, add a slice of American cheese, cook 1 more minute.",
      "Serve on toasted buns with thinly sliced onion."
    ]
  },
  tacos: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Brown ground beef in a skillet over medium-high heat, drain excess fat.",
      "Add taco seasoning from the kit plus water as directed on package.",
      "Simmer 5 minutes until thickened.",
      "Warm taco shells in oven at 350°F for 5 minutes.",
      "Set out toppings: shredded lettuce, diced tomatoes, diced onions, cheddar cheese.",
      "Build tacos and serve."
    ]
  },
  spaghetti_meat_sauce: {
    cookTime: "35 min", servings: 5,
    steps: [
      "Brown ground beef in a large skillet, drain fat.",
      "Pour in pasta sauce, stir to combine, and simmer on low 15–20 minutes.",
      "Meanwhile bring a large pot of salted water to a boil.",
      "Cook spaghetti noodles to package directions, drain.",
      "Serve sauce over noodles with garlic bread on the side."
    ]
  },
  lasagna: {
    cookTime: "1 hr 30 min", servings: 8,
    steps: [
      "Preheat oven to 375°F.",
      "Brown ground beef, drain fat, stir in pasta sauce. Season with salt and pepper.",
      "Mix ricotta with one egg and a pinch of salt.",
      "Spread a thin layer of meat sauce in the bottom of a 9×13 baking dish.",
      "Layer: noodles, ricotta mixture, mozzarella, meat sauce. Repeat twice more.",
      "Top with remaining mozzarella and sharp cheddar.",
      "Cover with foil, bake 45 minutes. Uncover and bake 15 more minutes until bubbly.",
      "Rest 15 minutes before cutting."
    ]
  },
  shepherds_pie: {
    cookTime: "55 min", servings: 5,
    steps: [
      "Preheat oven to 400°F.",
      "Brown ground beef with diced onions, drain fat. Stir in brown gravy and simmer 5 minutes.",
      "Pour beef mixture into a baking dish.",
      "Boil diced potatoes until tender, drain, and mash with butter, milk, salt and pepper.",
      "Spread mashed potatoes evenly over the beef layer.",
      "Bake 25 minutes until top is golden.",
      "Let sit 5 minutes before serving."
    ]
  },
  stuffed_peppers: {
    cookTime: "1 hr", servings: 4,
    steps: [
      "Preheat oven to 375°F.",
      "Cut tops off bell peppers, remove seeds. Parboil in boiling water 5 minutes, drain.",
      "Brown ground beef, drain fat. Mix with cooked rice and tomato sauce, season to taste.",
      "Fill each pepper with the beef-rice mixture.",
      "Place in a baking dish, pour a thin layer of tomato sauce around the peppers.",
      "Cover with foil and bake 30 minutes. Uncover and bake 10 more minutes."
    ]
  },
  roast: {
    cookTime: "8 hr (slow cooker)", servings: 6,
    steps: [
      "Place beef chuck roast in the slow cooker.",
      "Scatter quartered potatoes, baby carrots, and sliced onions around the roast.",
      "Sprinkle the ranch packet, brown gravy packet, and au jus packet over everything.",
      "Add pepperoncinis on top (use the juice too for extra flavor).",
      "Cook on LOW 8 hours or HIGH 4–5 hours until the meat shreds easily.",
      "Shred meat in the pot and mix with the juices before serving."
    ]
  },
  chicken_parm: {
    cookTime: "40 min", servings: 4,
    steps: [
      "Preheat oven to 400°F.",
      "Pound chicken breasts to even thickness. Season with salt and pepper.",
      "Dip chicken in beaten egg, then coat in Italian breadcrumbs mixed with Parmesan.",
      "Pan-fry in olive oil over medium-high heat, 3 min per side until golden.",
      "Place on a baking sheet. Spoon marinara over each piece, top with mozzarella.",
      "Bake 20 minutes until cheese is bubbly and chicken is cooked through.",
      "Serve over spaghetti."
    ]
  },
  chicken_alfredo: {
    cookTime: "35 min", servings: 4,
    steps: [
      "Season and cook chicken breasts in a skillet until done, about 6–7 min per side. Slice thin.",
      "In the same pan, melt butter over medium heat. Add minced garlic, cook 1 minute.",
      "Pour in heavy whipping cream, bring to a simmer.",
      "Stir in Parmesan cheese until sauce thickens. Season with salt and pepper.",
      "Cook pasta to package directions, drain.",
      "Toss pasta and sliced chicken in the Alfredo sauce. Serve immediately."
    ]
  },
  chicken_fajitas: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Slice chicken and peppers into strips. Season with fajita or taco seasoning.",
      "Heat oil in a large skillet or cast iron over high heat.",
      "Cook chicken strips until no longer pink, about 5–6 minutes. Set aside.",
      "In the same pan, cook sliced peppers and onions until slightly charred, 4–5 minutes.",
      "Return chicken to pan, toss together.",
      "Serve in warm tortillas with desired toppings."
    ]
  },
  tuscan_chicken: {
    cookTime: "30 min", servings: 4,
    steps: [
      "Season chicken breasts with salt, pepper, and Italian seasoning.",
      "Sear in an oven-safe skillet with oil over medium-high heat, 4 min per side. Set aside.",
      "In the same pan, sauté minced garlic 1 minute. Add sun-dried tomatoes.",
      "Pour in heavy whipping cream, bring to a simmer. Stir in Parmesan.",
      "Add fresh spinach and stir until wilted.",
      "Return chicken to pan, simmer 5 minutes until cooked through.",
      "Serve over pasta or with crusty bread."
    ]
  },
  cajun_chicken_pasta: {
    cookTime: "30 min", servings: 4,
    steps: [
      "Cook pasta to package directions, drain and set aside.",
      "Season chicken with Cajun seasoning, cook in a skillet until done. Slice thin.",
      "In the same pan, melt butter, add minced garlic, cook 1 minute.",
      "Pour in heavy cream, bring to a simmer. Stir in Parmesan until sauce thickens.",
      "Add more Cajun seasoning to taste. Toss in pasta and chicken.",
      "Serve hot, garnished with extra Parmesan."
    ]
  },
  white_chicken_chili: {
    cookTime: "35 min", servings: 6,
    steps: [
      "Cook shredded or cubed chicken in a large pot. (Or use rotisserie chicken.)",
      "Add white beans, diced green chilies, and chicken broth. Bring to a simmer.",
      "Stir in cubed cream cheese until fully melted.",
      "Season with cumin, garlic powder, chili powder, salt, and pepper.",
      "Simmer 15 minutes to meld flavors.",
      "Serve with shredded cheese, sour cream, and tortilla chips."
    ]
  },
  chicken_enchiladas: {
    cookTime: "45 min", servings: 5,
    steps: [
      "Preheat oven to 375°F.",
      "Mix shredded cooked chicken with half the enchilada sauce and a handful of cheese.",
      "Pour a thin layer of enchilada sauce in the bottom of a baking dish.",
      "Fill tortillas with chicken mixture, roll tight, and place seam-side down in dish.",
      "Pour remaining sauce over the top. Sprinkle with cheddar cheese.",
      "Cover with foil and bake 25 minutes. Uncover and bake 10 more minutes until cheese is bubbly."
    ]
  },
  chicken_dumplings: {
    cookTime: "45 min", servings: 5,
    steps: [
      "Shred cooked chicken. (Rotisserie chicken works great.)",
      "Bring cream soup and 2 cups chicken broth to a simmer in a large pot.",
      "Add shredded chicken, stir to combine, season with salt and pepper.",
      "Open canned biscuits, cut each into quarters, drop into the simmering pot.",
      "Cover and cook on low heat 15 minutes without lifting the lid.",
      "Stir gently and serve once dumplings are cooked through."
    ]
  },
  pork_chops: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Season pork chops with salt, pepper, and garlic powder on both sides.",
      "Heat oil in a heavy skillet over medium-high heat.",
      "Sear chops 4 minutes per side until golden brown.",
      "Reduce heat to medium, cover, and cook 5 more minutes until internal temp reaches 145°F.",
      "Rest 5 minutes before serving.",
      "Serve with Rice & Tomato Gravy or Fried Potatoes."
    ]
  },
  fried_potatoes_sausage: {
    cookTime: "30 min", servings: 4,
    steps: [
      "Slice smoked sausage into rounds. Dice potatoes and onions.",
      "Heat oil in a large skillet over medium-high heat.",
      "Cook sausage until browned, about 5 minutes. Set aside.",
      "Add potatoes to the pan in a single layer. Season with salt, pepper, and garlic powder.",
      "Cook without stirring 5 minutes, then flip and cook another 5 minutes until golden.",
      "Add onions, cook 3 more minutes. Return sausage to pan, toss together and serve."
    ]
  },
  red_beans_rice: {
    cookTime: "40 min", servings: 5,
    steps: [
      "Slice smoked sausage into rounds and brown in a large pot. Set aside.",
      "In the same pot, sauté diced onions until soft.",
      "Add canned red beans (drained), chicken broth, and Cajun seasoning.",
      "Return sausage to pot, bring to a simmer.",
      "Cook 20 minutes, mashing some beans against the pot to thicken the sauce.",
      "Cook rice per package directions. Serve beans over rice."
    ]
  },
  cajun_sausage_pasta: {
    cookTime: "30 min", servings: 4,
    steps: [
      "Cook pasta to package directions, drain.",
      "Brown sliced smoked sausage in a skillet. Set aside.",
      "In the same pan, melt butter, add garlic, cook 1 minute.",
      "Pour in heavy cream, bring to a simmer. Stir in Parmesan until thickened.",
      "Add Cajun seasoning to taste.",
      "Toss pasta and sausage in the sauce. Serve hot."
    ]
  },
  ribs: {
    cookTime: "3 hr", servings: 4,
    steps: [
      "Preheat oven to 275°F.",
      "Remove the silver membrane from the back of the ribs.",
      "Season generously with salt, pepper, garlic powder, and brown sugar.",
      "Wrap tightly in foil and bake 2.5 hours.",
      "Unwrap, brush with BBQ sauce, and broil or grill 5–10 minutes until sauce caramelizes.",
      "Let rest 5 minutes, then slice between bones."
    ]
  },
  shrimp_boil: {
    cookTime: "45 min", servings: 6,
    steps: [
      "Fill a large pot with water, add Old Bay seasoning generously, bring to a boil.",
      "Add halved potatoes, boil 10 minutes.",
      "Add sliced andouille sausage and frozen corn, boil 5 more minutes.",
      "Add shrimp (shell on), cook 3–4 minutes until pink.",
      "Drain everything. Spread on a sheet pan or newspaper-covered table.",
      "Sprinkle more Old Bay on top. Serve with melted butter."
    ]
  },
  chili: {
    cookTime: "45 min", servings: 6,
    steps: [
      "Brown ground beef in a large pot, drain fat.",
      "Add diced tomatoes, beans, and chili seasoning packet.",
      "Stir in 1 cup of water or beef broth.",
      "Bring to a boil, reduce heat, and simmer 30 minutes.",
      "Taste and adjust seasoning — add hot sauce or extra chili powder if desired.",
      "Serve with shredded cheese, sour cream, and crackers or cornbread."
    ]
  },
  gumbo: {
    cookTime: "1 hr 30 min", servings: 8,
    steps: [
      "Make a roux: cook equal parts flour and oil in a heavy pot over medium heat, stirring constantly, until deep brown (about 30 minutes). Do not burn.",
      "Add diced onions, green peppers, and celery (the holy trinity). Cook 5 minutes.",
      "Add chicken broth gradually, whisking to incorporate the roux.",
      "Add chicken pieces and sliced sausage. Bring to a boil.",
      "Reduce heat and simmer 45 minutes. Stir in filé powder if desired.",
      "Season with salt, pepper, and Cajun spice. Serve over cooked rice."
    ]
  },
  jambalaya: {
    cookTime: "45 min", servings: 6,
    steps: [
      "Brown sliced sausage in a large pot. Add diced chicken and cook until done.",
      "Add diced onions, bell peppers, and garlic, cook 3 minutes.",
      "Stir in diced tomatoes, chicken broth, and Cajun seasoning.",
      "Bring to a boil. Add rice, stir once, cover, reduce heat to low.",
      "Cook 20 minutes without lifting the lid.",
      "Fluff with a fork and serve."
    ]
  },
  hibachi: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Cook rice ahead of time and let it cool (day-old rice works best).",
      "Cook diced chicken in a wok or large skillet over high heat with butter. Set aside.",
      "In the same pan, scramble eggs, push to the side, add cold rice.",
      "Add soy sauce and stir-fry rice until lightly toasted.",
      "In a separate pan, sauté sliced zucchini, squash, and onions with butter and soy sauce.",
      "Plate rice and veggies alongside chicken. Serve with Yum Yum sauce."
    ]
  },
  breakfast_for_dinner: {
    cookTime: "30 min", servings: 4,
    steps: [
      "Cook bacon in a skillet until crispy. Drain on paper towels, keep warm.",
      "Cook biscuits per package directions.",
      "While biscuits bake, fry eggs to preference in the bacon drippings.",
      "Make gravy: whisk flour into remaining drippings, cook 1 minute, slowly add milk, stir until thick. Season generously with black pepper and salt.",
      "Split biscuits and top with gravy.",
      "Serve with eggs and bacon on the side."
    ]
  },
  salmon: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Preheat oven to 400°F.",
      "Pat salmon dry, place skin-side down on a foil-lined baking sheet.",
      "Season with salt, pepper, garlic powder, and a drizzle of olive oil.",
      "Bake 12–15 minutes until salmon flakes easily with a fork.",
      "Optionally, broil 2 minutes at the end for a golden top.",
      "Serve with asparagus and wild rice."
    ]
  },
  loaded_potato_soup: {
    cookTime: "45 min", servings: 6,
    steps: [
      "Dice potatoes and boil in salted water until tender, about 15 minutes. Drain.",
      "In a large pot, melt butter over medium heat. Whisk in flour, cook 1 minute.",
      "Slowly add chicken broth and milk, whisking until smooth.",
      "Add potatoes, season with salt, pepper, and garlic powder.",
      "Simmer 10 minutes. Mash some potatoes against the pot to thicken.",
      "Stir in shredded cheese until melted. Serve topped with bacon bits, sour cream, and green onions."
    ]
  },
  shrimp_tacos: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Peel and devein shrimp, pat dry, and season with chili powder, cumin, and salt.",
      "Sear shrimp in a hot skillet with a little oil, about 2 minutes per side until pink and opaque.",
      "Warm tortillas in a dry skillet or the microwave.",
      "Shred cabbage thin and squeeze fresh lime juice over it.",
      "Assemble tacos with shrimp, cabbage, and a drizzle of chipotle mayo.",
      "Serve with extra lime wedges."
    ]
  },
  blackened_salmon: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Pat salmon fillets dry and coat both sides generously with blackening seasoning.",
      "Heat a cast iron skillet over medium-high heat with a little oil until very hot.",
      "Sear salmon 3–4 minutes on the first side until a dark crust forms.",
      "Flip and cook 3–4 more minutes until it flakes easily.",
      "Rest 2 minutes before serving."
    ]
  },
  baked_tilapia: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Preheat oven to 400°F.",
      "Place tilapia fillets on a foil-lined baking sheet.",
      "Melt butter, mix with lemon juice and Old Bay seasoning, and brush over the fillets.",
      "Bake 12–15 minutes until the fish flakes easily with a fork.",
      "Squeeze fresh lemon over top before serving."
    ]
  },
  mahi_mahi: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Pat mahi mahi fillets dry and season both sides with lemon pepper seasoning.",
      "Heat a skillet over medium-high heat with a little oil or butter.",
      "Sear fillets 4–5 minutes per side until opaque and flaking.",
      "Rest a couple minutes before serving."
    ]
  },
  seared_scallops: {
    cookTime: "15 min", servings: 4,
    steps: [
      "Pat scallops very dry and season with salt and pepper.",
      "Heat a skillet over high heat with butter until foaming.",
      "Sear scallops 1.5–2 minutes per side without moving them, until golden.",
      "Remove from heat, spoon the garlic butter over top, and serve immediately."
    ]
  },
  clam_chowder: {
    cookTime: "45 min", servings: 6,
    steps: [
      "Cook diced bacon in a large pot until crisp. Remove the bacon, leave the drippings.",
      "Sauté onions in the drippings until soft.",
      "Add diced potatoes and clam juice (or water), simmer until potatoes are tender, about 15 minutes.",
      "Stir in clams and heavy whipping cream, warming through without boiling.",
      "Season with salt and pepper. Ladle into bowls topped with the crispy bacon."
    ]
  },
  fried_oysters: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Drain oysters and pat dry.",
      "Dredge oysters in seasoned cornmeal, pressing to coat well.",
      "Heat oil in a skillet or fryer to 350°F.",
      "Fry oysters in batches, 2–3 minutes until golden brown.",
      "Drain on paper towels, serve hot with hushpuppies and lemon wedges."
    ]
  },
  cheeseburgers: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Form ground beef into 4 equal patties, season with salt and pepper.",
      "Heat a skillet or grill to medium-high heat.",
      "Cook patties 3–4 minutes per side, adding a slice of American cheese in the last minute to melt.",
      "Toast the buns lightly.",
      "Build burgers with onions and any other toppings you like."
    ]
  },
  cubed_steak: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Season cubed steaks with salt and pepper.",
      "Dredge lightly in flour, shaking off excess.",
      "Pan-fry in a hot skillet with oil, 3–4 minutes per side until browned.",
      "Reduce heat, cover, and cook a few more minutes until tender.",
      "Serve as-is or with gravy spooned over top."
    ]
  },
  steak: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Season steaks generously with salt and pepper, let sit at room temperature 15 minutes.",
      "Heat a cast iron skillet or grill until very hot.",
      "Sear steaks 3–4 minutes per side for medium-rare, adjusting time for thickness and preference.",
      "Rest steaks 5 minutes before slicing."
    ]
  },
  philly_cheesesteaks: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Sauté sliced onions and mushrooms in a skillet until soft, set aside.",
      "In the same skillet, cook shaved steak over high heat, breaking it up, 3–4 minutes.",
      "Return onions and mushrooms to the skillet with the steak.",
      "Split French bread and top with the steak mixture, layer with White American cheese.",
      "Broil or cover until cheese melts, then serve."
    ]
  },
  chicken_wings: {
    cookTime: "40 min", servings: 4,
    steps: [
      "Preheat oven to 425°F, line a baking sheet with foil.",
      "Pat wings dry and toss with oil, salt, and pepper.",
      "Arrange in a single layer on the baking sheet.",
      "Bake 40 minutes, flipping halfway, until crispy and cooked through.",
      "Toss in your favorite sauce before serving."
    ]
  },
  grilled_chicken: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Season chicken breasts with salt, pepper, and any preferred seasoning.",
      "Preheat a grill or grill pan to medium-high heat.",
      "Grill 6–7 minutes per side until internal temp reaches 165°F.",
      "Rest 5 minutes before slicing."
    ]
  },
  chicken_quesadillas: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Dice chicken breast and cook in a skillet until browned and cooked through.",
      "Stir in Rotel and simmer 2 minutes to reduce liquid.",
      "Lay a tortilla in a dry skillet, sprinkle cheese, add chicken mixture, top with more cheese and a second tortilla.",
      "Cook 2–3 minutes per side until golden and cheese is melted.",
      "Slice into wedges and serve."
    ]
  },
  grilled_chicken_sandwiches: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Season chicken breasts and grill or pan-sear 6–7 minutes per side until cooked through.",
      "Sauté sliced mushrooms and onions until soft.",
      "Toast pretzel buns.",
      "Top chicken with Swiss cheese to melt, then layer onto buns with mushrooms and onions."
    ]
  },
  alice_springs_chicken: {
    cookTime: "35 min", servings: 4,
    steps: [
      "Preheat oven to 375°F.",
      "Season chicken breasts and sear in an oven-safe skillet, 3 minutes per side.",
      "Brush chicken with honey mustard, top with cooked bacon and cheese.",
      "Transfer skillet to the oven, bake 15–20 minutes until chicken reaches 165°F and cheese is melted."
    ]
  },
  buffalo_chicken: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Season chicken breasts with salt and pepper.",
      "Pan-sear or grill chicken 6–7 minutes per side until cooked through.",
      "Toss cooked chicken in buffalo sauce to coat.",
      "Serve as-is or sliced over a salad or in a wrap."
    ]
  },
  chicken_yellow_rice: {
    cookTime: "35 min", servings: 4,
    steps: [
      "Season chicken breast and sear in a large pot or skillet until browned, then set aside.",
      "Prepare yellow rice according to package directions in the same pot.",
      "Slice or shred the chicken and stir back into the rice.",
      "Simmer a few minutes together before serving."
    ]
  },
  chicken_pot_pie: {
    cookTime: "45 min", servings: 6,
    steps: [
      "Preheat oven to 400°F.",
      "Cook diced chicken breast in a pot until browned, then set aside.",
      "In the same pot, make a roux with butter and flour, whisk in broth and milk until thickened.",
      "Stir in chicken and mixed vegetables, season with salt and pepper.",
      "Pour filling into a pie crust or baking dish, top with a second crust or biscuits.",
      "Bake 25–30 minutes until golden and bubbling."
    ]
  },
  french_onion_chicken: {
    cookTime: "35 min", servings: 4,
    steps: [
      "Preheat oven to 375°F.",
      "Season chicken breasts and sear in an oven-safe skillet, 3 minutes per side.",
      "Sprinkle onion soup mix over the chicken and add a splash of water to the pan.",
      "Top with cheese if desired.",
      "Transfer to the oven and bake 15–20 minutes until chicken reaches 165°F."
    ]
  },
  bruschetta_chicken: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Dice tomatoes, toss with chopped basil, a drizzle of balsamic vinegar, salt, and pepper. Set aside.",
      "Season chicken breasts and grill or pan-sear 6–7 minutes per side until cooked through.",
      "Top chicken with the tomato bruschetta mixture just before serving."
    ]
  },
  lemon_pepper_chicken: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Season chicken breasts generously with lemon pepper seasoning.",
      "Heat a skillet with oil over medium-high heat.",
      "Cook chicken 6–7 minutes per side until golden and cooked through.",
      "Rest a few minutes before serving."
    ]
  },
  smoked_chicken: {
    cookTime: "3 hr", servings: 6,
    steps: [
      "Preheat smoker to 250°F.",
      "Pat the whole chicken dry and season generously inside and out.",
      "Place chicken in the smoker, breast side up.",
      "Smoke until internal temperature reaches 165°F in the thickest part of the thigh, about 3 hours.",
      "Rest 10–15 minutes before carving."
    ]
  },
  chicken_bowls: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Season and cook diced chicken breast in a skillet until browned and cooked through.",
      "Cook rice according to package directions.",
      "Assemble bowls with rice, chicken, lettuce, black beans, cheddar cheese, and salsa."
    ]
  },
  chicken_caesar_salad: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Season chicken breasts and grill or pan-sear 6–7 minutes per side until cooked through.",
      "Slice chicken once rested.",
      "Toss chopped lettuce with Caesar dressing.",
      "Top with sliced chicken and serve."
    ]
  },
  chicken_fried_rice: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Dice chicken breast and cook in a large skillet or wok until browned, set aside.",
      "Scramble eggs in the same pan, set aside.",
      "Add rice and mixed vegetables to the pan, stir-frying 3–4 minutes.",
      "Return chicken and eggs to the pan, add soy sauce, and toss together until heated through."
    ]
  },
  buffalo_chicken_wraps: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Season chicken breast and cook in a skillet until browned and cooked through, then slice or shred.",
      "Toss chicken in buffalo sauce.",
      "Warm tortillas.",
      "Layer tortillas with lettuce, buffalo chicken, and a drizzle of ranch, then roll up."
    ]
  },
  pork_tenderloin: {
    cookTime: "35 min", servings: 4,
    steps: [
      "Preheat oven to 400°F.",
      "Season pork tenderloin generously with salt, pepper, and any preferred seasoning.",
      "Sear in an oven-safe skillet on all sides, about 5 minutes total.",
      "Transfer to the oven and roast 20–25 minutes until internal temp reaches 145°F.",
      "Rest 5–10 minutes before slicing."
    ]
  },
  bbq_pork: {
    cookTime: "6 hr", servings: 6,
    steps: [
      "Season pork butt generously and place in a slow cooker.",
      "Cook on low 6–8 hours until the meat shreds easily with a fork.",
      "Drain excess liquid, then shred the pork.",
      "Toss shredded pork with BBQ sauce to coat."
    ]
  },
  bbq_baked_potatoes: {
    cookTime: "1 hr", servings: 4,
    steps: [
      "Scrub potatoes and pierce a few times with a fork.",
      "Bake at 400°F for about 45–60 minutes until tender, or microwave to speed things up.",
      "Warm the pulled pork (or cook and shred pork butt) and toss with BBQ sauce.",
      "Split potatoes open, top with pulled pork and cheddar cheese."
    ]
  },
  smoked_sausage: {
    cookTime: "15 min", servings: 4,
    steps: [
      "Slice smoked sausage into coins.",
      "Heat a skillet over medium heat with a little oil.",
      "Cook sausage 8–10 minutes, stirring occasionally, until browned on both sides."
    ]
  },
  hot_dogs: {
    cookTime: "15 min", servings: 4,
    steps: [
      "Grill, boil, or pan-fry hot dogs until heated through and lightly browned.",
      "Toast the buns.",
      "Sauté onions if desired.",
      "Build hot dogs with American cheese and onions."
    ]
  },
  chili_dogs: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Cook hot dogs by your preferred method until heated through.",
      "Warm chili in a saucepan.",
      "Toast the buns.",
      "Top hot dogs with chili, American cheese, and onions."
    ]
  },
  shrimp_alfredo: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Cook pasta according to package directions, drain.",
      "Season shrimp with salt and pepper, sauté in a skillet with garlic until pink, about 3 minutes. Set aside.",
      "In the same pan, simmer heavy whipping cream with Parmesan cheese until thickened.",
      "Toss pasta and shrimp in the sauce until coated."
    ]
  },
  shrimp_pasta: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Cook pasta according to package directions, drain, reserving a little pasta water.",
      "Season shrimp and sauté in a skillet with a little oil until pink, 2–3 minutes per side.",
      "Toss shrimp with pasta, adding a splash of pasta water to loosen if needed."
    ]
  },
  fried_catfish: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Pat catfish fillets dry.",
      "Dredge fillets in breading, pressing to coat well.",
      "Heat oil in a skillet or fryer to 350°F.",
      "Fry fillets 3–4 minutes per side until golden and cooked through.",
      "Drain on paper towels before serving."
    ]
  },
  steamed_shrimp: {
    cookTime: "15 min", servings: 4,
    steps: [
      "Fill a pot with a couple inches of water and Old Bay seasoning, bring to a boil.",
      "Add a steamer basket with shrimp (shell on).",
      "Cover and steam 3–5 minutes until shrimp are pink and opaque.",
      "Sprinkle with more Old Bay and serve with melted butter."
    ]
  },
  veggie_soup: {
    cookTime: "35 min", servings: 6,
    steps: [
      "Add mixed vegetables to a large pot with broth or water to cover.",
      "Bring to a boil, then reduce heat and simmer 20–25 minutes until vegetables are tender.",
      "Season with salt, pepper, and any preferred herbs."
    ]
  },
  chef_salads: {
    cookTime: "15 min", servings: 4,
    steps: [
      "Chop lettuce and place in a large bowl or individual plates.",
      "Dice ham and turkey, slice hard-boiled eggs.",
      "Top lettuce with ham, turkey, eggs, onions, cucumbers, and tomatoes.",
      "Sprinkle croutons on top and serve with your favorite dressing."
    ]
  },
  stuffed_shells: {
    cookTime: "50 min", servings: 6,
    steps: [
      "Preheat oven to 375°F. Cook shell pasta according to package directions, drain.",
      "Brown ground beef in a skillet, drain excess fat.",
      "Mix ricotta cheese with half the mozzarella and the cooked ground beef.",
      "Stuff each shell with the ricotta mixture, arrange in a baking dish over a layer of pasta sauce.",
      "Top with remaining pasta sauce and mozzarella.",
      "Cover and bake 25–30 minutes until bubbly."
    ]
  },
  blts: {
    cookTime: "15 min", servings: 4,
    steps: [
      "Cook bacon in a skillet until crispy, drain on paper towels.",
      "Toast the bread.",
      "Layer bread with bacon, lettuce, and sliced tomatoes.",
      "Slice and serve."
    ]
  },
  baked_ziti: {
    cookTime: "45 min", servings: 6,
    steps: [
      "Preheat oven to 375°F. Cook pasta according to package directions, drain.",
      "Brown ground beef in a skillet, drain excess fat.",
      "Stir pasta sauce into the ground beef, simmer 5 minutes.",
      "Combine with cooked pasta and half the mozzarella cheese in a baking dish.",
      "Top with remaining mozzarella.",
      "Bake 20–25 minutes until bubbly and golden."
    ]
  },
  hamburger_helper: {
    cookTime: "25 min", servings: 4,
    steps: [
      "Brown ground beef in a large skillet, drain excess fat.",
      "Stir in the Hamburger Helper sauce mix, milk, and the amount of water called for on the box.",
      "Add the pasta from the box.",
      "Bring to a boil, then reduce heat, cover, and simmer 10–12 minutes, stirring occasionally, until pasta is tender."
    ]
  },
  hamburger_soup: {
    cookTime: "35 min", servings: 6,
    steps: [
      "Brown ground beef in a large pot, drain excess fat.",
      "Add mixed vegetables and enough broth or water to cover.",
      "Bring to a boil, then reduce heat and simmer 20 minutes.",
      "Season with salt, pepper, and any preferred herbs before serving."
    ]
  },
  sloppy_joes: {
    cookTime: "20 min", servings: 4,
    steps: [
      "Brown ground beef in a skillet, drain excess fat.",
      "Stir in canned Manwich sauce, simmer 5–8 minutes.",
      "Toast the hamburger buns.",
      "Spoon the meat mixture onto buns and serve."
    ]
  }
};
