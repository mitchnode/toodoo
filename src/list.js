import { Task } from "./task.js";

export class List {
    constructor(listName, rebuild = false){
        this.listName = listName;
        this.listData = [];
        if(rebuild == false){
            this.updateStoredLists();
            this.storeList()
        }
    }

    getName(){
        return this.listName;
    }

    addToList(taskname){
        this.listData.push(new Task(taskname));
        this.listData.sort();
        this.storeList()
    }

    removeFromList(taskindex){
        var taskname = this.listData[taskindex].getName();
        var temp = this.listData[0];
        this.listData[0] = this.listData[taskindex];
        this.listData[taskindex] = temp;
        this.listData.shift();
        this.listData.sort();
        this.storeList()
        return `Deleted ${taskname} from ${this.listName} at index ${taskindex}`;
    }

    getLength(){
        return this.listData.length;
    }

    getList(){
        return this.listData;
    }

    completeTask(task){
        task.completeTask();
    }

    uncompleteTask(task){
        task.completeTask();
    }

    storeList(){
        localStorage.setItem(this.listName, JSON.stringify(this.listData));
    }

    updateStoredLists(){
        if(localStorage.getItem("Lists")) {
            this.storedlists = JSON.parse(localStorage.getItem("Lists"));
        }
        else {
            this.storedlists = [];
        }
        this.storedlists.push(this.listName);
        localStorage.setItem("Lists", JSON.stringify(this.storedlists));
    }

    deleteList(){
        this.storedlists = JSON.parse(localStorage.getItem("Lists"));
        const index = this.storedlists.indexOf(this.listName);
        this.storedlists.splice(index, 1);
        localStorage.setItem("Lists", JSON.stringify(this.storedlists));
        localStorage.removeItem(this.listName);
        console.log(`Deleted: ${this.listName}`);
    }
}