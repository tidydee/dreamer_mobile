// Action Types - starting...
export const GET_DREAMS = 'GET_DREAMS';                   //1. Getting All Dreams
export const DELETE_DREAM = 'DELETE_DREAM';               //2. Deleting a Dream
export const SELECT_DREAM = 'SELECT_DREAM';               //3. Selecting a Dream
export const DESELECT_DREAM = 'DESELECT_DREAM';           //4. For Closing DreamDetail Modal
export const ADD_DREAM = 'ADD_DREAM';                     //5. ADDING A DREAM to STATE AND DB VIA API
export const IS_ADDING = 'IS_ADDING';                     //6. OPENS EMPTY MODAL FOR ADDING A DREAM
export const IS_EDITING = 'IS_EDITING';                   //7. OPENS MODAL WITH DREAM DATA FOR EDITING
export const DESELECT_DREAM_EDIT = 'DESELECT_DREAM_EDIT'; //8. For Closing DreamEdit Modal
export const IS_UPDATING = 'IS_UPDATING'                  //9. Updating SELECTED_DREAM state