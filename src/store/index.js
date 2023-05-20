import axios from "axios";
import * as api from "../config";
const { createStore, compose, applyMiddleware } = require("redux");
const { rootReducer } = require("./root-reducer");
const { default: thunk } = require("redux-thunk");

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      })
    )
  )
);

export { store };
