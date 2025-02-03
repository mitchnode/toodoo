import { Task } from "./task.js";

export class List {
    constructor(listName){
        this.listName = listName;
        this.listData = [];
        this.length = 0;
    }

    addToList(taskname){
        this.listData.push(new Task(taskname));
        this.listData.sort();
    }

    removeFromList(taskindex){
        var taskname = this.listData[taskindex].getName();
        var temp = this.listData[0];
        this.listData[0] = this.listData[taskindex];
        this.listData[taskindex] = temp;
        this.listData.shift();
        this.listData.sort();
        return `Deleted ${taskname} from ${this.listName} at index ${taskindex}`;
    }

    getLength(){
        return this.listData.length()
    }

    getList(){
        //console.log(this.listData[0])
        return this.listData.entries();
    }

    completeTask(task){
        task.completeTask();
    }
}