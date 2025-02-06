import { listinputbox } from "./listinput.js";

export function buildDashboard(dashboard, store){
    const dashboard_title = document.createElement("h2");
    dashboard_title.textContent = "Dashboard";
    dashboard.appendChild(dashboard_title);

    store.get_toodoo_store(element => {
        element.placeTooDoo(dashboard);
    });
    

    function load_page(page) {
        console.log(`Adding ${page} to content`)
        dashboard.appendChild(page)
    }

    var new_toodoo_button = document.createElement("button");
    new_toodoo_button.className = "toodoobutton";
    new_toodoo_button.textContent = "Add TooDoo List"
    new_toodoo_button.addEventListener("click", () => { load_page(listinputbox);})
    dashboard.appendChild(new_toodoo_button);
}
