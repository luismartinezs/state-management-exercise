export const fetchPost = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, content: "Lorem ipsum" });
    }, 1000);
  });
};
