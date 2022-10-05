import React from "react";

import { Route, Routes } from "react-router-dom";
import { Animal, Stock, Home } from "./pages";

export const App = () => {
  return (
    <main>
      <h1>React Query Cache</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
};
