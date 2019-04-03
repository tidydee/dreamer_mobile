import React from 'react';
import { } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import EntriesScreen from "../Entries/Entries";
import AddDreamScreen from "../AddDream/AddDream";

const TabNavigator = createBottomTabNavigator({
  Entries: EntriesScreen,
  AddDream: AddDreamScreen
});

export default createAppContainer(TabNavigator);