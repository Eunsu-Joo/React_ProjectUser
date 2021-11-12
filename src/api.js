const { default: axios } = require("axios");

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const userApi = {
  users: () => api.get("users"),
  user: (userId) => api.get(`users/${userId}`),
  posts: (userId) => api.get(`posts?userId=${userId}`),
  todos: (userId) => api.get(`todos?userId=${userId}`),
  albums: (userId) => api.get(`albums?userId=${userId}`),
  comments: (postId) => api.get(`comments?postId=${postId}`),
  photos: (albumId) => api.get(`photos?albumId=${albumId}`),
};

export const updateApi = (id, data) => {
  console.log(id, data);
  if (id === undefined) {
    axios({
      url: `https://jsonplaceholder.typicode.com/users`,
      method: "POST",
      data: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  } else {
    axios({
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
      method: "PUT",
      data: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
};

export const deleteApi = (id) =>
  api.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
