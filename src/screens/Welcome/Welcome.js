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
        <Image
          // resizeMode="cover"
          source={require('../../assets/welcome.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.loginForm}>
            <Button title="Explore" onPress={this.loginHandler} />
            {/* <Button
              title="Sign Up"
              onPress={() => alert("Sign Up to come later")}
            /> */}
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  loginForm: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
});

export default Welcome;
