// class User {
//     constructor(username) {
//         this.username = username;
//     }

//     get password() {
//         return `${this._password}@ksdi.i`.toUpperCase()
//     }

//     set password(value) {
//         this._password = value
//     }
// }

// const user1 = new User("Raza")
// console.log(user1.password)


// // properties based getters and setters

// function User(email) {
//     this._email = email;

//     Object.defineProperty(this, "email", {
//         get: function () {
//             return this._email.toUpperCase()
//         },
//         set: function (value) {
//             this._email = value
//         }
//     })
// }

// const raza = new User("Raza@gmail.com");
// console.log(raza.email)


// Object based getter and setter

const User = {
    _email: "hsd@g.com",
    _password: "234klsd4",


    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

console.log(User.email )

const obj1 = Object.create(User)
console.log(obj1.email)