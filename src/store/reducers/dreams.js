import { GET_DREAMS, DELETE_DREAM, SELECT_DREAM, DESELECT_DREAM, SET_DREAMS } from '../actions/actionTypes';

import dreamImage from '../../assets/dreamPlaceHolder.jpg';

//Dream Reducers
const initialState = {
  data: null,
  image: dreamImage,
  loaded: true,
  error: null,
  selectedDream: null
};

//Case - define cases here
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DREAMS:
    return {
      ...state,
      dreams: action.dreams
    };
    case GET_DREAMS:
      return {
        ...state,
        loaded: true, 
        data: action.data
      };
    case DELETE_DREAM:
      return {
        ...state,
        data: state.data.filter(dream => {
          return dream._id !== state.selectedDream._id;
        }),
        selectedDream: null
      };
    case SELECT_DREAM:
      return {
        ...state,
        selectedDream: state.data.find(dream => {
          return dream._id === action.dreamID;
        })
      };
    case DESELECT_DREAM:
      return {
        ...state,
        selectedDream: null
      };
    default:
      return state;
  }
};

export default reducer;