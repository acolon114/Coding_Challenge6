//Task 1: Create an Employees Array of Employee Objects
const employees = [ // Main employee array
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }]},
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }]},
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }]},
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }]}
];

// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employeeObject) {
    console.log("Employee: " + employeeObject.name) //Outputs: Employee: (and employee name)
    employeeObject.shifts.forEach(element => {
        console.log("   Works " + element['day'] + " for " + element['hours'] + " hours."); // Outputs: Day worked and number of hours
    });
 }
// Each line below runs though the function above
displayEmployeeShifts(employees[0]);
displayEmployeeShifts(employees[1]);
displayEmployeeShifts(employees[2]);
displayEmployeeShifts(employees[3]);