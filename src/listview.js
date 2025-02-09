import { format } from "date-fns";
import { buildDashboard } from "./build_dashboard.js";

export class ListView {
    constructor(list, parent){
        this.list = list;
        this.listname = this.list.getName();
        this.parent = parent;
        this.placeContainer();
        this.placeTitle();
        this.placeTaskInput();
        this.placeListBlock();
        this.refreshList();
    }

    load_dashboard() {
        buildDashboard(this.parent);
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
            this.load_dashboard();
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

    toggleCompleteTask(taskindex){
        
        
        var taskline = document.getElementById(`taskline-${taskindex}`);
        if (taskline.className == "completed-task"){
            taskline.className = "";
            this.list.getList()[taskindex].uncompleteTask();
        } else {
            taskline.className = "completed-task";
            this.list.getList()[taskindex].completeTask();
        }
        this.list.storeList();
    }

    placeTask(task){
        var taskname = task[1].getName();
        var taskdescription = task[1].getDescription()
        var taskduedate = format(task[1].getDueDate(), 'dd-MM-yyyy');
        var taskpriority = task[1].getPriority();
        var taskcomplete = task[1].getComplete();
        var taskindex = task[0];
        const taskline = document.createElement("div");
        taskline.id = `taskline-${taskindex}`;
        if(taskcomplete){
            taskline.className = "completed-task";
        }

        const tasktitle = document.createElement("h3");
        tasktitle.id = "title";
        tasktitle.textContent = taskname;

        const description = document.createElement("p");
        description.id = "description";
        description.textContent = taskdescription;

        const duedate = document.createElement("p");
        duedate.id = "duedate";
        duedate.textContent = taskduedate;

        const priority = document.createElement("p");
        priority.id = "priority";
        priority.textContent = taskpriority;

        const completeButton = document.createElement("button");
        completeButton.id = taskindex;
        completeButton.className = "complete";
        completeButton.textContent = "✓";
        completeButton.addEventListener("click", (e) => { this.toggleCompleteTask(e.target.id); });

        const deleteButton = document.createElement("button");
        deleteButton.id = taskindex;
        deleteButton.className = "delete";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", (e) => { this.deleteTask(e.target.id); });

        taskline.appendChild(tasktitle);
        taskline.appendChild(description);
        taskline.appendChild(duedate);
        taskline.appendChild(priority);
        taskline.appendChild(completeButton);
        taskline.appendChild(deleteButton);
        this.listblock.appendChild(taskline);
    }

    refreshList(){
        this.list.storeList();
        this.listblock.replaceChildren();
        for (var task of this.list.getList().entries()) {
            this.placeTask(task);
        }
    }

    getList(){
        return this.list;
    }
}