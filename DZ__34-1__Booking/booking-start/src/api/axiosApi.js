import axios from "axios";
import { BASE_URL } from "../constants/apiUrl";

const instance = axios.create({ baseURL: BASE_URL });

const api = {
   getDestination() {
    return  instance.get("/destination").then(res => res.data ?? []);
  },
  /* async getDestination() {
    const res = await instance.get("/destination");
    return res.data ?? [];
  }, */
  getHotels(params) {
    return instance.get("/hotels", { params });
  },
};

export default api;
