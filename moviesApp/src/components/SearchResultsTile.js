import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const SearchResultsTile = ({ details }) => {
  return (
    <View style={{ alignSelf: "stretch" }}>
      <Image
        style={styles.image}
        source={{
          uri: IMAGE_URL + details.poster_path,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 200,
    borderRadius: 15,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default SearchResultsTile;
