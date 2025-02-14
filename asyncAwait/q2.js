console.log("A");

const getData = async () => {
  console.log("B");
  throw "C";
  console.log("D");
};

console.log("E");

getData()
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });
console.log("F");
