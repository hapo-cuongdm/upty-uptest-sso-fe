import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/v1";

class ApiService {
  getBaseAxios() {
    const CONFIG_AXIOS = {
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const instance = axios.create(CONFIG_AXIOS);
    instance.interceptors.request.use((config: any) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    });
    return instance;
  }

  private createEndpoint(endpoint: string, params?: Record<string, string | number>): string {
    const baseURL = baseUrl;
    let url = `${baseURL}${endpoint}`;
    if (params) {
      Object.keys(params).forEach((key) => {
        url = url.replace(`:${key}`, encodeURIComponent(params[key].toString()));
      });
    }
    return url;
  }
  get(url: string, params?: any) {
    return this.getBaseAxios().get(this.createEndpoint(url, params));
  }

  post(url: string, params?: any) {
    return this.getBaseAxios().post(this.createEndpoint(url), params);
  }
}

export const apiService = new ApiService();
