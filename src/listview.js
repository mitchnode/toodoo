import { List } from "./list.js";

export class ListView {
    constructor(listname, parent){
        this.listname = listname;
        this.list = new List(this.listname);
        this.parent = parent;
        this.placeTitle();
        this.placeTaskInput();
        this.placeListBlock();
    }

    placeTitle(){
        const listtitle = document.createElement("h2");
        listtitle.id = "title";
        listtitle.textContent = this.listname;
        this.parent.appendChild(listtitle);

    }

    placeListBlock(){
        this.listblock = document.createElement("div");
        this.listblock.id = this.listname;
        this.parent.appendChild(this.listblock);
    }

    placeTaskInput(){
        const tasknameInput = document.createElement("input");
        const addtaskButton = document.createElement("button");
        addtaskButton.id = "add";
        addtaskButton.textContent = "Add task";
        addtaskButton.addEventListener("click", () => { this.addTask(tasknameInput.value); tasknameInput.value = ''});
        this.parent.appendChild(tasknameInput);
        this.parent.appendChild(addtaskButton);
    }

    addTask(taskname){
        this.list.addToList(taskname);
        this.refreshList();
    }

    deleteTask(taskindex){
        console.log(this.list.removeFromList(taskindex));
        this.refreshList();
    }

    placeTask(task){
        var taskname = task[1].getName();
        var taskindex = task[0];
        const taskline = document.createElement("p");
        taskline.id = "task";
        taskline.textContent = taskname;
        const deleteButton = document.createElement("button");
        deleteButton.id = taskindex;
        deleteButton.className = "delete";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", (e) => { this.deleteTask(e.target.id); });
        this.listblock.appendChild(taskline);
        taskline.appendChild(deleteButton);
    }

    refreshList(){
        this.listblock.replaceChildren();
        for (var task of this.list.getList()) {
            this.placeTask(task);
        }
    }

    getList(){
        return this.list;
    }
}