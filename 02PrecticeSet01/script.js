// Question no 1 and 2 here

/*
let marks = {
    A: 10,
    B: 70,
    C: 30,
    D: 40,
    E: 50,
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(Object.keys(marks))
    console.log(`The Marks of ${Object.keys(marks)[i]} are ${marks[Object.keys(marks)[i]]}`);
}

for (let key in marks) {
    console.log(`The key: ${key}, & Numbers: ${marks[key]}`);
}
*/

// Question no 3 here
/*
let no = 23;
let usernum;
while (usernum != no) {
  usernum = +prompt("Put a Number until you put the Right One:");
  if (usernum != no) {
    console.log("try again");
  }
}
console.log("You did it");
*/


// Question no 4 here 
const mean = (a, b, c, d)=> {
    return (a + b + c + d) / 4
}

console.log(mean(1, 2, 3, 4));