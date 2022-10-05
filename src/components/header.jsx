import { Link } from "react-router-dom";
import React from "react";
import { BREED } from "../api";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to={BREED.retriever}>{BREED.retriever}</Link>
        <Link to={BREED.poodle}>{BREED.poodle}</Link>
      </nav>
    </header>
  );
};
