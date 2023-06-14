function renderTableBody() {
  // Get a reference to the table body element
  let tableBody = document.getElementById("table-body");

  // Clear the table body before rendering
  tableBody.innerHTML = "";

  // Loop through each department
  for (let i = 0; i < Employees.length; i++) {
    let department = Employees[i].department;
    let employeesInDepartment = Employees.filter(
      (employee) => employee.department === department
    );

    // Calculate total salary and average salary for the department
    let totalSalary = 0;
    for (let j = 0; j < employeesInDepartment.length; j++) {
      totalSalary += employeesInDepartment[j].salary;
    }
    let averageSalary = totalSalary / employeesInDepartment.length;

    //Create a new row element
    let row = document.createElement("tr");

    // Create and append table cells with department data
    let departmentCell = document.createElement("td");
    departmentCell.textContent = department;
    row.appendChild(departmentCell);

    let numOfEmployeesCell = document.createElement("td");
    numOfEmployeesCell.textContent = employeesInDepartment.length;
    row.appendChild(numOfEmployeesCell);

    let averageSalaryCell = document.createElement("td");
    averageSalaryCell.textContent = averageSalary;
    row.appendChild(averageSalaryCell);

    let totalSalaryCell = document.createElement("td");
    totalSalaryCell.textContent = totalSalary;
    row.appendChild(totalSalaryCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  }
}

function renderTableFooter() {
  // Get references to the footer cells
  let totalNumberCell = document.getElementById("totalNumber");
  let totalSalaryCell = document.getElementById("totalSalary");
  let avgSalCell = document.getElementById("avgSal");

  // Calculate total number of employees
  let totalEmployees = Employees.length;

  // Calculate total salary and average salary for all departments
  let totalSalary = 0;
  for (let i = 0; i < Employees.length; i++) {
    totalSalary += Employees[i].salary;
  }
  let averageSalary = totalSalary / Employees.length;

  // Set the text content of the footer cells
  totalNumberCell.textContent = "Total number of employees: " + totalEmployees;
  totalSalaryCell.textContent = "Total salary for all departments: " + totalSalary;
  avgSalCell.textContent = "Average salary for all departments: " + averageSalary;
}

// Call the functions to generate the table body and footer
renderTableBody();
renderTableFooter();


///////////////////////////////////////
// 

