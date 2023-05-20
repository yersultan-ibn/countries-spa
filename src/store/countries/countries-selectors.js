export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  qty: state.countries.list.length,
  error: state.countries.error,
});

export const selectAllCountries = (state) => state.countries.list;
