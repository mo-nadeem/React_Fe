import axios from "axios";

export const FETCH_COMPONENTS_REQUEST = "FETCH_COMPONENTS_REQUEST";
export const FETCH_COMPONENTS_SUCCESS = "FETCH_COMPONENTS_SUCCESS";
export const FETCH_COMPONENTS_FAILURE = "FETCH_COMPONENTS_FAILURE";

export const fetchComponentsRequest = () => ({
  type: FETCH_COMPONENTS_REQUEST,
});

export const fetchComponentsSuccess = (Cdata) => ({
  type: FETCH_COMPONENTS_SUCCESS,
  payload: Cdata,
});

export const fetchComponentsFailure = (error) => ({
  type: FETCH_COMPONENTS_FAILURE,
  payload: error,
});

export const fetchComponents = () => {
  return async (dispatch) => {
    dispatch(fetchComponentsRequest());

    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/homepagecomponent`);
      dispatch(fetchComponentsSuccess(response.data));
    } catch (error) {
      dispatch(fetchComponentsFailure(error.message));
    }
  };
};