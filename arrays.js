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


