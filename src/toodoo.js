import { List } from "./list.js";
import { ListView } from "./listview.js"

export class toodoo {
    constructor(listname, rebuild = false){
        this.list = new List(listname, rebuild);
        this.listName = this.list.getName();
    }
   
    setName(name){
        this.listName = name;
    }

    getName(){
        return this.listName;
    }

    placeTooDoo(parent){
        const box = document.createElement("div");
        box.className = "toodoobox";
        box.addEventListener("click", () => {
            while(parent.firstChild) parent.removeChild(parent.lastChild);
            this.newlistview = new ListView(this.list,parent);
        })
        const title = document.createElement("h3");
        title.className = "toodootitle";
        title.textContent = this.listName;
        const listinfo = document.createElement("p");
        listinfo.className = "toodooinfo";
        listinfo.textContent = this.list.getLength();        
        box.appendChild(title);
        box.appendChild(listinfo);
        parent.appendChild(box);
    }

    getList(){
        return this.list;
    }
}