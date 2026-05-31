function categorize(item){
  const s = item.toLowerCase();

  if (
    s.includes("frozen")
    ) return "Frozen";
   
  if (
    s.includes("beef") || s.includes("chicken") || s.includes("pork") ||
    s.includes("steak") || s.includes("shrimp") || s.includes("sausage") ||
    s.includes("salmon") || s.includes("ribs") || s.includes("hot dogs") || 
    s.includes("turkey") || s.includes ("bacon")
  ) return "Meat";

  if (
    s.includes("lettuce") || s.includes("tomato") || s.includes("potato") ||
    s.includes("broccoli") || s.includes("corn") || s.includes("carrot") ||
    s.includes("asparagus") || s.includes("sprouts") || s.includes("beans") ||
    s.includes("green beans") || s.includes("vegetables") || s.includes("onions") || s.includes("mushrooms") 
  ) return "Produce";

  if (
    s.includes("cheese") || s.includes("milk") || s.includes("butter") ||
    s.includes("alfredo")
  ) return "Dairy";

  if (
    s.includes("pasta") || s.includes("rice") || s.includes("bread") ||
    s.includes("shells") || s.includes("sauce") || s.includes("dressing") || s.includes("chili") ||
    s.includes("breadcrumbs") || s.includes("mix") || s.includes("dumplings") || s.includes("buns") || s.includes("mac") || s.includes("kit") || s.includes("gravy") || s.includes("noodles") || s.includes("canned") || s.includes("box")
  ) return "Pantry";

   

  return "Other";
}

function render(){
  let html = "";
  const grocery = [];

  currentPlan.forEach(d => {
  html += `<div class="day" style="display:flex;justify-content:space-between;gap:10px;">`
html += `<div style="flex:1;">`
    html += `<div style="display:flex;align-items:center;gap:8px;">
  <h3 style="margin:0;">${escapeHtml(d.day)}</h3>
  ${locked[d.day] ? `<span class="lock">🔒 Locked</span>` : ""}
</div>`;
    const lunch = lunchPlan.find(l => l.day === d.day);

if(lunch){
  html += `<div class="side">🥪 ${escapeHtml(lunch.meal)}</div>`;
}

  if (d.dateNight) {
  html += `<div class="meal">❤️ Date Night</div>`;
}
else if (d.takeout) {
  html += `<div class="meal">🍔 ${escapeHtml(d.takeout)}</div>`;
}
else {
  html += `<div class="meal">🍽 ${escapeHtml(d.meal)}</div>`;

  if(d.items){
    grocery.push(...d.items);
  }

  if (d.side) {
    html += `<div class="side">🥗 ${escapeHtml(d.side)}</div>`;
    if(d.sideItems){
      grocery.push(...d.sideItems);
    }
  }
}


html += `</div>`

html += `<div style="display:flex;flex-direction:column;width:44px;">
  <button onclick="toggleLock('${d.day}')" class="icon-btn" style="height:50%;padding:0;margin:0 0 6px 0;">${locked[d.day] ? "🔒" : "🔓"}</button>
  <button onclick="openMenu('${d.day}')" class="icon-btn" style="height:50%;padding:0;margin:0;font-size:20px;">⋮</button>
</div>`

html += `</div>`;
    
  });

  document.getElementById("planner").innerHTML = html;

  const unique = [...new Set(grocery)];
  const groups = {};

  unique.forEach(item => {
    const cat = categorize(item);
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  });

  const order = ["Produce","Meat","Dairy","Pantry","Frozen","Other"];
  let list = "";

  order.forEach(cat => {
    if (!groups[cat] || !groups[cat].length) return;
    groups[cat].sort((a,b) => a.localeCompare(b));
    list += `<h4>${cat}</h4><ul>`;
    groups[cat].forEach(i => {
      list += `<li>${i}</li>`;
    });
    list += `</ul>`;
  });

  document.getElementById("grocery").innerHTML = list || "<div class='small'>No items yet.</div>";
}
