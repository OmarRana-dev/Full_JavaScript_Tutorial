// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     chageUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const newUser = new User("Raza", "razathigna320@gamil.com", "2345d")

// console.log(newUser)
// console.log(newUser.encryptPassword())
// console.log(newUser.chageUserName())


// // Behind the scene

// function Users(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// Users.prototype.passwordAbc = function () {
//     return `${this.password}abc`
// }

// const newUser2 = new Users("umair", "umairrowda320@gamil.com", "2345d")
// console.log(newUser2)
// console.log(newUser2.passwordAbc())


// Inharitance

// class UserNew {
//     constructor(username) {
//         this.username = username
//     }

//     logMe() {
//         console.log(`UserName is: ${this.username}`)
//     }
// }

// class Teacher extends UserNew {
//     constructor(username, email, password) {
//         super(username)
//         this.email = email;
//         this.password = password;
//     }

//     addCourse() {
//         console.log(`A New course was added by ${this.username}`)
//     }
// }

// const obj = new Teacher("Khizar", "prokhizar@gmail.com", "234ksda3");

// console.log(obj)
// obj.addCourse()
// obj.logMe()


// const obj2 = new UserNew("Khizar Abbas")

// console.log(obj2)
// obj2.logMe()

// console.log(obj instanceof Teacher)
// console.log(obj2 instanceof Teacher)


// Static Propertys

// class UserTwo {
//     constructor(greeting) {
//         this.greeting = greeting;
//     }

//     logMe() {
//         console.log(`Hi there! ${this.greeting}`)
//     }

//     static createId() {
//         return `123`
//     }
// }

// const greet = new UserTwo("Good Morning.")
// console.log(greet)
// console.log(greet.createId())

// class SUV extends Car {
//     constructor(make, model, capacity) {
//         super(make, model);
//         this.capacity = capacity;
//     }

//     displayCapacity() {
//         return `This SUV has a seating capacity of ${this.capacity}.`;
//     }
// }


// const createPlayer = (name, hp, mp, items) => {
//     return {
//         name, hp, mp, items
//     }
// }

// const player1 = createPlayer("John", 59, 20, ["Bettel Ship", "Blaster", "Gun"])
// const player2 = createPlayer("HanSolo", 90, 34, ["Bettel Jet", "Blaster", "Metchen Gun"])
// player1.hp = 70;
// console.log(player1)

// console.log(player2)



// this by Dave Gray Y.T

// class Pizza {
//     curst = "original";
//     #sauce = "traditional";
//     #size;
//     constructor(pizzaType, pizzaSize) {
//         this.#size = pizzaSize;
//     }

//     get Curst() {
//         return this.curst;
//     }
//     set Curst(value) {
//         this.curst = value;
//     }

//     display() {
//         console.log(
//             `here's your ${this.curst} ${this.#sauce} sauce ${this.#size} pizza.`
//         )
//     }
// }

// const myPizza = new Pizza("pepperoni", "xx-larg");
// myPizza.Curst = "Neapolitan";
// console.log(myPizza.Curst);
// console.log(myPizza.sauce)
// myPizza.display()


// (Composition or  Mixins) vs inheritance
class Monster {
    constructor(name) {
        this.name = name;
    }

    attack() {
        console.log(`${this.name} can attacked`)
    }

    walk() {
        console.log(`${this.name} can walked`)
    }
}

class FlyingMonster extends Monster {
    fly() {
        console.log(`${this.name} can flew`)
    }
}

class SwimmingMonster extends Monster {
    swim() {
        console.log(`${this.name} can swim`)
    }
}

const fish = new SwimmingMonster("Fishmoni")
fish.swim()
fish.attack()

const bear = new Monster("bear")
bear.attack()
bear.walk()

