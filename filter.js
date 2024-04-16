const employees = [
    { name: "Alice", department: "Engineering", salary: 60000 },
    { name: "Bob", department: "Marketing", salary: 55000 },
    { name: "Krish", department: "Engineering", salary: 52000 },
    { name: "David", department: "Engineering", salary: 48000 }
];

function filterEmployeesByDepartmentAndSalary(employees) {
    return employees.filter(employee => employee.department === "Engineering" && employee.salary > 50000);
}

const filteredEmployees = filterEmployeesByDepartmentAndSalary(employees);

console.log(filteredEmployees);