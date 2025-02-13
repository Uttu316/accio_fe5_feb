const getUser = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ userId: "123", name: "ABC" });
    }, 2000);
  });
};

const getPosts = (userId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (userId) {
        res({ postId: "4321", title: "Heyy" });
      } else {
        rej("Oops");
      }
    }, 2000);
  });
};

const getComments = (postId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ commentId: "c_123", comment: "ohoo" });
    }, 2000);
  });
};

const getLikes = (commentId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ count: 123 });
    });
  });
};

console.log("Loading....");
getUser()
  .then((userData) => {
    console.log(userData);
    const { userId } = userData;
    return userId;
  })
  .then((userId) => {
    return getPosts(userId);
  })
  .then((postData) => {
    console.log(postData);
    const { postId } = postData;
    throw "OMG"; //reject the promise with "OMG"
    return getComments(postId); // resolve the promise with getComments()
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Stop Loading");
  });
