import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./theme-slice";
import { useEffect } from "react";

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  //   const clearCountries = useSelector(selectClearCountries);

  // const theme = "dark";

  const handleTheme = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return {theme, handleTheme}
};
