import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello This is Darshan Here !</Text>

      <Button
        title='Go to Counter'
        onPress={() => navigation.navigate("Counter")}
      />

      <Button
        title='Go to Color'
        onPress={() => navigation.navigate("Color")}
      />

      <Button
        title='Go to Text Demo'
        onPress={() => navigation.navigate("TextScr")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
