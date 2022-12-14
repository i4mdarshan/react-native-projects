import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import RestaurantCreateScreen from "./src/screens/RestaurantCreateScreen";
import RestaurantDetailScreen from "./src/screens/RestaurantDetailScreen";
import RestaurantListScreen from "./src/screens/RestaurantListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    restaurantListFlow: createStackNavigator({
      RestaurantList: RestaurantListScreen,
      RestaurantDetail: RestaurantDetailScreen,
    }),
    RestaurantCreate: RestaurantCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
