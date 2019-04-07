import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Lexicon extends Component {
  static navigationOptions = {
    title: "Lexicon",
    headerLeft: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Lexicon Tab </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Lexicon;