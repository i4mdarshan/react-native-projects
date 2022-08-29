import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailsScreen from "./src/screens/DetailsScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    SearchMovie: SearchScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "SearchMovie",
    defaultNavigationOptions: {
      title: "Movies Search",
    },
  }
);

export default createAppContainer(navigator);
