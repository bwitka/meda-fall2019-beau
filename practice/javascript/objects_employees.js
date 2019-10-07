let employees = []; // array holding all of our employees.

let employee1 = {
  firstName: "Beau",
  lastName: "Witka",
  age: 41,
  salary: 12000,
  location: "San Francisco",
  startDate: "June 2019"
};

let employee2 = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
  salary: 120000,
  location: "New York City",
  startDate: "September 2014"
};

let employee3 = {
  firstName: "Jane",
  lastName: "Dobenger",
  age: 56,
  salary: 87000,
  location: "Chicago",
  startDate: "January 1999"
};

// push employees to array:

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);

// Only use employees array to update info in objects:
employees[2]["location"] = "Los Angeles";
employees[0].startDate = "August 2019";

console.log(employees);
