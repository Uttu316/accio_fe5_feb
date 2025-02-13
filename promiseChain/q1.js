const p = new Promise((res) => {
  res(2);
});

const newP = p.then((value) => {
  return value + 2;
});

newP
  .then((val) => {
    console.log(val);
    return val * 2;
  })
  .then((val) => {
    console.log(val);
  });
