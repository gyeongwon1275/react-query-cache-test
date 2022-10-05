import axios from "axios";
import { ANIMAL_URL, BASE_URL } from "./constants";

export const getAnimals = () =>
  axios.get(`${BASE_URL}${ANIMAL_URL}`).then((response) => response.data);
