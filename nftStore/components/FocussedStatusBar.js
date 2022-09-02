import React from "react";
import { Platform, StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocussedStatusBar = (props) => {
  const isFocussed = useIsFocused();
  if (Platform.OS === "android") {
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle("default");
  } else {
    StatusBar.setBarStyle("dark-content");
  }

  return isFocussed ? <StatusBar animated={true} {...props} /> : null;
};

export default FocussedStatusBar;

// const styles = StyleSheet.create({})
