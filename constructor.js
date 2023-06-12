
// First Step: Create Constructor Function 

const Employees = [];
let secEle= document.getElementById("secTag");  

console.log(secEle); 

let formEle= document.getElementById("formEle");
console.log(formEle); 

function Employee(employeeID, fullName, department, level, imageURL) {
  this.employeeID = employeeID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = 0;
  Employees.push(this);
}


// Render Method to render the data in the browser 
Employee.prototype.employeeRender = function () {
  // document.write(`<h5>Salary Is: ${this.salary}</h5>`);
  // document.write(`<h4>Employee Name Is: ${this.fullName}</h4>`);

   // Update the employeeRender function by Dom Manipulation 

   let imgEle = document.createElement("img");
   imgEle.src = this.imageURL;
   imgEle.style.backgroundColor="yellow";
   imgEle.height= 300;

  secEle.appendChild(imgEle);
  
  
  
   

   let h3Ele = document.createElement("h3");
    h3Ele.textContent = `Employee Name: ${this.fullName} - ID: ${this.employeeID}
     Department:  ${this.department} -  Level:  ${this.level }
     ${ this.salary}`

    secEle.appendChild(h3Ele);  //
   


   
    
   

}


function generateIDNumber(min,max){
  let newId= Math.floor(Math.random() * (max - min + 1) + min)
  return newId;
 
}



// Second Step: Create New Objects (creating instances of the Employee constructor)

let employeeOne = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assests/Ghazi.jpg");
let employeeTwo = new Employee(1001, "Lana Ali", "Finance", "Senior", "assests/Lana.jpg");
let employeeThree = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "assests/Tamara.jpg" );
let employeeFour = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "assests/Safi.jpg" );
let employeeFive = new Employee(1004, "Omar Zaid", "Development", "Senior", "assests/Omar.jpg");
let employeeSix = new Employee(1005, "Rana Saleh", "Development", "Junior", "assests/Rana.jpg");
let employeeSeven = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior","assests/Hadi.jpg" );


formEle.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault(); 

  let department=event.target.department.value;
  let level=event.target.level.value;
  let fullName=event.target.fullName.value;
  let img = event.target.img.value;
  let id= generateIDNumber(1000,9000); 
 


  console.log(fullName);
  console.log(department); 
  console.log(level);
  console.log(img);
  console.log(id); 
  

  let newEmployee= new Employee(id,fullName, department,level, img);
  newEmployee.employeeRender(); 
}
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
 // Math.floor removes fractions and round the number to the lowest value. 
};

// Fourth Step: Create a Render Prototype Function To Render Each Employee Name With Their Salary  




for (let i = 0; i < Employees.length; i++) {
  Employees[i].generateRandomSalary();
  Employees[i].employeeRender();


}