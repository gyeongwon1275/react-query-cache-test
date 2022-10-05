import { useQuery } from "@tanstack/react-query";

import { BREED, getDogs } from "../api";

export const useRetriever = () =>
  useQuery([BREED.retriever], () => getDogs(BREED.retriever), {
    select: (data) =>
      data.message.map((image, index) => ({
        id: index,
        url: image,
      })),
  });
