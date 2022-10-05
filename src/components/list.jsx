import React from "react";

export const List = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, url }) => (
        <li key={id}>
          <img src={url} alt={"dog"} />
        </li>
      ))}
    </ul>
  );
};
