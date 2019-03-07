import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import DreamList from './src/components/DreamList/DreamList';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: null,
      loaded: true,
      error: null
    }
  }
  baseURL = 'http://127.0.0.1:3000';

  getData = (ev) => {
    this.setState({loaded: false, error: null});
    let url = this.baseURL + '/dreams';
    let h = new Headers();
    h.append('Authorization', 'Bearer DummyJWT-To-BeReplaced');
    
    let req = new Request(url, {
      headers: h,
      method: 'GET'
    });

    fetch(req)
      .then(response=>response.json())
      .then(this.showData)
      .catch(this.error)
  }

  showData = (data) => {
    this.setState({loaded: true, data: data});
    console.log(data);

  }
  error = (err) => {
    this.setState({loaded: true,error: err.message});
  }

  componentDidMount() {
    // this.getData();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          {!this.state.loaded && (
            <Text>LOADING...</Text>
          )}
          <Text style={styles.welcomeContainerText}>Welcome to Dreamer!</Text>
          <Button 
            style={styles.button} 
            title="GET ALL DREAMS" 
            onPress={this.getData} 
          />
        </View>
        <DreamList
          error={this.state.error}
          data={this.state.data}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
