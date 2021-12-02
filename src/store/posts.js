import axios from "axios";
import { devtools } from "zustand/middleware";
import create from "zustand";

const store = devtools(
  (set, get) => ({
    posts: [],
    isLoading: true,
    error: null,
    fetchPosts: async (id) => {
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((res) => set({ posts: [...res.data] }))
        .then(() => set({ isLoading: false }))
        .catch((error) => set({ error: error }));
    },
    updatePosts: (values, userId) => {
      const { posts } = get((state) => state);
      const ids = posts.map((user) => user.id);
      const lastId = parseInt(ids[ids.length - 1]);
      console.log(lastId);
      set({ posts: [...posts, { ...values, id: lastId + 1, userId: userId }] });
    },
  }),
  "postStore"
);

const postsStore = create(store);

export default postsStore;
