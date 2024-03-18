import axios from 'axios';

function joinURL(baseURL, url) {
  return `${baseURL}/${url}`;
}

export default class Service {
    constructor() {
      this.domain = "https://dummyjson.com";
    }

    request(url, method = "POST", data = null) {
      url = joinURL(this.domain, url);
      const options = {
        method,
        headers: {}, 
      };
      if (data) {
        options.data = data;
      }
      return axios(url, options);
    }

    post(url, data) {
      const method = 'POST';
      return this.request(url, method, data)
        .then(response => response.data)
        .catch(error => {
          throw error.response ? error.response.data : error;
        });
    }

    get(url, id) {
      const method = 'GET';
      if (id) {
        url = `${url}/${id}`;
      }
      return this.request(url, method)
        .then(response => response.data)
        .catch(error => {
          throw error.response ? error.response.data : error;
        });
    }

    put(url, id, data) {
      const method = 'PUT';
      const headers = { 'Content-Type': 'application/json' };
      if (id) {
        url = `${url}/${id}`;
      }
      return this.request(url, method, data)
        .then(response => response.data)
        .catch(error => {
          throw error.response ? error.response.data : error;
        });
    }

    delete(url, id) {
      const method = 'DELETE';
      if (id) {
        url = `${url}/${id}`;
      }
      return this.request(url, method)
        .then(response => response.data)
        .catch(error => {
          throw error.response ? error.response.data : error;
        });
    }
    
    search(query) {
      const method = 'GET';
      const url = `products/search/?q=${query}`;

      return this.request(url,method)
        .then(response => response.data)
        .catch(error => {
          throw error.response ? error.response.data : error;
        });
    }
}

