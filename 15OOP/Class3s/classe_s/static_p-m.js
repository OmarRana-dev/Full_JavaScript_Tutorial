// class User {
//     static id = 1; // static properties 

//     constructor(name, age, income) {
//         this.name = name;
//         this.age = age;
//         this.income = income;
//         this.id = User.id++
//     }

//     //static methods
//     static compareByAge(user1, user2) {
//         return user1.age - user2.age
//     }

//     static compareByIncome(user1, user2) {
//         return user1.income - user2.income
//     }
// }

// const user1 = new User("Nadir", 24, 50000)
// const user2 = new User("Jazze", 18, 95000)
// const user3 = new User("Rafi", 50, 86000)
// // what if i want to give id to every user by number
// console.log(User.id) // you only abel to access static properties and methods with Class it self.

// const users = [user1, user2, user3]
// users.sort(User.compareByAge)
// console.log(users)
// users.sort(User.compareByIncome)
// console.log(users)



// // Static methods and fields
// // The static keyword defines a static method or field for a class.Static properties(fields and methods) are defined on the class itself instead of each instance.Static methods are often used to create utility functions for an application, whereas static fields are useful for caches, fixed - configuration, or any other data that doesn't need to be replicated across instances.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
// p1.displayName; // undefined
// p1.distance; // undefined
// p2.displayName; // undefined
// p2.distance; // undefined

// console.log(Point.displayName); // "Point"
// console.log(Point.distance(p1, p2)); // 7.0710678118654755