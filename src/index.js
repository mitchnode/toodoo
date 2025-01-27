import "./styles.css";

var home_button = document.getElementById("dashboard")
home_button.setAttribute("style","background-color:grey;color: white;");
home_button.addEventListener("click", () => { load_page(home); home_button.setAttribute("style","background-color:grey;color: white;");})
var menu_button = document.getElementById("lists")
menu_button.addEventListener("click", () => { load_page(menu); menu_button.setAttribute("style","background-color:grey;color: white;");})
