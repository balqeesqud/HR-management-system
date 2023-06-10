
// const Employees=[]; 
// function Employee (employeeID, fullName, department, level, imageURL){
// this.employeeID= employeeID;
// this.fullName=fullName;
// this.department=department;
// this.level=level;
// this.imageURL=imageURL;
// this.salary=0;
// Employees.push(this);

// }

// let employeeOne=new Employee(1000, "Ghazi Samer", "Administration", "Senior","https://example.com/image1.jpg");
// let employeeTwo=new Employee(1001,"Lana Ali", 	"Finance", 	"Senior", "https://example.com/image2.jpg");
// let employeeThree=new Employee(1002,"Tamara Ayoub", "Marketing" ,"Senior", "https://example.com/image3.jpg");
// let employeeFour=new Employee (1003, "Safi Walid","Administration", "Mid-Senior",  "https://example.com/image4.jpg" );
// let employeeFive=new Employee  (1004,  "Omar Zaid",  "Development",  "Senior",  "https://example.com/image5.jpg");
// let employeeSix=new Employee  (1005,  "Rana Saleh",  "Development",  "Junior",  "https://example.com/image6.jpg");
// let employeeSeven=new Employee  (1006,  "Hadi Ahmad",  "Finance",  "Mid-Senior",  "https://example.com/image7.jpg");



// console.log(employeeOne); 
// console.log(employeeTwo);
// console.log(Employees);


// Employee.prototype.generateRandomSalary= function(){
 
// var min,max;

//  switch(this.level){
//   case "Junior" :
//     min=500;
//     max=1000;
//     break;

//    case "Mid-Senior":
//     min=1000;
//     max=1500;
//     break;
    
//    case "Senior":
//     min=1500;
//     max=2000; 
//     break;
//  }
//  var randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
//  var taxPercent = 7.5;
//  this.salary = randomSalary - (randomSalary * (taxPercent / 100));

// }; 


//  Employee.prototype.employeeRender= function() {
//   document.write(`<h5> Salary Is: ${this.salary}</h5>`);
//   document.write(`<h4> Employee Name Is: ${this.fullName}</h4>`); 
 
//  }


// for (let i=0; i < Employees.length; i++ ) {
//   Employees[i].employeeRender();
//   Employees[i].generateRandomSalary();
// }

// First Step: Create Constructor Function 

const Employees = [];
function Employee(employeeID, fullName, department, level, imageURL) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = 0;
  Employees.push(this);
}

// Second Step: Create New Objects

let employeeOne = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://www.com/employeeimage1.jpg");
let employeeTwo = new Employee(1001, "Lana Ali", "Finance", "Senior", "https://www.com/employeeworkimage2.jpg");
let employeeThree = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://www.com/HRimage3.jpg");
let employeeFour = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://www.com/employeeimage1.jpg");
let employeeFive = new Employee(1004, "Omar Zaid", "Development", "Senior", "https://www.com/employeeworkimage2.jpg");
let employeeSix = new Employee(1005, "Rana Saleh", "Development", "Junior", "https://www.com/image6.jpg");
let employeeSeven = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://www.com/image7.jpg");

console.log(employeeOne);
console.log(employeeTwo);
console.log(Employees);

// Third Step: Create a Prototype Function For Calculating The Salary Based On Employee Level

Employee.prototype.generateRandomSalary = function () {
  let min, max;

  switch (this.level) {
    case "Junior":
      min = 500;
      max = 1000;
      break;

    case "Mid-Senior":
      min = 1000;
      max = 1500;
      break;

    case "Senior":
      min = 1500;
      max = 2000;
      break;
  }

  var randomSalary = Math.floor(Math.random() * (max - min)) + min;
  var taxPercent = 7.5;
  var taxAmount = (randomSalary * taxPercent) / 100;
  this.salary = randomSalary - taxAmount;
 
};

// Fourth Step: Create a Render Prototype Function To Render Each Employee Name With Their Salary  

Employee.prototype.employeeRender = function () {
  document.write(`<h5>Salary Is: ${this.salary}</h5>`);
  document.write(`<h4>Employee Name Is: ${this.fullName}</h4>`);

};

for (let i = 0; i < Employees.length; i++) {
  Employees[i].generateRandomSalary();
  Employees[i].employeeRender();

}