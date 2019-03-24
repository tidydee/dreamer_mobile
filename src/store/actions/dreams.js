import { GET_DREAMS, DELETE_DREAM, SELECT_DREAM, DESELECT_DREAM, ADD_DREAM, IS_ADDING, IS_EDITING, DESELECT_DREAM_EDIT, IS_UPDATING } from './actionTypes';

const HEADERS = {
  'Authorization': 'Bearer DummyJWT-To-BeReplaced',
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}
const LOCAL_HOST_IP = '127.0.0.1';
const EXPO_IP = '192.168.1.65';
const BASE_URL = 'http://' + EXPO_IP  + ':3000';

// Action Creators
export const updateDream = (updatedDream) => {
  return (dispatch) => {
    const id = updatedDream._id;
    const url = BASE_URL + `/dream?id=${id}`;
    const h = new Headers();
    h.append('Authorization', 'Bearer DummyJWT-To-BeReplaced');

    let req = new Request(url, {
      headers: HEADERS,
      method: 'PUT',
      body: JSON.stringify(updatedDream)
    });

    fetch(req)
      .catch(error => {
        console.log("ERROR :" + error)
        throw error;
      })
      .then(res => res.json())
      .then(() => {
        console.log(`Dream ID: ${id} Updated successfully on server.`)
        dispatch(isUpdating(updatedDream))
      })
  }
}

export const isUpdating = (updatedDream) => {
  return {
    type: IS_UPDATING,
    updatedDream: updatedDream
  }
}

export const isEditing = (id) => {
  console.log("ACTION ID")
  console.log(id)
  return {
    type: IS_EDITING,
    dreamID: id
  }
}

export const isAdding = () => {
  return {
    type: IS_ADDING
  }
};

export const addDream = (dream) => {
  return (dispatch) => {
    let url = BASE_URL + '/dream';

    let req = new Request(url, {
      headers: HEADERS,
      method: 'POST',
      body: JSON.stringify(dream)
    });

    fetch(req)
    .catch(error => {
      console.log("ERROR: " + error)
      throw error;
    })
    .then(res => res.json())
    .then(() => {
      console.log(`Dream ID: ${dream._id} Created successfully on server.`)
      dispatch(setDream(dream))
    })
  };
};

export const setDream = (dream) => {
  console.log("SET DREAM REACHED")
  return {
    type: ADD_DREAM,
    data: dream
  }
};

export const getDreams = () => { // Sending GET Req to DreamAPI server
  return (dispatch) => {
    const url = BASE_URL + '/dreams';
    const req = new Request(url, {
      headers: HEADERS,
      method: 'GET'
    });
    
    fetch(req)
    .catch(error => {
      console.log("ERROR :" + error)
      throw error;
    })
    .then(res => res.json())
    .then(parsedRes => {
      dispatch(setDreams(parsedRes));
    })
  };
};

export const setDreams = (dreams) => { // Setting Store/State with all Dreams fetched from the DreamAPI server
  return {
    type: GET_DREAMS,
    data: dreams
  }
};

export const deleteDream = (id) => { //sending DELETE Req to DreamAPI server
  return (dispatch) => {
    const url = BASE_URL + `/dream?id=${id}`;
    const req = new Request(url, {
      headers: HEADERS,
      method: 'DELETE'
    });

    fetch(req)
      .catch(error => {
        console.log("ERROR :" + error)
        throw error;
      })
      .then(res => res.json())
      .then( dispatch(removeDream()) )

    console.log(`Dream ID: ${id} Deleted successfully on server.`)
  };
};

export const removeDream = () => { //removes dream from Store/State
  return {
    type: DELETE_DREAM
  };
};

export const selectDream = (id) => {
  return {
    type: SELECT_DREAM,
    dreamID: id
  };
};

export const deselectDream = () => {
  return {
    type: DESELECT_DREAM
  };
};

export const deselectDreamEdit = () => {
  return {
    type: DESELECT_DREAM_EDIT
  };
}