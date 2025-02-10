const arr = [];

Array.prototype.at = function (index) {
  let array = this;

  if (Array.isArray(array) && array.length) {
    let pos = index || 0;
    return array[pos];
  }
};

let ans = arr.at(1);

console.log(ans);
