import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import DreamList from '../DreamList/DreamList';
import DreamDetail from '../DreamDetail/DreamDetail';

class GetData extends Component {
  state = {
    data: null,
    loaded: true,
    error: null,
    selectedDream: null
  }

  //LOCALHOST_IP = 127.0.0.1
  //EXPO_IP = 192.168.1.65:19000
  baseURL = 'http://192.168.1.65:3000';

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
    console.log("HERERERERERERERERERERER")
    this.setState(prevState => {
      return {
        selectedPlace: prevState.data.find(place =>{
          return dream.key === key;
        })
      };
    })
  }

  componentDidMount() {
    // this.getData();
  }

  render() {
    return(
      <View style={styles.welcomeContainer}>
        {!this.state.loaded && (
          <Text>LOADING...</Text>
        )}
        <DreamDetail
          selectedDream={this.state.selectedDream}
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
          onItemSelected={this.dreamSelectedHandler}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default GetData;