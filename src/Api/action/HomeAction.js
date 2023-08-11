import axios from "axios";

export const FETCH_HOME_REQUEST = "FETCH_HOME_REQUEST";
export const FETCH_HOME_SUCCESS = "FETCH_HOME_SUCCESS";
export const FETCH_HOME_FAILURE = "FETCH_HOME_FAILURE";

export const fetchHomeRequest = () => ({
  type: FETCH_HOME_REQUEST,
});

export const fetchHomeSuccess = (data) => ({
  type: FETCH_HOME_SUCCESS,
  payload: data,
});

export const fetchHomeFailure = (error) => ({
  type: FETCH_HOME_FAILURE,
  payload: error,
});

export const fetchHome = () => {
  return async (dispatch) => {
    dispatch(fetchHomeRequest());

    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api`);
      dispatch(fetchHomeSuccess(response.data));
    } catch (error) {
      dispatch(fetchHomeFailure(error.message));
    }
  };
};
