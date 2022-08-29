import React from "react";
import { View, Image, StyleSheet } from "react-native";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const PersonTile = ({ details }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: IMAGE_URL + details.profile_path,
        }}
      />
      {/* <Text>Rating {details.vote_average.toFixed(2)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    borderRadius: 100,
    marginHorizontal: 5,
  },
});

export default PersonTile;
