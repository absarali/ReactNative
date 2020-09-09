import Add from './screens/Add'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation'
const navigator = createStackNavigator({
  Home: Add
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'App'
  }
});
export default createAppContainer(navigator);