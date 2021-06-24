import axios from 'axios';

class ApiAdapter {
  init(): void {
    const headers = {
      'Content-Type': 'application/json'
    };

    axios.defaults.baseURL = `https://reqres.in/api`;
    axios.defaults.headers.common = { ...headers };

    axios.interceptors.request.use(
      (request) => request,
      (error) => {
        return Promise.reject(new Error(error.response));
      }
    );

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        let errorMessage = '';
        if (error.response) {
          errorMessage = error.response.data;
        }
        return Promise.reject(new Error(errorMessage));
      }
    );
  }
}

export default ApiAdapter;
