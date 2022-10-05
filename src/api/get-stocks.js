import axios from "axios";
import { BASE_URL, STOCK_URL } from "./constants";

export const getStocks = () =>
  axios.get(`${BASE_URL}${STOCK_URL}`).then((response) => response.data);
