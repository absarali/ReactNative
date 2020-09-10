import HomeScreen from './screens/HomeScreen'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation'
import TextScreen from './screens/TextScreen'
const navigator = createStackNavigator({
  Home: HomeScreen,
  TxtInput: TextScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'App'
  }
});
export default createAppContainer(navigator);