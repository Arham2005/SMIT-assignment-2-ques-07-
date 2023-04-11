// let previousStudents = localStorage.getItem("students");
// let students = previousStudents ? JSON.parse(previousStudents) : [];
// function provideStudents() {
//     let std = {
//         Name: prompt("Enter Name"),
//         RollNo: prompt("Enter RollNo."),
//         Teachers: prompt("Enter Teacher's Name"),
//         Course: prompt("Enter YOur Course"),
//     };
//     students.push(std);
//     console.log(students);
//     let stringify = JSON.stringify(students);
//     localStorage.setItem("students", stringify);
// }
// provideStudents();


let prevStudents = localStorage.getItem("students"); // get from LocalStorage
let students1 = prevStudents ? JSON.parse(prevStudents) : [];
function provideStudent() {
  let std = {
    name: prompt("Enter Name"),
    rollNo: +prompt("Enter Roll no"),
    teacher: prompt("Enter Teachers Name"),
    className: prompt("Enter Your Class"),
  };
  students1.push(std);
  console.log(students1);
  let stringify = JSON.stringify(students1); // Convert it to String
  localStorage.setItem("students", stringify); // Save it to LocalStorage
}
provideStudent();