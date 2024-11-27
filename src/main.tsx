import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import Footer from "@/components/Footer";
import apolloClient from "@/services/apollo-client.ts";

import "./global.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <App />
      <Footer />
    </ApolloProvider>
  </BrowserRouter>
);
