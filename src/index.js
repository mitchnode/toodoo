import "./styles.css";
import { dashboard } from "./dashboard.js"
import { lists } from "./lists.js"

content.appendChild(dashboard)

function clear_content() {
    while(content.firstChild) content.removeChild(content.lastChild);
    //dashboard_button.setAttribute("style","")
    //lists_button.setAttribute("style","")
}

function load_page(page) {
    clear_content()
    content.appendChild(page)
}

//var dashboard_button = document.getElementById("dashboard")
//dashboard_button.setAttribute("style","background-color:lightgrey;");
//dashboard_button.addEventListener("mouseover", () => { dashboard_button.setAttribute("style","background-color:grey;color: white;");})
//dashboard_button.addEventListener("mouseout", () => { dashboard_button.setAttribute("style","");})
//dashboard_button.addEventListener("click", () => { load_page(dashboard); dashboard_button.setAttribute("style","background-color:light-grey;");})
//var lists_button = document.getElementById("lists")
//lists_button.addEventListener("mouseover", () => { lists_button.setAttribute("style","background-color:grey;color: white;");})
//lists_button.addEventListener("mouseout", () => { lists_button.setAttribute("style","");})
//lists_button.addEventListener("click", () => { load_page(lists); lists_button.setAttribute("style","background-color:light-grey;");})
