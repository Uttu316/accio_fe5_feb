const getData = async () => {
  return 2; // resolved promise
  throw 2; // rejected promise
};

getData()
  .then((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log("Error", er);
  });
