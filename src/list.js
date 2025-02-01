
export class List {
    constructor(listName){
        this.listName = listName;
        this.listData = [];
        this.length = 0;
    }

    addToList(item){
        this.listData.push(item);
        this.listData.sort();
    }

    removeFromList(item){
        var index = this.listData.indexOf(item);
        var temp = this.listData[0];
        this.listData[0] = this.listData[index];
        this.listData[index] = temp;
        this.listData.shift();
        this.listData.sort();
        return `Deleted ${item} from ${this.listName} at index ${index}`;
    }

    getLength(){
        return this.listData.length()
    }

    getList(){
        console.log(this.listData[0])
        return this.listData;
    }
}