import { List } from "./list.js";
import { ListView } from "./listview.js"
import { buildDashboard } from "./build_dashboard.js";

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
        const toodoocontainer = document.createElement("div");
        toodoocontainer.className = "toodoocontainer";
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
        listinfo.textContent = `toodoo items: ${this.list.getLength()}`;
        const delete_button = document.createElement("button");
        delete_button.textContent = "X";
        delete_button.className = "delete";
        delete_button.addEventListener("click", () => {
            this.list.deleteList();
            parent.replaceChildren();
            buildDashboard(parent);
        });
        box.appendChild(title);
        box.appendChild(listinfo);
        toodoocontainer.appendChild(box);
        toodoocontainer.appendChild(delete_button);
        parent.appendChild(toodoocontainer);
    }

    getList(){
        return this.list;
    }
}