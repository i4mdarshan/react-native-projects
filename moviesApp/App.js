import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    SearchMovie: SearchScreen,
  },
  {
    initialRouteName: "SearchMovie",
    defaultNavigationOptions: {
      title: "Movies Search",
    },
  }
);

export default createAppContainer(navigator);
