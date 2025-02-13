const p = new Promise((resolve, reject) => {
  const input = parseInt(prompt("Enter a number"));
  if (input % 2 === 0) {
    resolve("Even");
  } else {
    reject("Odd");
  }
});

console.log("Hello");

p.then((ans) => {
  console.log(ans);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Done");
  });
console.log("Close");
