import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

import App from "./App.tsx";
import Footer from "@/components/Footer";
import apolloClient from "@/services/apollo-client";

import "./global.css";

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={apolloClient}>
    <App />
    <Footer />
  </ApolloProvider>
);
