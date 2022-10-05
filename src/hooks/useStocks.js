import { useQuery } from "@tanstack/react-query";

import { getStocks, STOCK_URL } from "../api";

export const useStocks = () =>
  useQuery([STOCK_URL], getStocks, {
    suspense: true,
  });
