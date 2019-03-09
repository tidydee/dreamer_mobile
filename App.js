import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import DreamList from './src/components/DreamList/DreamList';
import GetData from './src/components/GetData/GetData';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GetData />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  }
});
