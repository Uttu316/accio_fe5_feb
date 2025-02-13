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
      res({ postId: "4321", title: "Heyy" });
    });
  });
};

const getComments = (postId) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ commentId: "c_123", comment: "ohoo" });
    });
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
    getPosts().then((postData) => {
      console.log(postData);
      const { postId } = postData;
      return postId;
    });
  });
