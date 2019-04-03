import React, { Component} from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

class AuthScreen extends Component {
  static navigationOptions = {
    title: "Login"
  };

  loginHandler = () => {
    this.props.navigation.navigate("Dashboard")
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeContainerText}>Welcome to Dreamer!</Text>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeContainerText: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default AuthScreen;