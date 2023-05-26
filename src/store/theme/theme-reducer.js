import { SET_THEME } from "./theme-actions";

export const themeReducer = (state = "dark", { type, payload }) => {
  switch (type) {
    case SET_THEME: {
      return {
        state: payload,
      };
    }
    default:
      return state;
  }
};
