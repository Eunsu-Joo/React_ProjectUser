const { default: axios } = require("axios");

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const userApi = {
  users: () => api.get("users"),
  user: (userId) => api.get(`users/${userId}`),
  posts: (userId) => api.get(`posts/${userId}`),
  todos: (userId) => api.get(`todos/${userId}`),
  albums: (userId) => api.get(`albums/${userId}`),
  comments: (postId) => api.get(`posts/${postId}/comments`),
  photos: (albumId) => api.get(`albums/${albumId}/photos`),
};

export const createApi = (type, data) =>
  axios({
    url: `https://jsonplaceholder.typicode.com/${type}`,
    method: "POST",
    data: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

export const updateApi = (id, data) =>
  axios({
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
    method: "PUT",
    data: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

export const deleteApi = (id) =>
  api.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
