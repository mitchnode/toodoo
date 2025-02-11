import { dashboard } from "./dashboard.js";
import { toodoo } from "./toodoo.js";
//import { toodoo_store } from "./toodoo_store.js";

//var store = new toodoo_store();

export const listinputbox = document.createElement("div");
listinputbox.className = "toodoocontainer";
listinputbox.id = "inputbox";
const box = document.createElement("div");
box.className = "toodoobox";
const listinput = document.createElement("input");
listinput.className = "listinput";
const listinfo = document.createElement("p");
listinfo.className = "toodooinfo";
listinfo.textContent = "toodoo items: 0";
const add_button = document.createElement("button");
add_button.textContent = "+";
add_button.className = "add";
add_button.addEventListener("click", () => {
    if(listinput.value != '') {
        const warning = document.getElementById("warning");
        if(warning){
            dashboard.removeChild(warning);
        }
        const inputbox = document.getElementById("inputbox");
        dashboard.removeChild(inputbox);
        var toodoolist = new toodoo(listinput.value);
        listinput.value = '';
        toodoolist.placeTooDoo(dashboard);
    } else {
        var warning = document.getElementById("warning");
        if(warning){
            dashboard.removeChild(warning);
        }
        warning = document.createElement("p");
        warning.id = "warning";
        warning.textContent = "List must have a name";
        warning.setAttribute("style", "color: red;");
        dashboard.appendChild(warning);
    }
});
box.appendChild(listinput);
box.appendChild(listinfo)
listinputbox.appendChild(box);
listinputbox.appendChild(add_button);
