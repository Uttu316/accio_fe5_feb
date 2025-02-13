console.log("A");
const p = new Promise((resolve, reject) => {
  //sync
  console.log("B");
  //async
  setTimeout(() => {
    console.log("C");
    let data = "Hey";
    // resolve(data)
    resolve(data);
    console.log("D");
  }, 2000);
});

console.log("E");
p.then((data) => {
  //onSuccess
  console.log("F", data);
}).catch((e) => {
  //onFailure
  console.log("G", e);
});
console.log("H");
