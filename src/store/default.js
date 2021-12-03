import axios from "axios";
import create from "zustand";

const useStore = create((set, get) => ({
  data: null,
  isLoading: true,
  error: null,
  fetch: async (url) => {
    await axios
      .get(url)
      .then((res) =>
        set({
          data: res.data.map((user) => ({
            ...user,
            img: process.env.PUBLIC_URL + `/images/user${user.id}.jpg`,
          })),
        })
      )
      .then(() => set({ isLoading: false }))
      .catch((error) => set({ error: error }));
  },
  create: (userInfo, imgUrl) => {
    const { data } = get((state) => state);
    const ids = data.map((user) => user.id);
    const lastId = parseInt(ids[ids.length - 1]);
    set({ data: [...data, { ...userInfo, id: lastId + 1, img: imgUrl }] });
  },
  remove: (userId) => {
    const { data } = get((state) => state);
    set({ data: data.filter((user) => user.id !== userId) });
  },
  update: (info, id) => {
    const { data } = get((state) => state);
    const newData = data.map((user) =>
      user.id === parseInt(id) ? { ...user, ...info } : user
    );
    set({ data: newData });
  },
  updateImg: (id, url) => {
    const { data } = get((state) => state);
    const newData = data.map((user) =>
      user.id === parseInt(id) ? { ...user, img: url } : user
    );
    set({ data: newData });
  },
}));

export default useStore;
