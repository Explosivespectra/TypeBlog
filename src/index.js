import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import store from "./components/features/store";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const uri = "http://localhost:3008/getProducts";
const cache = new InMemoryCache();
const client = new ApolloClient({ uri: uri, cache: cache });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
