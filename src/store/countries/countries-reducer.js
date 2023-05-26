import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-actions";

const initialState = {
  loading: "idle",
  list: [],
  error: null,
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES: {
      return {
        status: "received",
        list: payload,
      };
    }
    case SET_LOADING: {
      return {
        status: "loading",
        error: null,
      };
    }
    case SET_ERROR: {
      return {
        status: "rejected",
        error: payload,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};
