import {
  CLEAR_DETAILS,
  SET_COUNTRIES,
  SET_ERROR,
  SET_LOADING,
  SET_NEIGHBORS,
} from "./details-actions";

const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
  neighbors: [],
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES: {
      return {
        ...state,
        currentCountry: payload,
        status: "received",
      };
    }
    case SET_NEIGHBORS: {
      return {
        ...state,
        neighbors: payload,
        status: "received",
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        status: "loading",
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    }
    case CLEAR_DETAILS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
