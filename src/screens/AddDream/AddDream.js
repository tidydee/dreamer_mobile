import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class AddDream extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Add Dream Screen </Text>
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
})

export default AddDream;