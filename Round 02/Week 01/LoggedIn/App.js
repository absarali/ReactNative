import firebase from "firebase";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import EditProfile from "./screens/EditProfile";
import Welcome from "./screens/Welcome";
const config = {
 
};
firebase.initializeApp(config);
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    In: SignIn,
    Up: SignUp,
    Hello: Welcome,
    Edit: EditProfile,
  },
  {
   initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App",
    },
  }
);
export default createAppContainer(navigator);
