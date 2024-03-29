import axios from "axios";

// const url = "http://localhost:3000/posts";
// const url = "https://shielded-headland-98634.herokuapp.com/posts";  // ULR DE HEROKU

 const API = axios.create({baseURL: 'http://localhost:3000'});

API.interceptors.request.use((req) => {
     if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
     }
    return req;
});    

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`); 

export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id)=> API.patch(`/posts/${id}/likepost`);
export const updatePost = (id, updatedPost) => API.patch(`${'/posts'}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

