function Student(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.grades = []; // масив з оцінками
    //this.attendance = new Array(25); // відвідуваність <= 25 елементів
    this.attendance = []; // відвідуваність <= 25 елементів

    this.getAge = function () { // вік студента
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        console.log(`Name: ${this.firstName}\nLast Name: ${this.firstName}\nAge: ${currentYear - this.yearOfBirth}`);
    };

    this.averageGrade = function (grade) { //середній бал
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
        }
        else {
            console.log("Число 0 - 100")
        }
        this.present();
    };

    this.present = function () { // присутствует
        if (this.attendance.length < 25) {
            this.attendance.push(true);
        }
    };

    this.absent = function () { // отсутствует
        if (this.attendance.length < 25) {
            this.attendance.push(false);
        }
    };

    this.summary = function () {
        debugger;
        const averageRating = this.grades.length ? this.grades.reduce((a, b) => a + b, 0) / this.grades.length : 0;
        const averageAttendance = this.attendance.reduce((a, b) => a + (b ? 1 : 0), 0) / this.attendance.length;
        console.log("averageRating - "+ averageRating);
        console.log("averageAttendance - "+ averageAttendance);
        
        if (averageRating > 90 && averageAttendance > 0.9) {
            console.log("Молодець!");
            console.log("***************************************");
        } else if (averageRating > 90 || averageAttendance > 0.9) {
            console.log("Добре, але можна краще");
        } else {
            console.log("Редиска!");
             console.log("**************************************");
        }
    };
}
const student = new Student("John", "John", 2007);
const student2 = new Student("Alice", "Alice", 2008);
const student3 = new Student("Вася", "Иванов", 2006);
////////////////////////////////////////////////////

student3.getAge();
student3.averageGrade(100);
student3.averageGrade(0);
student3.averageGrade(50);
student3.absent();
student3.present();
student3.present();
student3.summary();

////////////////////////////////////////////////////
student.getAge();
student.averageGrade(100);
student.averageGrade(100);
student.averageGrade(90);
student.absent();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.present();
student.summary();

