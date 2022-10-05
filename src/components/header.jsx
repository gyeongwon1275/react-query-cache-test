import { Link } from "react-router-dom";
import React from "react";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/animal">Animal</Link>
        <Link to="/stock">Stock</Link>
      </nav>
    </header>
  );
};
