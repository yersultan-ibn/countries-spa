export const SET_COUNTRIES = "@@theme/SET_COUNTRIES";
export const SET_LOADING = "@@theme/SET_LOADING";
export const SET_ERROR = "@@theme/SET_ERROR";

export const setCountries = (theme) => ({
  type: SET_COUNTRIES,
  payload: theme,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadCountries =
  () =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.ALL_COUNTRIES)
      .then(({ data }) => dispatch(setCountries(data)))
      .catch(({ err }) => dispatch(setError(err.message)));
  };
