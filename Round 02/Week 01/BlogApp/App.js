import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from './context/BlogContext';
import Index from './screens/Index';
import Screen from './screens/ShowScreen';
import Create from './screens/CreateScreen';
import Edit from './screens/EditBlogs';
const navigator = createStackNavigator(
  {
    Home: Index,
    ShowScreen: Screen,
    CreateScreen: Create,
    EditScreen: Edit,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'MyBlogApp',
    },
  },
);
const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
