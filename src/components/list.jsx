import React from "react";

export const List = (list) => {
  return (
    <ul>
      {list.map(({ name, url }) => (
        <li>
          <span>{name}</span>
          <img src={url} alt={name} />
        </li>
      ))}
    </ul>
  );
};
