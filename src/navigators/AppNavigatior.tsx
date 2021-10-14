import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import NavigationUtil from './NavigationUtil';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackAppUser from '../navigators/stack/StackAppUser';
import {SCREEN_ROUTER_APP} from '../utils/Constants';
const Button = createNativeStackNavigator();
const Tab = createNativeStackNavigator();
const Stack = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      children={Object.keys(StackAppUser).map((elem, index) => {
        return (
          <Tab.Screen key={index} name={elem} component={StackAppUser[elem]} />
        );
      })}
    />
  );
}
const AppNavigatior = () => {
  return (
    <NavigationContainer
      ref={ref => {
        NavigationUtil.setTopLevelNavigator(ref);
      }}>
      <HomeScreen />
    </NavigationContainer>
  );
};

export default AppNavigatior;
