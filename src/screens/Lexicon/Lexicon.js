import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../../Styles/Styles'

export class Lexicon extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: colors.HEADER_TAB_BAR
    },
    headerTitleStyle: {
      color: colors.APP_HEADER_TITLE,
    },
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