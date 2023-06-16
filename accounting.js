
let tableEle= document.getElementById("table");


function getData() {
  let retrievedData = localStorage.getItem('employees');
  let employeesD = JSON.parse(retrievedData);

  let departmentData = {};

  employeesD.forEach(employee => {
    let department = employee.department; // after dot as it named in local storage(employee.department)
    console.log("Department:", department);

    if (departmentData.hasOwnProperty(department)) {
      departmentData[department].count++;
      departmentData[department].totalSalary += employee.salary;
    } else {
      departmentData[department] = {
        count: 1,
        totalSalary: employee.salary
      };
    }
    console.log("Employee:", employee);
  });
  console.log("Department Data:", departmentData);


  // Populate department data
  for (let department in departmentData) {
    let countCell = document.getElementById(`${department}Cell`);
    countCell.textContent = departmentData[department].count;
    let salaryCell = document.getElementById(`${department}Salary`);
    salaryCell.textContent = departmentData[department].totalSalary;
    let averageCell = document.getElementById(`${department}Average`);
    averageCell.textContent =
      departmentData[department].totalSalary / departmentData[department].count;
  }

  // Calculate total employee count, total salary, and average salary
  let totalEmployeesCell = document.getElementById("totalNumber");
  totalEmployeesCell.textContent = employeesD.length;

  let totalSalaryCell = document.getElementById("totalSalary");
  let totalSalary = employeesD.reduce((total, employee) => 
  total + employee.salary, 0);

  totalSalaryCell.textContent = totalSalary;

  let averageSalaryCell = document.getElementById("avgSal");
  let averageSalary = totalSalary / employeesD.length;
  averageSalaryCell.textContent = averageSalary;
}

getData();










