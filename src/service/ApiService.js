import axios from 'axios';
import { toast } from 'react-toastify';
import { logout } from '../components/redux/features/authSlice';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
const localToken = localStorage.getItem("token");

// Set default headers
axios.defaults.headers.common['Authorization'] = `Bearer ${localToken}`;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

// Handle API request and response
const handleRequest = async (requestFunction) => {
  try {
    const response = await requestFunction();
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {

      handleUnauthorized();

    } else {
      console.error("An error occurred:", error.message);
    }
    throw error;
  }
};

const handleUnauthorized = () => {

  localStorage.removeItem("isLogin");
  localStorage.removeItem("authUser");
  localStorage.removeItem("token");
  // Navigate to the home page or any other desired route after logout
  console.log('session out');

};

// GET request
export const getApi = async (url) => {
  return handleRequest(() => axios.get(url));
};

// get data use id
// export const getApiById = async (url, id) => {
//   const urlWithUserId = ${url}?id=${id};

//   return handleRequest(() => axios.get(urlWithUserId));
// };

// POST request
export const postApi = async (url, data) => {
  return handleRequest(() => axios.post(url, data));
};


// export const postApiToken = async (url, data, token) => {
//   return handleRequest(() => axios.post(url, data, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   }));
// };

export const postApiToken = async (url, token) => {
  return handleRequest(() => axios.post(url, {},));
};



// PUT request
export const putApi = async (url, data) => {
  return handleRequest(() => axios.put(url, data));
};

// DELETE request
export const deleteApi = async (url, id) => {
  const urlWithUserId = `${url}?id=${id}`;

  return handleRequest(() => axios.delete(urlWithUserId));
};