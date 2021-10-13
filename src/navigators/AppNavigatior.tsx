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
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
const ButtonTab = () => {
  return (
    <Stack.Navigator
      children={Object.keys(StackAppUser).map((elem, index) => {
        return (
          <Stack.Screen
            key={index}
            name={elem}
            component={StackAppUser[elem]}
          />
        );
      })}
    />
  );
};
const AppNavigatior = () => {
  return (
    <NavigationContainer>
      <ButtonTab />
    </NavigationContainer>
  );
};

export default AppNavigatior;
