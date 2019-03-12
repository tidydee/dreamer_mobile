import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import DreamList from './src/components/DreamList/DreamList';
import DreamDetail from './src/components/DreamDetail/DreamDetail';
import dreamImage from './src/assets/dreamPLaceHolder.jpg';

export default class App extends React.Component {
  state = {
    data: null,
    image: dreamImage,
    loaded: true,
    error: null,
    selectedDream: null
  }

  //LOCALHOST_IP = 127.0.0.1
  //EXPO_IP = 192.168.1.65:19000
  baseURL = 'http://127.0.0.1:3000';

  getData = (ev) => {
    this.setState({ loaded: false, error: null });
    let url = this.baseURL + '/dreams';
    let h = new Headers();
    h.append('Authorization', 'Bearer DummyJWT-To-BeReplaced');

    let req = new Request(url, {
      headers: h,
      method: 'GET'
    });

    fetch(req)
      .then(response => response.json())
      .then(this.showData)
      .catch(this.error)
  }

  
  showData = (data) => {
    this.setState({ loaded: true, data: data });
    console.log(data);

  }
  error = (err) => {
    this.setState({ loaded: true, error: err.message });
  }
  
  dreamSelectedHandler = (key) => {
    console.log("DREAM_ID: " + key)
    console.log("SELECTED_DREAM: " + this.state.selectedDream)

    this.setState(prevState => {
      return {
        selectedDream: prevState.data.find(dream => {
          return dream._id === key
        })
      };
    })
  }

  modalClosedHandler = () =>{
    this.setState({
      selectedDream: null
    });
  }

  dreamDeletedHandler = (id) => {
    this.setState(prevState => {
      return {
        data: prevState.data.filter(dream => {
          return dream._id !== prevState.selectedDream._id;
        }),
        selectedDream: null
      } 
    }, // initiating Callback on setState to make sure DELETE req to API server is called at end of ASYNC setState call to view.
      () => {
        // this.setState({ loaded: false, error: null });
        let url = this.baseURL + `/dream?id=${id}`;
        let h = new Headers();
        h.append('Authorization', 'Bearer DummyJWT-To-BeReplaced');

        let req = new Request(url, {
          headers: h,
          method: 'DELETE'
        });

        fetch(req)
          .then(response => response.json())
          // .then(this.showData)
          .catch(this.error)
        console.log(`Dream ID: ${id} deleted successfully from server.`)
      });
  }

  componentDidMount() {
    // this.getData();
  }
  
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.welcomeContainer}>
          {!this.state.loaded && (
            <Text>LOADING...</Text>
          )}
          
          <DreamDetail 
            selectedDream={this.state.selectedDream}
            onModalClose={this.modalClosedHandler}
            onItemDeleted={this.dreamDeletedHandler}
            image={dreamImage} //TODO: this is TEMP only. TO be handled with loading Image via ID over NETWORK. 
          />

          <Text style={styles.welcomeContainerText}>Welcome to Dreamer!</Text>
          <Button
            style={styles.button}
            title="GET ALL DREAMS"
            onPress={this.getData}
          />
          <View style={{ flex: 1 }}>
            <DreamList
              error={this.state.error}
              data={this.state.data}
              image={this.state.image}
              onItemSelected={this.dreamSelectedHandler}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  welcomeContainer: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  welcomeContainerText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'

  },
  button: {
    color: 'blue',
  }
});
