import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import SignupScreen from './screens/SignupScreen';
import SigninScreen from './screens/SigninScreen';
import TrackListScreen from './screens/TrackListScreen';
import TrackDetailScreen from './screens/TrackDetailScreen';
import AccountScreen from './screens/AccountScreen';
import TrackCreateScreen from './screens/TrackCreateScreen';
import ResolveAuthScreen from './screens/ResolveAuthScreen'
import {Provider as AuthProvider} from './screens/context/AuthContext';
import {setNavigator} from './screens/navigationRef';
const switchNavigator = createSwitchNavigator({
  ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignIn: SigninScreen,
    SignUp: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});
const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
