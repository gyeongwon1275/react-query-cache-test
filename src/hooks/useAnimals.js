import { useQuery } from "@tanstack/react-query";

import { ANIMAL_URL, getAnimals } from "../api";

export const useAnimals = (type = "dog") =>
  useQuery([ANIMAL_URL, type], getAnimals);
