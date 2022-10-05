import "./styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import * as ReactDOM from "react-dom/client";

import { App } from "./app";
import { Header } from "./components";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const prepareMSW = async () => {
  const { worker } = await import("./mocks/browser");
  await worker.start();
};

prepareMSW().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Header />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
});
