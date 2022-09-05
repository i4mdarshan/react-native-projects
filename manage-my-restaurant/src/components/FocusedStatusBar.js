import React from "react";
import { Platform, StatusBar } from "react-native";
import { withNavigationFocus } from "react-navigation";

const FocusedStatusBar = (props) => {
  if (Platform.OS === "android") {
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle("dark-content");
  } else {
    StatusBar.setBarStyle("dark-content");
  }

  return props.isFocussed ? <StatusBar animated={true} {...props} /> : null;
};

export default withNavigationFocus(FocusedStatusBar);
