import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from "@expo/vector-icons/Ionicons"; //TODO: replace with react-native-vector-icons library

import { createSwitchNavigator, 
         createStackNavigator, 
         createAppContainer, 
         createDrawerNavigator,
         createBottomTabNavigator,  } from "react-navigation";
import { Provider, connect } from 'react-redux';

import configureStore from './src/store/configureStore';
// import { isEditing, isAdding, addDream, getDreams, deleteDream, selectDream, deselectDream } from './src/store/actions/index';

import AuthScreen from './src/screens/Auth/Auth';
import Entries from "./src/screens/Entries/Entries";
import DashboardScreen from "./src/screens/Dashboard/Dashboard";
import Feed from "./src/screens/Feed/Feed";
import Profile from "./src/screens/Profile/Profile";
import Settings from "./src/screens/Settings/Settings";

const DashboardTabNavigator = createBottomTabNavigator({
  Entries,
  Profile,
  Settings
},{
  navigationOptions:({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index]
    return {
      headerTitle: routeName
    }
  }
});

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
// },{
//   defaultNavigationOptions:({navigation}) => {
//     return{
//       // headerLeft: (
//       //   <Icon 
//       //     style={{ paddingLeft: 10 }}
//       //     onPress={() => navigation.openDrawer()}
//       //     name="md-menu" 
//       //     size={30} 
//       //   />),
//       headerRight: (
//         <Icon
//           style={{ paddingRight: 10 }}
//           onPress={() => alert("Hello")}
//           name="md-add"
//           size={30}
//         />
//       )}
//   }
});

//For when I Need a drawerNav. Then Pass into AppSwitchNavigator.
// const AppDrawerNavigator = createDrawerNavigator({
//   Dashboard: {
//     screen: DashboardStackNavigator
//   }
// });

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: AuthScreen },
  Dashboard: { screen: DashboardStackNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator)

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;