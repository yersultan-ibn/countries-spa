import { useDispatch, useSelector } from "react-redux";
import {
  loadCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countries-slice";
import { selectRegion, selectSearch } from "../controls/controls-slice";
import { useEffect } from "react";

export const useCountries = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const region = useSelector(selectRegion);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, { search, region })
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) dispatch(loadCountries());
  }, [qty, dispatch]);
  return [countries, { status, error, qty }];
};
