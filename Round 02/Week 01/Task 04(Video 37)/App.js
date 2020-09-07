import HomeScreen from './HomeScreen'
import { createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
const navigator = createStackNavigator(
  {
  Home: HomeScreen,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'App'
  }
});
export default createAppContainer(navigator);
