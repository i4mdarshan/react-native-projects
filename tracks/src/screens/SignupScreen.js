import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title='Go to SignIn'
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title='Go to MainFlow'
        onPress={() => navigation.navigate("TrackList")}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
