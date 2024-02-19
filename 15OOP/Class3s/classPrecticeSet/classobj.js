class Student {
    constructor(name, major, grades) {
        this.name = name;
        this.major = major;
        this.grades = grades
    }

    addGrade(grade) {
        this.grades.push(grade)
    }

    gpa() {
        let num = 0;
        this.grades.forEach(element => {
            num += element;
        });
        return num / this.grades.length;

    }
}

const eva = new Student("eva", "Arts", [78, 86, 83])
const Uzman = new Student("Uzman", "C.S", [87, 45, 67])
const Khabib = new Student("Khabib", "B.S", [99, 89, 91])
console.log(eva)
console.log(eva.gpa())
console.log(Uzman.gpa())
console.log(Khabib.gpa())