import firebase from "firebase";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import EditProfile from "./screens/EditProfile";
import Welcome from "./screens/Welcome";
const config = {
  apiKey: "AIzaSyBSS3Y_vfraDPQMNX4Hc-xI_9l3Kn6DStM",
  authDomain: "fir-auth-55a5b.firebaseapp.com",
  databaseURL: "https://fir-auth-55a5b.firebaseio.com",
  projectId: "fir-auth-55a5b",
  storageBucket: "fir-auth-55a5b.appspot.com",
  messagingSenderId: "1034333511697",
  appId: "1:1034333511697:web:625036f51991c1771e11b0",
  measurementId: "G-YW620CFC6B",
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
