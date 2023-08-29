import {
  FETCH_COMPONENTS_SUCCESS,
  FETCH_COMPONENTS_FAILURE,
  FETCH_COMPONENTS_REQUEST,
} from "../action/ComponentsActions";

const initialState = {
  loading: false,
  components: null,
  error: null,
};

const ComponentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPONENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_COMPONENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        components: action.payload.homepage_component.homepage,
      };
    case FETCH_COMPONENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ComponentsReducer;
