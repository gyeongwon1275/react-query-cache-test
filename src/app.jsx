import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import { Retriever, Home, Poodle } from "./pages";

export const App = () => {
  return (
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/retriever" element={<Retriever />} />
        <Route
          path="/poodle"
          element={
            <Suspense fallback={<div>Poodle is loading...</div>}>
              <Poodle />
            </Suspense>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
};
