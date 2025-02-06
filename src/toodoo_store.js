export class toodoo_store {
    constructor(){
       this.store = [];
    }

    add_toodoo(toodoo){
        this.store.push(toodoo);
    }

    remove_toodoo(toodoo_index){
        var temp = this.store[0];
        this.store[0] = this.store[toodoo_index];
        this.store[toodoo_index] = temp;
        this.store.shift()
    }

    get_toodoo_store(){
        return this.store.entries();
    }
}