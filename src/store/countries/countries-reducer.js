import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countries-actions";

const initialState = {
  status: "idle", // loadgin | received | rejected
  list: [],
  error: null,
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES: {
      return {
        ...state,
        list: payload,
        error: null,
        status: "received",
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        status: "loading",
        error: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: payload,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
