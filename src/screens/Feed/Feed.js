import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Feed Tab </Text>
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

export default Feed;
