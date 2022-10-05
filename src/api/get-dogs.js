import axios from "axios";

export const BREED = {
  retriever: "retriever",
  hound: "hound",
  poodle: "poodle",
};

export const getDogs = (breed = BREED.retriever) =>
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random/3`).then(
    (response) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(response?.data);
        }, 2000);
      })
  );
