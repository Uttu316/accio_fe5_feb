if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      //   callback(this[i], i, this);
      callback.call(thisArg, this[i], i, this); //
    }
  };
}
const arr = [2, 3, 4, 4, 5];
arr.forEach((item, index, array) => {
  console.log("Item:", item);
});

const myObj = { prefix: "Value: " };

arr.forEach(function (item) {
  console.log(this); //window, myobj
}, myObj);
