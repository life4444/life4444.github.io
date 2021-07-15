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

function select(unit, status){
    if (selected == null){
        selected = unit;
        unit.style.outline = "4px solid green";
        status.style.display = "block";
    }
    else{
        selected = null;
        unit.style.outline = "none"
        status.style.display = "none"
    }
}

class Unit {
    constructor(name, master){
        this.master = master
        this.name = name;
        this.hp = 100;
        this.attack = units.get(name).get(attack)
        this.defense = units.get(name).get(defense)
    }
    showStats(block){
        
    }
}