const api = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({ id: "123", title: "ABC" });
    }, 2000);
  });
};

const getUserData = async () => {
  console.log("Loading User..");
  const data = await api();
  console.log(data);
  console.log("Stop Loading User");
  return data;
};

const getPostData = async (userId) => {
  console.log("Loading Posts..");
  const data = await api(userId);
  console.log(data);
  console.log("Stop Loading Posts");
  return data;
};

const getCommentData = async (postId) => {
  console.log("Loading Comment..");
  const data = await api(postId);
  console.log(data);
  console.log("Stop Loading Commnet");
  return data;
};

const getData = async () => {
  const userData = await getUserData();
  const { id } = userData;

  const postData = await getPostData(id);
  const { id: postId } = postData;

  const comments = await getCommentData(postId);

  console.log("Show data");
};
getData();
