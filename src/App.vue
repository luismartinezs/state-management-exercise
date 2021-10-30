<script>
import usePost from "./composables/usePost";

export default {
  setup() {
    const { loadPost, getPost } = usePost();
    loadPost(1);
    return {
      post: getPost,
    };
  },
};
</script>

<template>{{ post && post.content }}</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
