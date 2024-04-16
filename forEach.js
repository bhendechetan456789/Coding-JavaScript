const students = [
    { name: "Alice", grades: [80, 75, 90] },
    { name: "Bob", grades: [85, 90, 88] },
    { name: "John", grades: [78, 72, 80] },
    { name: "Krish", grades: [95, 70, 68] },  
];
const task1Div = document.getElementById("task1");

students.forEach(student => {
    const sumOfGrades = student.grades.reduce((total, grade) => total + grade, 0);
    const averageGrade = sumOfGrades / student.grades.length;
    student.averageGrade = averageGrade;
});

console.log(students);
