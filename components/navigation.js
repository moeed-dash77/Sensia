import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./Home";
import CreateDoc from "./CreateDoc";

const AuthStack = {
  Home: {
    screen: Home,
  },
  CreateDoc: {
    screen: CreateDoc,
  },
  initialRouteName: "Home",
};

const HomeStack = createStackNavigator(AuthStack);

export default createAppContainer(HomeStack);
