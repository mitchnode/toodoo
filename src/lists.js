export const lists = document.createElement("div");
import { List } from "./list.js";

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
    new_list_confirm.textContent = "O";
    new_list_confirm.addEventListener("mouseover", () => { new_list_confirm.setAttribute("style","background-color:coral;");});
    new_list_confirm.addEventListener("mouseout", () => { new_list_confirm.setAttribute("style","");});
    new_list_confirm.addEventListener("click", () => { lists.removeChild(new_list_name); lists.removeChild(new_list_confirm); confirm_new_list(new_list_name.value)});
    lists.appendChild(new_list_confirm);
    //const new_list = document.createElement("div");
    //new_list.id = count
    //new_list.className = "list";
    //lists.appendChild(new_list);
    //count += 1;
}

function confirm_new_list(listName) {
    const list = new List(listName);
    const listTitle = document.createElement("h2");
    listTitle.id = "title";
    listTitle.textContent = listName;
    lists.appendChild(listTitle);
    const listdiv = document.createElement("div");
    listdiv.id = listName;
    lists.appendChild(listdiv);
    

    const newItemValue = document.createElement("input");
    lists.appendChild(newItemValue);
    const newItemButton = document.createElement("button");
    newItemButton.id = "new";
    newItemButton.textContent = "+";
    newItemButton.addEventListener("mouseover", () => { newItemButton.setAttribute("style","background-color:coral;");});
    newItemButton.addEventListener("mouseout", () => { newItemButton.setAttribute("style","");});
    newItemButton.addEventListener("click", () => { newItem(list, newItemValue.value); newItemValue.value = ''});
    lists.appendChild(newItemButton);
}

function newItem(list, newItemValue){
    list.addToList(newItemValue);
    const listdiv = clearList(list.listName);
    refreshList(list, listdiv);
}

function deleteItem(list, taskname){
    console.log(list.removeFromList(taskname));
    const listdiv = clearList(list.listName);
    refreshList(list, listdiv);
}

function refreshList(list, listdiv){
    for (var task of list.getList()) {
        var taskname = task[1].getName();
        const itemString = document.createElement("p");
        itemString.id = "item";
        itemString.textContent = taskname;
        listdiv.appendChild(itemString);
        const deleteItemButton = document.createElement("button");
        deleteItemButton.id = task[0];
        deleteItemButton.textContent = "X";
        deleteItemButton.addEventListener("mouseover", () => { deleteItemButton.setAttribute("style","background-color:red;");});
        deleteItemButton.addEventListener("mouseout", () => { deleteItemButton.setAttribute("style","");});
        deleteItemButton.addEventListener("click", function () { deleteItem(list, this.id) });
        listdiv.appendChild(deleteItemButton);
    }
}

function clearList(listName){
    const listdiv = document.getElementById(listName);
    listdiv.replaceChildren();
    return listdiv;
}

const new_list = document.createElement("button");
new_list.id = "new";
new_list.textContent = "+";
new_list.addEventListener("mouseover", () => { new_list.setAttribute("style","background-color:coral;");});
new_list.addEventListener("mouseout", () => { new_list.setAttribute("style","");});
new_list.addEventListener("click", () => { add_new_list()});
lists.appendChild(new_list);
