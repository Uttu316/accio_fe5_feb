// write a polyfill for Array.prototype.forEach

/*
 1) add forEach in prototype of Array
 2) assign a function to this property and take callback fn as argument
 3) access array using this
 4) loop the array till its length
 5) invoke the callback fn and pass the array[i],i,array on each iteration
*/

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
      if (typeof callback === "function") {
        callback(arr[i], i, arr);
      } else {
        throw new Error("callback is not a function");
      }
    }
  };
}

const arr = [2, 3, 4, 4, 5];

arr.forEach((item, index, curr) => {
  console.log(item, index, curr);
});
