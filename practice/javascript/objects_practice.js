let myFirstObject = {
  firstKey: "value",
  money: 1000,
  rain: true,
  data4: "cool"
};

// compare the above object to the array below:
let myFirstArray = ["value", 1000, true, "cool"];

// accessing "cool" in object: use key name.
myFirstObject.data4;
myFirstObject["data4"];

// accessing "cool" in array: use index number.
myFirstArray[3];

// updating a value inside an object:
myFirstObject["rain"] = false;

// adding a new key-value pair to an existing object:
myFirstObject["weather"] = "sunny";

console.log(myFirstObject);
console.log(myFirstArray);
