console.log("A");

setTimeout(() => {
  console.log("B");
}, 200);

setTimeout(() => {
  console.log("C");
}, 100);

console.log("D");

setTimeout(() => {
  console.log("E");
}, 0);
console.log("F");
