var a = 2;

function abc(x) {
  const p = x + a;

  const ans = xyz(sum, p);
  return ans;
}
function xyz(callback, v) {
  const b = 3;
  const out = callback(v, b);
  return out;
}
function sum(x, y) {
  return x + y;
}

const output = abc(4);
console.log(output);
