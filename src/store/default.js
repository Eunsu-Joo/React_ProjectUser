import axios from "axios";
import create from "zustand";

const useStore = create((set, get) => ({
  data: null,
  isLoading: true,
  error: null,
  fetch: async (url) => {
    await axios
      .get(url)
      .then((res) => set({ data: res.data }))
      .then(() => set({ isLoading: false }))
      .catch((error) => set({ error: error }));
  },
  create: (userInfo) => {
    const { data } = get((state) => state);
    const ids = data.map((user) => user.id);
    const lastId = parseInt(ids[ids.length - 1]);
    set({ data: [...data, { ...userInfo, id: lastId + 1 }] });
  },
  remove: (userId) => {
    const { data } = get((state) => state);
    set({ data: data.filter((user) => user.id !== userId) });
  },
  update: (info, id) => {
    const { data } = get((state) => state);
    set({ data: [...data, { ...info, id: id }] });
  },
}));

export default useStore;
