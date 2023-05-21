import { CELAR_COUNTRIES, SET_REGION, SET_SEARCH } from "./controls-actions";

const initialState = {
  search: "",
  region: "",
};

export const controlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH: {
      return {
        ...state,
        search: payload,
      };
    }
    case SET_REGION: {
      return {
        ...state,
        region: payload,
      };
    }
    case CELAR_COUNTRIES: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
