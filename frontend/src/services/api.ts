// import axios from "axios";

// const API_URL = "http://localhost:8080/api";

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Intercepteur pour ajouter le token
// api.interceptors.request.use(
//   (config) => {
//     const user = localStorage.getItem("user");
//     if (user) {
//       const { token } = JSON.parse(user);
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default api;

import axios, { type AxiosInstance, type AxiosResponse } from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8080/api";

class ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Intercepteur pour ajouter le token
    this.instance.interceptors.request.use(
      (config) => {
        const user = localStorage.getItem("user");
        if (user) {
          const { token } = JSON.parse(user);
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Intercepteur pour gérer les erreurs
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem("user");
          window.location.href = "/connexion";
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.get(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.post(
      url,
      data,
      config
    );
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.put(
      url,
      data,
      config
    );
    return response.data;
  }

  async patch<T>(url: string, data?: any, config?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.patch(
      url,
      data,
      config
    );
    return response.data;
  }

  async delete<T>(url: string, config?: any): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.delete(url, config);
    return response.data;
  }

  getInstance(): AxiosInstance {
    return this.instance;
  }
}

export const apiClient = new ApiClient();
