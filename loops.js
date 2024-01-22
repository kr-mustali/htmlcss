//forIn loop
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("forin").innerHTML = txt;

//while
let text = "";
let i = 0;
while (i < 10) {
  text += `The number is ` + i;
  i++;
}
console.log(text);