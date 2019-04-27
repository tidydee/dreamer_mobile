import { GET_DREAMS, DELETE_DREAM, SELECT_DREAM, DESELECT_DREAM, ADD_DREAM, IS_ADDING, IS_EDITING, DESELECT_DREAM_EDIT, IS_UPDATING } from '../actions/actionTypes';

import dreamImage from '../../assets/dreamPlaceHolder.jpg';
import dreamIcon from "../../assets/dreamCardTypeIcon.png"

//Dream Reducers
const initialState = {
  data: null,
  image: dreamIcon,
  loaded: true,
  error: null,
  selectedDream: null,
  isAdding: null,
  isEditing: null,
  dreamInEdit: null,
  // selectedDreamState: null
};

//Case - define cases here
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_UPDATING:
      return {
        ...state,
        selectedDream: action.updatedDream,
        data: state.data.map(dream => dream._id === action.updatedDream._id ? action.updatedDream : dream),
        isEditing: null
      }
    case IS_EDITING:
     console.log("IS_EDITING REDUCER REACHED");
     return {
       ...state,
       isEditing: true,
      //  selectedDreamState: state.data.find(dream => {
      //    return dream._id === action.dreamID
      //  })
     };
    case IS_ADDING:
      return {
        ...state,
        isAdding: true
      };
    case ADD_DREAM:
      return {
        ...state,
        data: state.data.concat(action.data)
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
        selectedDream: null,
        isEditing: null
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
        selectedDream: null,
        isAdding: null,
        // isEditing: null,
        // selectedDreamState: null
      };
    case DESELECT_DREAM_EDIT:
      return {
        ...state,
        isEditing: null
      }
    default:
      return state;
  }
};

export default reducer;