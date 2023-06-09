// First Step: Create Constructor Function

let Employees = [];
let secEle = document.getElementById('secTag');

let formEle = document.getElementById('formEle');
// let tableEle=document.getElementById("table");

function Employee(employeeID, fullName, department, level, imageURL) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = 0;
  Employees.push(this);
}

// Fourth Step: Create a Render Prototype Function To Render Each Employee Name With Their Salary

// Render Method to render the data in the browser
Employee.prototype.employeeRender = function () {
  // Update the employeeRender function by Dom Manipulation

  let divEle = document.createElement('div');
  divEle.id = 'divElement';
  secEle.appendChild(divEle);

  let imgEle = document.createElement('img');
  imgEle.src = this.imageURL;
  divEle.appendChild(imgEle);

  let h3Ele = document.createElement('h3');
  h3Ele.textContent = `Employee Name: ${this.fullName} - ID: ${this.employeeID}
    Department:  ${this.department} -  Level:  ${this.level}
    ${this.salary}`;

  divEle.appendChild(h3Ele);
};

function generateIDNumber(min, max) {
  let newId = Math.floor(Math.random() * (max - min + 1) + min);
  return newId;
}

// Third Step: Create a Prototype Function For Calculating The Salary Based On Employee Level

Employee.prototype.generateRandomSalary = function () {
  let min, max;

  switch (this.level) {
    case 'Junior':
      min = 500;
      max = 1000;
      break;

    case 'Mid-Senior':
      min = 1000;
      max = 1500;
      break;

    case 'Senior':
      min = 1500;
      max = 2000;
      break;
  }

  var randomSalary = Math.floor(Math.random() * (max - min)) + min;
  var taxPercent = 7.5;
  var taxAmount = (randomSalary * taxPercent) / 100;
  this.salary = randomSalary - taxAmount;
  // Math.floor removes fractions and round the number to the lowest value.
};

// Second Step: Create New Objects (creating instances of the Employee constructor) // theses called hard copy data

let employeeOne = new Employee(
  1000,
  'Ghazi Samer',
  'Administration',
  'Senior',
  './assests/Ghazi.jpg'
);
employeeOne.generateRandomSalary(); // To calculate salary for each employee and will keep changing
let employeeTwo = new Employee(
  1001,
  'Lana Ali',
  'Finance',
  'Senior',
  'assests/Lana.jpg'
);
employeeTwo.generateRandomSalary();
let employeeThree = new Employee(
  1002,
  'Tamara Ayoub',
  'Marketing',
  'Senior',
  'assests/Tamara.jpg'
);
employeeThree.generateRandomSalary();

let employeeFour = new Employee(
  1003,
  'Safi Walid',
  'Administration',
  'Mid-Senior',
  'assests/Safi.jpg'
);
employeeFour.generateRandomSalary();

let employeeFive = new Employee(
  1004,
  'Omar Zaid',
  'Development',
  'Senior',
  'assests/Omar.jpg'
);
employeeFive.generateRandomSalary();

let employeeSix = new Employee(
  1005,
  'Rana Saleh',
  'Development',
  'Junior',
  'assests/Rana.jpg'
);
employeeSix.generateRandomSalary();
let employeeSeven = new Employee(
  1006,
  'Hadi Ahmad',
  'Finance',
  'Mid-Senior',
  'assests/Hadi.jpg'
);
employeeSeven.generateRandomSalary();

formEle.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();

  let department = event.target.department.value;
  let level = event.target.level.value;
  let fullName = event.target.fullName.value;
  let img = event.target.img.value;
  let id = generateIDNumber(1000, 9000);

  console.log(fullName);
  console.log(department);
  console.log(level);
  console.log(img);
  console.log(id);

  // Employee(employeeID, fullName, department, level, imageURL)
  let newEmployee = new Employee(id, fullName, department, level, img);
  newEmployee.generateRandomSalary(); // to generate a random salary for the new employee
  newEmployee.employeeRender();
  console.log('array after submit event', Employees);
  saveData(Employees);
}

console.log('before saving in the LS', Employees);

// console.log(employeeOne);
// console.log(employeeTwo);
// console.log(Employees);

function saveData(data) {
  let stringArr = JSON.stringify(data); // array of stings
  localStorage.setItem('employees', stringArr);
}

function getData() {
  let retrievedArr = localStorage.getItem('employees'); // array of strings
  console.log('data is coming from LS as strings', retrievedArr);

  let objArr = JSON.parse(retrievedArr); // array of objects
  console.log('data is coming from LS as objects', objArr);

  //(employeeID, fullName, department, level, imageURL) should be arranged as the constructor

  if (objArr != null) {
    for (let i = 7; i < objArr.length; i++) {
      //iterating through objArr array that is coming from LS and starting from the new object index ; create new instance // if we comment the instances we need to set i=0
      let newStaff = new Employee(
        objArr[i].employeeID,
        objArr[i].fullName,
        objArr[i].department,
        objArr[i].level,
        objArr[i].imageURL
      );
      newStaff.salary = objArr[i].salary; // for new input to take the salary from the LS and not changing it
    }
  }

  renderAll();
}
getData();

function renderAll() {
  for (let i = 0; i < Employees.length; i++) {
    // Employees[i].generateRandomSalary();
    Employees[i].employeeRender();
  }
}
