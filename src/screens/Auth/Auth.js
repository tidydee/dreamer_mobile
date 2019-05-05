import React, { Component} from 'react';
import { View, ImageBackground, TouchableOpacity, Image, Text, StyleSheet, Dimensions } from "react-native";
import { colors } from '../../Styles/Styles';

const { height, width } = Dimensions.get('screen');

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
        <ImageBackground
          source={require("../../assets/welcome_resized.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.welcomeContent}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../../assets/lifetree.png")}
                style={styles.logo}
              />
              <Text style={styles.appName}>LIFE</Text>
              <Text style={styles.appName}>TREE</Text>
            </View>
            <View style={styles.loginForm}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.loginHandler}
              >
                <Text style={styles.buttonText}>Explore</Text>
                {/* <Button title="Explore" onPress={this.loginHandler} /> */}
                {/* <Button
                  title="Sign Up"
                  onPress={() => alert("Sign Up to come later")}
                /> */}
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  welcomeContent: {
    // height: 100,
    // width: 100,
    // alignItems: "center",
    marginTop: height / 6,
    justifyContent: "center"
  },
  logoContainer: {
    // flex: 1,
    // height: 100,
    marginBottom: "5%",
    alignItems: "center"
    // justifyContent: 'space-between',
  },
  logo: {
    resizeMode: "contain",
    width: "60%",
    height: "60%"
  },
  appName: {
    // marginTop: 50,
    color: "white",
    // width: 150,
    fontSize: 60,
    fontWeight: "600"
  },
  loginForm: {
    // flex: 1,
    marginTop: "0%",
    alignItems: "center"
    // justifyContent: "center"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 200,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    backgroundColor: colors.PRIMARY
  },
  buttonText: {
    color: "white",
    fontSize: 18
  }
});

export default AuthScreen;