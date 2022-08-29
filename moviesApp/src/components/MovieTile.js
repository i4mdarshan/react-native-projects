import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const MovieTile = ({ details }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: IMAGE_URL + details.poster_path,
        }}
      />
      {/* <Text>Rating {details.vote_average.toFixed(2)}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 200,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});

export default MovieTile;
