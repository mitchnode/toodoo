import { dashboard } from "./dashboard.js";
import { toodoo } from "./toodoo.js";

export const listinputbox = document.createElement("div");
listinputbox.id = "inputbox";
listinputbox.className = "listinputbox";
const listinputtitle = document.createElement("h3");
listinputtitle.className = "listinputitle";
listinputtitle.textContent = "Input new Toodoo name:";
const listinput = document.createElement("input");
listinput.className = "listinput";
const listaddbutton = document.createElement("button");
listaddbutton.className = "listaddbutton";
listaddbutton.textContent = "OK";
listaddbutton.addEventListener("click", () => {
    if(listinput.value != '') {
        var warning = document.getElementById("warning");
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


    
})
listinputbox.appendChild(listinputtitle);
listinputbox.appendChild(listinput);
listinputbox.appendChild(listaddbutton);