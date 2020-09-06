import HomeScreen from './HomeScreen'
import ComponentsScreen from './ComponentsScreen'
import ImagesScreen from './ImagesScreen'
import { createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
const navigator = createStackNavigator(
  {
  Home: HomeScreen,
  Components: ComponentsScreen,
  ImgScreen: ImagesScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'App'
  }
}
);
export default createAppContainer(navigator);