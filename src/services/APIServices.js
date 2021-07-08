import axios from 'axios';

const DEFAULT_CONFIG = {
  baseURL: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily',
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': '64cafe58f0msh2e785044fc00eb9p1f6071jsn7d33d1e398da',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
  },
};

const REQUEST_METHODS = ['get', 'post', 'put', 'patch', 'delete'];

const [getMethod, postMethod, putMethod, patchMethod, deleteMethod] = REQUEST_METHODS.map(
  (method) =>
    function anonymous(url, data = {}, config = {}) {
      const { headers = {}, ...restConfig } = config;
      const additionConfig = {};

      if (method === 'get') {
        additionConfig.params = data;
      } else {
        additionConfig.data = data;
      }

      return this.executeRequest({
        url,
        method,
        headers: {
          ...DEFAULT_CONFIG.headers,
          ...headers,
        },
        ...restConfig,
        ...additionConfig,
      });
    },
);

class APIService {
  constructor() {
    this.service = axios.create(DEFAULT_CONFIG);
    this.get = getMethod;
    this.post = postMethod;
    this.put = putMethod;
    this.patch = patchMethod;
    this.delete = deleteMethod;
  }

  executeRequest(config) {
    return this.service
      .request(config)
      .then((response) => response.data)
      .catch((errResponse) => Promise.reject(errResponse));
  }
}

export default APIService;
