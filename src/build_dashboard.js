import { listinputbox } from "./listinput.js";
import { toodoo } from "./toodoo.js";

export function buildDashboard(dashboard){
    const dashboard_title = document.createElement("h2");
    dashboard_title.textContent = "Dashboard";
    dashboard.appendChild(dashboard_title);

    var new_toodoo_button = document.createElement("button");
    new_toodoo_button.className = "toodoobutton";
    new_toodoo_button.textContent = "Add TooDoo List"
    new_toodoo_button.addEventListener("click", () => { load_page(listinputbox);})
    dashboard.appendChild(new_toodoo_button);
 
    var lists = JSON.parse(localStorage.getItem("Lists"));
    try {
        for(var list of lists) {
            var list_obj = new toodoo(list, true);
            
            var tasks = JSON.parse(localStorage.getItem(list));
            for (var i = 0; i < tasks.length; i++) {
                list_obj.getList().addToList(tasks[i].taskname)
            }
            list_obj.placeTooDoo(dashboard);
        }
    }
    catch {

    }
    
    function load_page(page) {
        console.log(`Adding ${page} to content`)
        dashboard.appendChild(page)
    }    
}
