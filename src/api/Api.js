import axios from "axios";

const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

export const Api = {
  users: () => api.get("users"),
  user: (userId) => api.get(`users/${userId}`),
  posts: (userId) => api.get(`posts/${userId}`),
  todos: (userId) => api.get(`todos/${userId}`),
  albums: (userId) => api.get(`albums/${userId}`),
  comments: (postId) => api.get(`comments?postId=${postId}`),
  photos: (albumId) => api.get(`photos?AlbumId=${albumId}`),
};
