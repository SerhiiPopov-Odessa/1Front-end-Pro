import axios from "axios";
import { BASE_URL } from "../constants/apiUrl";

const instance = axios.create({ baseURL: BASE_URL });

const api = {
  getDestination() {
    return instance.get("/destination");
  },
  getHotels(params) {
    return instance.get("/hotels", { params });
  },
};

export default api;
