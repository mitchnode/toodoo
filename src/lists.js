export const lists = document.createElement("div");
import { ListView } from "./listview.js"

var count = 1;

const title = document.createElement("h1");
title.textContent = "Lists";
lists.appendChild(title);

function add_new_list() {
    
    lists.removeChild(new_list);
    const new_list_name = document.createElement("input");
    lists.appendChild(new_list_name);
    const new_list_confirm = document.createElement("button");
    new_list_confirm.id = "new";
    new_list_confirm.textContent = "Add";
    new_list_confirm.addEventListener("click", () => { 
        if(new_list_name.value != '') {
            var warning = document.getElementById("warning");
            if(warning){
                lists.removeChild(warning);
            }
            lists.removeChild(new_list_name);
            lists.removeChild(new_list_confirm);
            const newlistview = new ListView(new_list_name.value,lists);
        } else {
            var warning = document.getElementById("warning");
            if(warning){
                lists.removeChild(warning);
            }
            warning = document.createElement("p");
            warning.id = "warning";
            warning.textContent = "List must have a name";
            warning.setAttribute("style", "color: red;");
            lists.appendChild(warning);
        }
    });
    lists.appendChild(new_list_confirm);
    //const new_list = document.createElement("div");
    //new_list.id = count
    //new_list.className = "list";
    //lists.appendChild(new_list);
    //count += 1;
}

const new_list = document.createElement("button");
new_list.id = "new";
new_list.textContent = "Add new list";
new_list.addEventListener("click", () => { add_new_list()});
lists.appendChild(new_list);
