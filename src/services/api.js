import axios from 'axios';

const $publicHost = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const $privateHost = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);


export const UserAPI = {
  async userSignUpRequest(formData) {
    const { data } = await $publicHost.post(`users/signup`, { ...formData });
    return await data;
  },
  async userSignInRequest(formData) {
    const { data } = await $publicHost.post(`users/login`, { ...formData });
    return await data;
  },
  async getUserDetailsRequest() {
    const { data } = await $privateHost.get(`/users/current`);
    return await data;
  },
  async userLogOutRequest() {
    const { data } = await $privateHost.post(`/users/logout`);
    return await data;
  },
}

export const ContactsAPI = {


  async getContactsRequest() {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}`
    );
    return await response.json();
  },
  async addContactRequest(movieId) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US`
    );
    return await response.json();
  },
  async deleteContactRequest(movieId) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie//${movieId}/reviews?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US&page=1`
    );
    return await response.json();
  },
  async updateContactRequest(movieId) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie//${movieId}/reviews?api_key=${process.env.REACT_APP_THEMOVIE_API_KEY}&language=en-US&page=1`
    );
    return await response.json();
  },
};
