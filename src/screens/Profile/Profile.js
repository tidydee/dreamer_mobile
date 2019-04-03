import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Profile Tab </Text>
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

export default Profile;