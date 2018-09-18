class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.friends = [];
        this.marry = "";
    }

    grow(age) {
        this.age = age;
    }

    setFriend(other) {
        if (this.friends.indexOf(other) == -1) {
            this.friends.push(other);
        }
    }

    hasFriend(other) {
        return this.friends.includes(other);
    }

    checkMarry(type) {
        if (type === 'M+M') {
            return this.marry = 'Women != Women';
        }
        else {
            return this.marry = 'Man != Man';
        }
    }

    setMarry(marryMan, marryWoman, type) {
        if (type === 'M+W') {
            type = true;
        }
        else {
            type = false;
        }
        type ?
            ( marryMan.setMarryMan(marryMan.getNameMan()),
                marryWoman.setMarryWomen(marryWoman.getNameWoman())) :
            this.checkMarry(type);
    }

    isMarry(marryMan, marryWoman) {
        console.log(marryMan.getMarry() + marryWoman.getMarry());
    }

    sayHello() { // Метод класса
        console.log(
            `hi, my name's ${this.name}, ${this.age} years`);
    }

    getMarry() {
        return this.marry;
    }
}

const ivan = new Person("Ivan");
const anna = new Person("Anna");

ivan.grow(20);
ivan.sayHello("Ivan");
ivan.setFriend(anna);
console.log(ivan.hasFriend(anna));

anna.grow(18);
anna.sayHello("Ivan");
anna.setFriend(ivan);
console.log(anna.hasFriend(ivan));

/* ___________
 MacBookPro15Retina:test StasGordynets$ node test.js
 hi, my name's Ivan, 20 years
 true
 hi, my name's Anna, 18 years
 true
 MacBookPro15Retina:test StasGordynets$
 ___________ */


class Man extends Person {
    constructor(name) {
        console.log(name);
        super(name);

    }

    getNameMan() {
        return this.name;
    }

    setMarryMan(marry) {
        this.marry = marry;
    }
}

class Woman extends Person {
    constructor(name) {
        super(name);
    }

    getNameWoman() {
        return this.name;
    }


    setMarryWomen(marry) {
        this.marry = marry;
    }

}

var petr = new Man("Petia");
var vika = new Woman("Vika");

petr.setMarry(petr, vika, "M+W");

petr.isMarry(petr, vika);
vika.isMarry(petr, vika);

/*
При petr.setMarry(petr, vika, "M+M");
выведет вот это:
 Man != Man
 Man != Man

 При petr.setMarry(petr, vika, "M+W");
 PetiaVika
 PetiaVika
* */