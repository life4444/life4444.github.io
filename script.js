var selected = null;

const infantry = new Map([
    [attack, 10],
    [defense, 10]
]);

const units = new Map([
    ["infantry", infantry]
]);

function click(){
    return 4;
}

function select(id){
    if (selected == null){
        selected = id;
        id.style.outline = "4px solid green";
    }
    else{
        selected = null;
        id.style.outline = "none"
    }
}

class Unit {
    constructor(name){
        this.name = name;
        this.hp = 100;
        this.attack = units.get(name).get(attack)
        this.defense = units.get(name).get(defense)
    }
    showStats(block){
        
    }
}