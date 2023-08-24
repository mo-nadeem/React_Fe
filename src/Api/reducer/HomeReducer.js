import {
  FETCH_HOME_FAILURE,
  FETCH_HOME_REQUEST,
  FETCH_HOME_SUCCESS,
} from "../action/HomeAction";

const initialState = {
  loading: false,
  hospital: null,
  speciality: null,
  doctor: null,
  blog: null,
  faq: null,
  qa: null,
  treatment: null,
  title: null,
  headerFooter: null,
  navigationheader: null,
  navigationfooter: null,
  banner: null,

  error: null,
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        hospital: action.payload.data.hospitals,
        speciality: action.payload.data.Speciality,
        doctor: action.payload.data.Doctor,
        faq: action.payload.data.generalfaq,
        qa: action.payload.data.qa,
        treatment: action.payload.data.treatments,
        title: action.payload,
        headerFooter: action.payload.data.header_footer,
        navigationheader: action.payload.data.navigationheader,
        navigationfooter: action.payload.data.navigationfooter,
        banner: action.payload.data.banner,
        blog: action.payload.data.blogs,
      };
    case FETCH_HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
