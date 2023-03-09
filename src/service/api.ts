import axios from "axios";

const api = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});

api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    //pra nao substituir as requisições que eu fizer por param
    key: "AIzaSyDXPktyddf1h__5g0UIAIk9OwWjIKJ48QM",
    //credencial gerada pelo google
  };
  return config;
});

export default api;
