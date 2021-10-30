import { ref, computed } from "vue";
import { fetchPost } from "../api";

const someGlobalState = ref({});

export default function usePost() {
  const state = ref({ post: {} });

  function setPost(post) {
    state.value.post = post;
  }

  function setGlobalState(value) {
    someGlobalState = value;
  }

  async function loadPost(id) {
    const post = await fetchPost(id);
    setPost(post);
  }

  const getPost = computed(() => state.value.post);

  return { loadPost, getPost, setGlobalState };
}
