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


const createPlayer = (name, hp, mp, items) => {
    return {
        name, hp, mp, items
    }
}

const player1 = createPlayer("John", 59, 20, ["Bettel Ship", "Blaster", "Gun"])
const player2 = createPlayer("HanSolo", 90, 34, ["Bettel Jet", "Blaster", "Metchen Gun"])
player1.hp = 70;
console.log(player1)

console.log(player2)
