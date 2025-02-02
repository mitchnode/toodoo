export class Task {
    constructor(taskname){
        this.taskname = taskname;
        this.complete = false;
    }

    getName(){
        return this.taskname;
    }
}