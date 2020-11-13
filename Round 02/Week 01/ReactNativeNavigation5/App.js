import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenOne from './screens/BottomTabsNavigator/ScreenOne';
import ScreenTwo from './screens/BottomTabsNavigator/ScreenTwo';
import ScreenThree from './screens/BottomTabsNavigator/ScreenThree';
import StackScreenOne from './screens/StackNavigator/StackScreenOne';
import StackScreenTwo from './screens/StackNavigator/StackScreenTwo';
import StackScreenThree from './screens/StackNavigator/StackScreenThree';
import IndexScreen from './screens/StackNavigator/IndexScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const StackScreen = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name="IndexScreen" component={IndexScreen} options={{headerShown: false}}/>
      <Stack.Screen name="StackScreenOne" component={StackScreenOne} options={{headerShown: false}}/>
      <Stack.Screen name="StackScreenTwo" component={StackScreenTwo} options={{headerShown: false}}/>
      <Stack.Screen name="StackScreenThree" component={StackScreenThree} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};
const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      <Tab.Screen name="ScreenThree" component={ScreenThree} />
    </Tab.Navigator>
  );
};
export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="IndexScreen" component={StackScreen} options={{title: 'Stack Navigation'}}/>
        <Drawer.Screen name="ScreenOne" component={BottomTabsNavigator} options={{title: 'Tab Navigation'}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
