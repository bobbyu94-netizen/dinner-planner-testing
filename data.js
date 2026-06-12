
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
  {id:"philly_cheesesteaks", meal:"Philly Cheesesteaks", protein:"beef", items:["Steak","French bread","White American cheese","Onions","Mushrooms"]},

  {id:"chicken_wings", meal:"Chicken Wings", protein:"chicken", items:["Chicken wings"]},
  {id:"chicken_parm", meal:"Chicken Parm", protein:"chicken", items:["Chicken","Marinara","Mozzarella cheese","Italian bread crumbs","Parmesan cheese"], leftovers:1},
  {id:"grilled_chicken", meal:"Grilled Chicken", protein:"chicken", items:["Chicken"], leftovers:1},
  {id:"chicken_quesadillas", meal:"Chicken Quesadillas", protein:"chicken", items:["Chicken","Tortillas","Cheese","Rotel"]},
  {id:"grilled_chicken_sandwiches", meal:"Grilled Chicken Sandwiches", protein:"chicken", items:["Chicken","Pretzel Buns","Swiss cheese","Mushrooms","Onions"]},
  {id:"alice_springs_chicken", meal:"Alice Springs Chicken", protein:"chicken", items:["Chicken","Bacon","Cheese","Honey mustard"]},
  {id:"buffalo_chicken", meal:"Buffalo Chicken", protein:"chicken", items:["Chicken","Buffalo sauce"]},
  {id:"chicken_fajitas", meal:"Chicken Fajitas", protein:"chicken", items:["Chicken","Peppers","Tortillas"], leftovers:1},
  {id:"chicken_yellow_rice", meal:"Chicken & Yellow Rice", protein:"chicken", items:["Chicken","Yellow Rice"], complete:true},
  {id:"chicken_pot_pie", meal:"Chicken Pot Pie", protein:"chicken", items:["Chicken","Vegetables"], complete:true},
  {id:"french_onion_chicken", meal:"French Onion Chicken", protein:"chicken", items:["Chicken","Onion soup mix"]},
  {id:"chicken_alfredo", meal:"Chicken Alfredo", protein:"chicken", items:["Chicken","Pasta","Heavy whipping cream","Parmesan cheese","Garlic"]},
  {id:"bruschetta_chicken", meal:"Bruschetta Chicken", protein:"chicken", items:["Chicken","Tomatoes","Basil","Balsamic vinegar"]},
  {id:"lemon_pepper_chicken", meal:"Lemon Pepper Chicken", protein:"chicken", items:["Chicken","Lemon pepper seasoning"]},
  {id:"smoked_chicken", meal:"Smoked Chicken", protein:"chicken", items:["Chicken"], leftovers:1},
  {id:"chicken_bowls", meal:"Chicken Bowls", protein:"chicken", items:["Chicken","Lettuce","Rice","Black beans","Cheddar cheese","Salsa"], complete:true},
  {id:"chicken_caesar_salad", meal:"Chicken Caesar Salad", protein:"chicken", items:["Chicken","Lettuce","Caesar dressing"], complete:true},
  {id:"chicken_fried_rice", meal:"Chicken Fried Rice", protein:"chicken", items:["Chicken","Rice","Eggs","Mixed vegetables","Soy sauce"], leftovers:1, complete:true},
  {id:"cajun_chicken_pasta", meal:"Cajun Chicken Pasta", protein:"chicken", items:["Chicken","Pasta","Heavy whipping cream","Parmesan cheese","Cajun seasoning"], leftovers:1},
  {id:"white_chicken_chili", meal:"White Chicken Chili", protein:"chicken", items:["Chicken","White beans","Cream cheese","Green chilies"], leftovers:1, complete:true},
  {id:"buffalo_chicken_wraps", meal:"Buffalo Chicken Wraps", protein:"chicken", items:["Chicken","Buffalo sauce","Lettuce","Ranch","Tortillas"]},
  {id:"tuscan_chicken", meal:"Tuscan Chicken", protein:"chicken", items:["Chicken","Spinach","Heavy whipping cream","Parmesan cheese","Sun dried tomatoes"], leftovers:1, complete:true},
  {id:"chicken_enchiladas", meal:"Chicken Enchiladas", protein:"chicken", items:["Chicken","Tortillas","Enchilada sauce","Cheddar cheese"], leftovers:1},
  {id:"chicken_dumplings", meal:"Chicken & Dumplings", protein:"chicken", items:["Chicken","Biscuits","Cream soup"], leftovers:2, complete:true},

  {id:"pork_chops", meal:"Pork Chops", protein:"pork", items:["Pork chops"], leftovers:1},
  {id:"pork_tenderloin", meal:"Pork Tenderloin", protein:"pork", items:["Pork tenderloin"], leftovers:1},
  {id:"bbq_pork", meal:"BBQ Pork", protein:"pork", items:["Pork","BBQ sauce"], leftovers:1, complete:true},
  {id:"ribs", meal:"Ribs", protein:"pork", items:["Ribs","BBQ sauce"], leftovers:1},
  {id:"smoked_sausage", meal:"Smoked Sausage", protein:"pork", items:["Smoked sausage"]},
  {id:"fried_potatoes_sausage", meal:"Fried Potatoes w Sausage", protein:"pork", items:["Sausage","Potatoes","Onions"], leftovers:1, complete:true},
  {id:"hot_dogs", meal:"Hot Dogs", protein:"pork", items:["Hot dogs","Buns","American cheese","Onions"]},
  {id:"chili_dogs", meal:"Chili Dogs", protein:"pork", items:["Hot dogs","Chili","American cheese","Onions"]},
  {id:"breakfast_for_dinner", meal:"Breakfast for Dinner", protein:"pork", items:["Bacon","Eggs","Biscuits","Gravy"], complete:true},
  {id:"red_beans_rice", meal:"Red Beans & Rice", protein:"pork", items:["Smoked sausage","Rice","Red beans"], leftovers:1, complete:true},
  {id:"cajun_sausage_pasta", meal:"Cajun Sausage Pasta", protein:"pork", items:["Smoked sausage","Pasta","Heavy whipping cream","Parmesan cheese","Cajun seasoning"], leftovers:1, complete:true},
  {id:"bbq_baked_potatoes", meal:"BBQ Baked Potatoes", protein:"pork", items:["Pork","Potatoes","Cheddar cheese","BBQ sauce"], leftovers:1, complete:true},

  {id:"shrimp_boil", meal:"Shrimp Boil", protein:"seafood", items:["Shrimp","Frozen corn","Potatoes","Onions","Andouille sausage","Old Bay seasoning"], complete:true},
  {id:"steamed_shrimp", meal:"Steamed Shrimp", protein:"seafood", items:["Shrimp","Old Bay seasoning"]},
  {id:"salmon", meal:"Salmon", protein:"seafood", items:["Salmon"]},
  {id:"shrimp_alfredo", meal:"Shrimp Alfredo", protein:"seafood", items:["Shrimp","Pasta","Heavy whipping cream","Parmesan cheese","Garlic"]},
  {id:"shrimp_pasta", meal:"Shrimp Pasta", protein:"seafood", items:["Shrimp","Pasta"]},
  {id:"fried_catfish", meal:"Fried Catfish", protein:"seafood", items:["Catfish","Breading","Oil"]},

  {id:"chili", meal:"Chili", protein:"mixed", items:["Ground beef","Beans","Diced tomatoes","Chili seasoning"], leftovers:1, complete:true},
  {id:"gumbo", meal:"Gumbo", protein:"mixed", items:["Chicken","Sausage","Rice","Green Peppers","Celery","Onions","Chicken Broth"], leftovers:2, complete:true},
  {id:"jambalaya", meal:"Jambalaya", protein:"mixed", items:["Chicken","Sausage","Rice"], leftovers:1, complete:true},
  {id:"veggie_soup", meal:"Veggie Soup", protein:"mixed", items:["Mixed vegetables"], leftovers:1, complete:true},
  {id:"loaded_potato_soup", meal:"Loaded Potato Soup", protein:"mixed", items:["Potatoes","Cheese"], leftovers:1, complete:true},
  {id:"hibachi", meal:"Hibachi", protein:"mixed", items:["Chicken","Rice","Squash","Zucchini","Onions","Yum Yum sauce"], leftovers:1, complete:true},
  {id:"chef_salads", meal:"Chef Salads", protein:"mixed", items:["Lettuce","Ham","Turkey","Eggs","Onions","Cucumbers","Tomatoes","Croutons"]},
  {id:"stuffed_shells", meal:"Stuffed Shells", protein:"mixed", items:["Shell Pasta","Ricotta Cheese","Mozzarella Cheese","Ground Beef","Pasta Sauce"], leftovers:1},
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
  }
};
