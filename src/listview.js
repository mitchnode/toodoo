import { buildDashboard } from "./build_dashboard.js";

export class ListView {
    constructor(list, parent, store){
        this.list = list;
        this.listname = this.list.getName();
        this.parent = parent;
        this.store = store;
        this.placeContainer();
        this.placeTitle();
        this.placeTaskInput();
        this.placeListBlock();
    }

    load_dashboard() {
        buildDashboard(this.parent, this.store);
    }

    closeContainer(){
        this.parent.removeChild(this.container);
    }

    placeContainer(){
        this.container = document.createElement("div");
        this.container.id = "listview";
        this.parent.appendChild(this.container);
    }

    placeTitle(){
        const listtitle = document.createElement("h2");
        listtitle.id = "title";
        listtitle.textContent = this.listname;
        this.container.appendChild(listtitle);
        const closebutton = document.createElement("button");
        closebutton.textContent = "Close";
        closebutton.addEventListener("click", () => {
            this.closeContainer();
            console.log(this.store)
            this.load_dashboard();
            // Load dashboard again
        })
        this.container.appendChild(closebutton);
    }

    placeListBlock(){
        this.listblock = document.createElement("div");
        this.listblock.id = this.listname;
        this.container.appendChild(this.listblock);
    }

    placeTaskInput(){
        const tasknameInput = document.createElement("input");
        const addtaskButton = document.createElement("button");
        addtaskButton.id = "add";
        addtaskButton.textContent = "Add task";
        addtaskButton.addEventListener("click", () => { this.addTask(tasknameInput.value); tasknameInput.value = ''});
        this.container.appendChild(tasknameInput);
        this.container.appendChild(addtaskButton);
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