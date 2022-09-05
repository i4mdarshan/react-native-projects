import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import AuthForm from "../components/AuthForm";

const SigninScreen = ({ navigation }) => {
  return (
    <>
      <FocusedStatusBar />
      <View style={styles.container}>
        <AuthForm
          cardTitle='Sign In'
          buttonTitle='Sign In'
          onSubmit={() => navigation.navigate("RestaurantList")}
          navText='Create an account ? Sign Up'
          navClick={() => {
            navigation.navigate("Signup");
          }}
        />
      </View>
    </>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
  animationTypeForReplace: "pop",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default SigninScreen;
