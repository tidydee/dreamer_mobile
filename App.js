import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity , StyleSheet } from 'react-native';
import Icon from "@expo/vector-icons/Ionicons"; //TODO: replace with react-native-vector-icons library
import { colors } from './src/Styles/Styles';

import { createSwitchNavigator, 
         createStackNavigator, 
         createAppContainer, 
         createDrawerNavigator,
         createBottomTabNavigator,  } from "react-navigation";
import { Provider, connect } from 'react-redux';

import configureStore from './src/store/configureStore';
// import { isEditing, isAdding, addDream, getDreams, deleteDream, selectDream, deselectDream } from './src/store/actions/index';

import AuthScreen from './src/screens/Auth/Auth';
import EntriesScreen from "./src/screens/Entries/Entries";
// import DashboardScreen from "./src/screens/Dashboard/Dashboard";
import LexiconScreen from "./src/screens/Lexicon/Lexicon";
import SettingsScreen from "./src/screens/Settings/Settings";

const Entries = createStackNavigator({
  DashboardTabNavigator: {
    screen: EntriesScreen,
    navigationOptions: ({ navigation }) => {
      return {};
    }
  }
});

const Lexicon = createStackNavigator({
  DashboardTabNavigator: {
    screen: LexiconScreen
  }
});

const Settings = createStackNavigator({
  DashboardTabNavigator: {
    screen: SettingsScreen
  }
});

const DashboardTabNavigator = createBottomTabNavigator({
    Entries: {screen: Entries,
      navigationOptions:{
        tabBarLabel: 'Entries',
        tabBarIcon:({tintColor}) => (
          <Icon name='ios-list' color={tintColor} size={24} />
        )
      }
    },

    Lexicon: {screen: Lexicon,
      navigationOptions:{
        tabBarLabel: 'Lexicon',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-book' color={tintColor} size={24} />
        )
      }
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
      
    },
    tabBarOptions: {
      activeTintColor: colors.APP_NAV_ICON,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: colors.BOTTOM_TAB_BAR
      }
    },
  },
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: AuthScreen },
  Dashboard: { screen: DashboardTabNavigator }
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