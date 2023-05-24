import React from "react";
import { Card } from "../../components/Card";
import { List } from "../../components/List";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countries-slice";
import { selectRegion, selectSearch } from "../controls/controls-slice";
import { useEffect } from "react";
import { useCountries } from "./use-countries";

export const CountryList = () => {
  const navigate = useNavigate();
  const [countries, { error, status, qty }] = useCountries();

  return (
    <>
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population.toLocaleString(),
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };

          return (
            <Card
              key={c.name}
              onClick={() => navigate(`/country/${c.name}`)}
              {...countryInfo}
            />
          );
        })}
      </List>
    </>
  );
};
