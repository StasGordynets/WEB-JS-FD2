class HashStorage {
    constructor() {
        this.hash = {
            name: {
                alcoholic: 0,
                recipe: {
                    ingress1: 0,
                    ingress2: 0,
                    percentage: 0
                }
            }
        };

        this.nameKey = ["name", "alcoholic", "ingress1", "ingress2", "percentage"];
    }

    addValue(key, value) {
        this.hash[key] = value;
    }

    getValue(key) {
        console.log(this.hash[key]);
    }

    deleteValue(key) {
        delete this.hash[key];

        return true;
    }

    getKeys() {
        for (let keys in this.hash)
            console.log(keys);
    }
}

let newDrinks = [],
    namesDrinks = [];

function add() {
    let nameValue = [];
    nameValue[0] = prompt("Название напитка:");
    nameValue[1] = confirm("Алгогольный напиток?");
    nameValue[2] = prompt("Первый ингредиент:");
    nameValue[3] = prompt("Второй ингредиент:");
    nameValue[4] = prompt("Соотношение смешивания ингредиентов", "50/50");

    let sizeHash = newDrinks.length;
    newDrinks.push(new HashStorage());
    namesDrinks.push(nameValue[0]);

    for (let i = 0; i < 5; i++) {
        newDrinks[sizeHash].addValue(newDrinks[sizeHash].nameKey[i], nameValue[i]);
    }
}

function findEqual(a, s) {
    for (var i = 0; i < a.length; ++i) {
        if (a[i].indexOf(s) >= 0) {
            return i;
        }
    }
    return -1;
}


function print() {
    let value = prompt("Введите название напитка:"),
        indexHash = findEqual(namesDrinks, value);

    for (let i in newDrinks[indexHash].hash) {
        console.log(i + ': ' + newDrinks[indexHash].hash[i]);
    }
}

function del() {
    let value = prompt("Введите название напитка:"),
        indexHash = findEqual(namesDrinks, value);

    namesDrinks.splice(namesDrinks.indexOf(indexHash), 1);
    newDrinks.splice(newDrinks.indexOf(indexHash), 1);
}

function drinksAll() {
    alert(namesDrinks);
}