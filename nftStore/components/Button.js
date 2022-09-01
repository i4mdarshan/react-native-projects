import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const CircleButton = ({ imageURL, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        height: 40,
        width: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imageURL}
        resizeMode='contain'
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, font, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: font,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export default Button = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
