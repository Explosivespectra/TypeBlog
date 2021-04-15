import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const uri = "http://localhost:3008/getProducts";
const cache = new InMemoryCache();
const client = new ApolloClient({ uri: uri, cache: cache });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
