export const SET_COUNTRIES = "@@details/SET_COUNTRIES";
export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_NEIGHBORS = "@@details/SET_NEIGHBORS";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_LOADING,
  payload: err,
});

const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

const setNeighbors = (borders) => ({
  type: SET_NEIGHBORS,
  payload: borders,
});

export const clearDetails = () => ({
  type: CLEAR_DETAILS,
});

export const loadCountryByName =
  (name) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountries(data[0])))
      .catch(({ err }) => dispatch(setError(err)));
  };

export const loadNeighborsByBorder =
  (countries) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(countries))
      .then(({ data }) => dispatch(setNeighbors(data.map((c) => c.name))))
      .catch(({ err }) => setError(err));
  };
