const d = new Date("2022-03-25");
document.getElementById("demo").innerHTML = d;

const d1 = new Date(2018, 11, 24, 10, 33, 30);
console.log(d1);
console.log(d.toDateString());
console.log(d.toUTCString());
const msec = Date.parse("March 21, 2012");
console.log(msec);
console.log(d.getFullYear());
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[d.getMonth()]);
