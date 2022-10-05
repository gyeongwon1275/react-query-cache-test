import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

import { List } from "../components";
import { useRetriever } from "../hooks";

export const Retriever = () => {
  const queryClient = useQueryClient();
  const [time, setTime] = useState({
    staleTime: 0,
    cacheTime: 1000 * 60 * 5,
  });

  const { data, isLoading } = useRetriever();

  const onChange = (e) => {
    const changedTime = { ...time, [e.target.name]: e.target.value };
    setTime(changedTime);

    queryClient.setDefaultOptions({
      queries: {
        staleTime: changedTime.staleTime,
        cacheTime: changedTime.cacheTime,
      },
    });
  };

  return (
    <section>
      <h2>Retriever</h2>

      <div>
        <label htmlFor="staleTime">staleTime : </label>
        <input
          id="staleTime"
          name="staleTime"
          type="number"
          onChange={onChange}
          value={time.staleTime}
        />
      </div>

      <div>
        <label htmlFor="cacheTime">cacheTime : </label>
        <input
          id="cacheTime"
          name="cacheTime"
          type="number"
          onChange={onChange}
          value={time.cacheTime}
        />
      </div>

      {isLoading ? <div>Retriever Loading...</div> : <List list={data} />}
    </section>
  );
};
