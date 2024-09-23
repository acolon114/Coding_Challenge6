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

//Task 3: Create a Function to Assign a New Shift
function assignShift(employeeName, day, hour) {
    const selectedEmployee = employees.find(employee => employee.name === employeeName);

    if (!selectedEmployee) {
        console.log("Selected employee not found."); 
        return;
    }

    const shiftExists = selectedEmployee.shifts.find(shift => shift.day === day);
    if (shiftExists) {
        console.log("Employee already works on this day.")
        return;
    }

    newShift = {day: day, hours: hour};
    selectedEmployee.shifts.push(newShift);
    console.log(employeeName + " was assigned a shift on: " + day + " for " + hour + " hours.");
}

assignShift('Palmer', 'Friday', 5); // Output: Selected employee not found
assignShift('David', 'Monday', 5); // Output: Employee already works on this day
assignShift('Emily', 'Monday', 5); // Output: Emily was assigned a shift on : Monday for 5 hours

//Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName) {
    const selectedEmployee = employees.find(employee => employee.name === employeeName);
    let totalHours = 0;

    selectedEmployee.shifts.forEach(element => {
        totalHours += element['hours'];
    });

    return totalHours;
}

console.log(calculateTotalHours('John')); // Output: 14
console.log(calculateTotalHours('Sara')); // Output: 12
console.log(calculateTotalHours('David')); // Output: 8
console.log(calculateTotalHours('Emily')); // Output: 13

//Task 5: Create a Function to List Employees with Free Days
function listAvailableEmployees(selectedDay) {
    employees.forEach(employee => {
        const hasShift = employee.shifts.some(shift => shift.day === selectedDay);

        if (!hasShift) {
            console.log(employee.name + " is available on " + selectedDay + ".");
        }
    })
}

listAvailableEmployees('Monday'); // Sara
listAvailableEmployees('Tuesday'); // John, David, Emily
listAvailableEmployees('Wednesday'); // Sara, David, Emily
listAvailableEmployees('Thursday'); // John, David, Emily
listAvailableEmployees('Friday'); //John, Sara, David
listAvailableEmployees('Saturday'); // John, Sara, David, Emily
listAvailableEmployees('Sunday'); // John, Sara, David, Emily