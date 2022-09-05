import React from "react";
import { Button, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

const RestaurantListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>RestaurantListScreen</Text>
      <Button
        title='Go to RestaurantDetail'
        onPress={() => navigation.navigate("RestaurantDetail")}
      />
    </View>
  );
};

export default RestaurantListScreen;

const styles = StyleSheet.create({});
