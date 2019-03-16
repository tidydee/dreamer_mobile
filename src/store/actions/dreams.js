import { GET_DREAMS, DELETE_DREAM, SELECT_DREAM, DESELECT_DREAM, SET_PLACES } from './actionTypes';

// Action Creators

export const getDreams = () => {
  return (dispatch) => {
    //LOCALHOST_IP = 127.0.0.1
    //EXPO_IP = 192.168.1.65:19000
    baseURL = 'http://127.0.0.1:3000';
    
    let url = this.baseURL + '/dreams';
    let h = new Headers();
    h.append('Authorization', 'Bearer DummyJWT-To-BeReplaced');

    let req = new Request(url, {
      headers: h,
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
}

export const setDreams = (dreams) => {
  return {
    type: GET_DREAMS,
    data: dreams
  }
}

export const deleteDream = (id) => {
  return (dispatch) => {
    //LOCALHOST_IP = 127.0.0.1
    //EXPO_IP = 192.168.1.65:19000
    baseURL = 'http://127.0.0.1:3000';

    let url = this.baseURL + `/dream?id=${id}`;
    let h = new Headers();
    h.append('Authorization', 'Bearer DummyJWT-To-BeReplaced');

    let req = new Request(url, {
      headers: h,
      method: 'DELETE'
    });

    fetch(req)
      .catch(error => {
        console.log("ERROR :" + error)
        throw error;
      })
      .then(res => res.json())
      .then( dispatch(removeDream()) )
      
    console.log(`Dream ID: ${id} deleted successfully from server.`)
  };
}

export const removeDream = () => {
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