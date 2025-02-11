function getUser(onSuccess, onFailure) {
  setTimeout(() => {
    const user = { name: "ABC", userId: "321" };
    onSuccess(user);
  }, 1000);

  setTimeout(() => {
    const error = "oops";
    onFailure(error);
  }, 500);
}
function getPosts(userId, onSuccess, onFailure) {
  setTimeout(() => {
    let posts = [{ title: "Study", postId: "123" }];
    onSuccess(posts);
  }, 1000);
}
function getComments(postId, onSuccess, onFailure) {
  setTimeout(() => {
    const comments = [{ comment: "Yoo!!", commentId: "091" }];
    onSuccess(comments);
  }, 1000);
}

getUser(
  (user) => {
    console.log(user);
    const { userId } = user;
    getPosts(
      userId,
      (posts) => {
        const firstPost = posts[0];
        const { postId } = firstPost;

        getComments(
          postId,
          (comments) => {
            console.log(comments);
          },
          (err) => {
            console.log("Comments Error");
          }
        );
      },
      (error) => {
        console.log("Posts Error");
      }
    );
  },
  (err) => {
    console.log(err);
  }
);
