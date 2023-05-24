import { useNavigate } from "react-router-dom";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../features/controls/Controls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { useEffect } from "react";
import {
  selectAllCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from "../store/countries/countries-selectors";
import { loadCountries } from "../store/countries/countries-actions";
import {
  selectControls,
  selectRegion,
  selectSearch,
} from "../store/controls/controls-selectors";
import { CountryList } from "../features/countries/CountryList";

export const HomePage = () => {

  return (
    <>
      <Controls />
      <CountryList />
    </>
  );
};
