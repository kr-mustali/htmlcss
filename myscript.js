function myFunction() {
    document.getElementById("test").innerHTML = "Paragraph changed.";
  }
function sumCal(){

let x, y, z;  
x = 4;        
y = 5;        
z = x + y;    

document.getElementById("sum").innerHTML =z;  

} 

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

    //length
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo").innerHTML = text.length;
    //charAt
    var text1 = "HELLO WORLD";
    document.getElementById("demo1").innerHTML = text.charAt(0);
    //slice
    let text2 = "Apple, Banana, Kiwi";
    let part = text.slice(7,13);
    document.getElementById("demo2").innerHTML = part;
    //template
    let header = "Template Strings";
    let tags = ["template strings", "javascript", "es6"];

    let html = `<h2>${header}</h2><ul>`;

    for (const x of tags) {
        html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    document.getElementById("demo3").innerHTML = html;

    //toString
    let x = 123;
document.getElementById("demo4").innerHTML =
  x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();

   //toExponential
   let x1 = 9.656;
document.getElementById("demo5").innerHTML =
  x1.toExponential() + "<br>" + 
  x1.toExponential(2) + "<br>" + 
  x1.toExponential(4) + "<br>" + 
  x1.toExponential(6);