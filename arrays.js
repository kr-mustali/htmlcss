const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

//looping array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("loop").innerHTML = text;

function myFunction() {
    fruits.push("Lemon");
    document.getElementById("loop").innerHTML = fruits;
  }
//assosiative array
  const person = [];
  person[0] = "John";
  person[1] = "Doe";
  person[2] = 46; 
  document.getElementById("assoarray").innerHTML =
  person[0] + " " + person.length;  

  document.getElementById("typeof").innerHTML = typeof fruits;
  let size = fruits.length;
  console.log(size);
  console.log(fruits.join(" * "));
  console.log(fruits);
  fruits.pop(); 
  console.log("After Pop : "+fruits);
  fruits.push("Kiwi");
  console.log("After Push : "+fruits);
  fruits.shift(); 
  console.log("After Shift : "+fruits);
  fruits.unshift("Lemon");
  console.log("After UnShift : "+fruits);
  //meerging array
  const myGirls = ["Cecilie", "Lone"];
  const myBoys = ["Emil", "Tobias", "Linus"];
  
  const myChildren = myGirls.concat(myBoys);
  console.log(myChildren);
//   fruits.copyWithin(2, 0); 
//   console.log("After Copywithin : "+fruits);
//flatning an array
  const myArr = [[1,2],[3,4],[5,6]];
  console.log("Before flat :");
  console.log(myArr);

const newArr = myArr.flat();
console.log("After flat : ");
console.log(newArr);
// console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));
// console.log(fruits);

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

console.log("First number over 18 is " + first);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(fruits.sort());

const points = [40, 100, 1, 5, 25, 10];
console.log(points);  
console.log(points.sort(function(a, b){return a - b}));  

console.log("Array Iteration Methods : ");
//Iterations
const num = [45, 4, 9, 16, 25];

//using forEach
let txt = "";
num.forEach(forFunction);
console.log("Using forEach : "+txt);
function forFunction(value) {
  txt += value + " ";
}

//using map
const numbers2 = num.map(mapFunction);
console.log("Using map function : "+numbers2);
function mapFunction(value, index, array) {
  return value;
}

//using flatMap
const newFlatArr = num.flatMap((x) => x * 2);
console.log("Using flatMap function : "+ newFlatArr);

//using filter
const over18 = num.filter(myFilter);
console.log("Using filter function  from elements with a value larger than 18 : "+ over18);
function myFilter(value) {
  return value > 18;
} 

//using reduce 
let sum = num.reduce(myReduce);
console.log("The Sum is: "+ sum);
function myReduce(total, value) {
  return total + value;
} 

//spread operator
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
