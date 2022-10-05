import React, { useEffect } from "react";
import { List } from "../components";
import { usePoodle } from "../hooks";

export const Poodle = () => {
  const { data, status } = usePoodle();

  return (
    <section>
      <h2>Poodle</h2>

      <div>
        <label>status : </label>
        <span>{status}</span>
      </div>

      <List list={data} />
    </section>
  );
};
