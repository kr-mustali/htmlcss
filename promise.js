//promise

let p = new Promise((resolve, reject) => {
  let x = 1 + 3;

  if (x == 2) resolve("Success");
  else reject("Fail");
});

p.then((msg) => {
  console.log("This is in then " + msg);
}).catch((msg) => {
  console.log("THis is in the catch " + msg);
});

//async/await

async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("Hello !!");
  });
  console.log(await myPromise);
}

myDisplay();

//promise.all

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  //   setTimeout(resolve, 10000, 'foo');
  let x = 2;
  if (x == 2) resolve("It is Done");
  else reject("Not Done");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
const x = 10;
