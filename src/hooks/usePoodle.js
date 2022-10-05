import { useQuery } from "@tanstack/react-query";

import { BREED, getDogs } from "../api";

export const usePoodle = () =>
  useQuery([BREED.poodle], () => getDogs(BREED.poodle), {
    select: (data) =>
      data.message.map((image, index) => ({
        id: index,
        url: image,
      })),
    suspense: true,
  });
