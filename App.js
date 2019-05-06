import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: null,
      loaded: true,
      error: null
    }
  }
  //FOR EXPO ONLY
  // localhost = '127.0.0.1';
  // myIP = '142.179.74.217';
  // expoConnection = 'exp://192.168.1.71:______';
  baseURL = 'http://192.168.1.71:3000';

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
      <ScrollView contentContainerStyle={styles.container}>
        {!this.state.loaded && (
          <Text>LOADING...</Text>
        )}
        <Text style={styles.containerText}>Welcome to Dreamer!</Text>
        <Button 
          style={styles.button} 
          title="GET ALL DREAMS" 
          onPress={this.getData} />
          { this.state.error !== null && (
            <Text style={styles.err}>{ this.state.error }</Text>
          )}
          { this.state.data && this.state.data.length > 0 && (
            this.state.data.map( dream => (
              <Text key={dream._id} style={styles.dreams}>
                { dream.title }
              </Text>
            ))
          )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold'
  },
  dreams: {
    color: '#000',
    fontSize: 15,
  },
  button: {
    color: 'blue',
  },
  err:{
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
