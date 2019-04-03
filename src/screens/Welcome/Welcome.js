import React, { Component } from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'

export class Welcome extends Component {
  static navigationOptions = {
    title: "Login"
  };
  
  loginHandler = () => {
    this.props.navigation.navigate('Dashboard')
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login"
          onPress={this.loginHandler}
        />
        <Button
          title="Sign Up"
          onPress={() => alert("Sign Up to come later")}
        />
      </View>
    );
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

export default Welcome;
