import React from 'react';
import { StyleSheet } from 'react-native';
import Home from './screens/home.js';
import Cardio from './screens/cardioscreen.js';
import Muscletraining from './screens/musclebuilding.js';
import Foodtracking from './screens/foodtracking.js';
import { NavigationContainer, DefaultTheme, useTheme, DarkTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5.js';
const Tab = createMaterialBottomTabNavigator()


export default function App() {
    return (
      <NavigationContainer theme={navTheme}>
        <Tab.Navigator shifting={false}>
          <Tab.Screen options={{tabBarIcon: () => <Icon style={{marginTop: -1, marginRight: -1}} name="home" size={20} color="#fff" />}} inactiveColor="#fff" activeColor="#f0edf6" name="Home" component={Home}/>
          <Tab.Screen options={{tabBarIcon: () => <Icon style={{marginTop: -1, marginRight: -2}} name="running" size={20} color="#fff" />}} inactiveColor="#fff" activeColor="#f0edf6" name="Cardio" component={Cardio}/>
          <Tab.Screen options={{tabBarIcon: () => <Icon style={{marginTop: -1, marginRight: -1}} name="dumbbell" size={20} color="#fff" />}} inactiveColor="#fff" activeColor="#f0edf6" name="Muscle" component={Muscletraining}/>
          <Tab.Screen options={{tabBarIcon: () => <Icon style={{marginTop: -1, marginRight: -2}} name="apple-alt" size={20} color="#fff" />}} inactiveColor="#fff" activeColor="#f0edf6" name="Track food" component={Foodtracking}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
}

const navTheme = {
  dark: false,
  colors: {
    primary: 'rgb(20, 20, 20)',
  }
}
