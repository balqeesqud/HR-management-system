let tableEle = document.getElementById('table');

function getData() {
  let retrievedData = localStorage.getItem('employees');
  let employeesD = JSON.parse(retrievedData);

  let departmentInfo = {};

  employeesD.forEach((employee) => {
    let department = employee.department;
    console.log('Department:', department);

    if (departmentInfo.hasOwnProperty(department)) {
      departmentInfo[department].count++;
      departmentInfo[department].totalSalary += employee.salary;
    } else {
      departmentInfo[department] = {
        count: 1,
        totalSalary: employee.salary,
      };
    }
    console.log('Employee:', employee);
  });
  console.log('Department Data:', departmentInfo);

  // Populate department data
  for (let department in departmentInfo) {
    let countCell = document.getElementById(`${department}Employee`);
    countCell.textContent = departmentInfo[department].count;
    let salaryCell = document.getElementById(`${department}Salary`);
    salaryCell.textContent = departmentInfo[department].totalSalary.toFixed(2);
    let averageCell = document.getElementById(`${department}Average`);
    averageCell.textContent = (
      departmentInfo[department].totalSalary / departmentInfo[department].count
    ).toFixed(2);
  }

  // Calculate total employee count, total salary, and average salary
  let totalEmployeesCell = document.getElementById('totalNumber');
  totalEmployeesCell.textContent = employeesD.length;

  let totalSalaryCell = document.getElementById('totalSalary');
  let totalSalary = employeesD
    .reduce((total, employee) => total + employee.salary, 0)
    .toFixed(2);
  totalSalaryCell.textContent = totalSalary;

  let averageSalaryCell = document.getElementById('avgSal');
  let averageSalary = (totalSalary / employeesD.length).toFixed(2);
  averageSalaryCell.textContent = averageSalary;
}

getData();
