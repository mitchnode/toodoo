export class Task {
    constructor(taskname){
        this.taskname = taskname;
        this.description = '';
        this.complete = false;
        this.duedate = Date.now() + 86400000;
        this.priority = 'normal';
    }

    getName(){
        return this.taskname;
    }

    getDescription(){
        return this.description;
    }

    getDueDate(){
        return this.duedate;
    }

    getPriority(){
        return this.priority;
    }

    getComplete(){
        return this.complete;
    }

    setDescription(description){
        this.description = description;
    }

    setPriority(priority){
        this.priority = priority;
    }

    setDueDate(duedate){
        this.duedate = duedate;
    }

    completeTask(){
        this.complete = true;
    }
}