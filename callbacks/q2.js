function getUser(onSuccess, onFailure) {
  setTimeout(() => {
    const user = { name: "ABC" };
    onSuccess(user);
  }, 1000);

  setTimeout(() => {
    const error = "oops";
    onFailure(error);
  }, 500);
}
const onDone = (user) => {
  console.log(user);
};
const onError = (err) => {
  console.log(err);
};

getUser(onDone, onError);
