export const lists = document.createElement("div");

var count = 1;

const title = document.createElement("h1");
title.textContent = "Lists";
lists.appendChild(title);

function add_new_list() {
    const new_list = document.createElement("div");
    new_list.id = count
    new_list.className = "list";
    lists.appendChild(new_list);
    count += 1;
}

const new_list = document.createElement("button");
new_list.id = "new";
new_list.textContent = "+";
new_list.addEventListener("mouseover", () => { new_list.setAttribute("style","background-color:coral;");});
new_list.addEventListener("mouseout", () => { new_list.setAttribute("style","");});
new_list.addEventListener("click", () => { add_new_list()});
lists.appendChild(new_list);
