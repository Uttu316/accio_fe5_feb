// write a polyfill for Array.prototype.map

/*
 1) add map in prototype of Array
 2) assign a function to this property and take callback fn as argument
 3) access array using this & create a output array
 4) loop the array till its length
 5) invoke the callback fn and pass the array[i],i,array on each iteration
 6) store the return value of invoked callback fn in output array
 7) after the loop return the output array
*/

if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    const arr = this;
    let output = [];

    for (let i = 0; i < arr.length; i++) {
      let res;
      try {
        res = callback(arr[i], i, arr);
      } catch (e) {
        res = e;
      }
      output.push(res);
    }
    return output;
  };
}

let arr = ["A", "B", "C"];
let output = arr.map((i) => {
  let o;
  try {
    if (i == "B") {
      throw "hello";
    }
    o = i + 1;
  } catch (e) {
    o = e;
  }
  return o;
});
console.log(output);
