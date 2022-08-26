import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ColorScreen from './src/screens/ColorScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Counter: CounterScreen,
    Color: ColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
