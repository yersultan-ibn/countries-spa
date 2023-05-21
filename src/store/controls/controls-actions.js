export const SET_SEARCH = "@@controls/SET_SEARCH";
export const SET_REGION = "@@controls/SET_REGION";
export const CELAR_COUNTRIES = "@@controls/CELAR_COUNTRIES";

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});
export const clearCountries = () => ({
  type: CELAR_COUNTRIES
});
