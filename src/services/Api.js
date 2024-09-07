import axios from 'axios'

const Api = axios.create({
    
    //set endpoint API
    baseURL: 'https://8a7a80740c975d.lhr.life/api',

    //set header axios
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    // withCredentials: true,
});

//handle unathenticated
Api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(sessionStorage.getItem('user')); 
    const token = user ? user.accessToken || user.data.accessToken  : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`; 
    }

   

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api