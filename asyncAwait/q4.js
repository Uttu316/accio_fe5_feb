const api = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Oops");
    }, 2000);
  });
};

const getData = async () => {
  try {
    const data = await api();
    console.log(data);
  } catch (e) {
    console.log("Error", e);
  }
};

getData();

// use try and catch while using await keyword
