const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("A");
  }, 2000);
}); // 2

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("B");
  }, 1000);
}); // 1

const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("C");
  }, 3000);
}); //3

const p = Promise.all([p1, p2, p3]);

p.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log(e);
});

// all has to resolve to get data in an array  if any fails you get an error
