import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import tmdb from "../api/tmdb";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const DetailsScreen = ({ navigation }) => {
  const type = navigation.getParam("type");
  const id = navigation.getParam("id");
  const [movieDetail, setMovieDetail] = useState(null);
  const dimensions = useWindowDimensions();
  const imageHeight = Math.round((dimensions.width * 15) / 16);
  const imageWidth = dimensions.width;

  const getMovieDetail = async () => {
    try {
      const response = await tmdb.get(`/movie/${id}`);
      setMovieDetail(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <View>
      {movieDetail === null ? (
        <Text style={styles.titleStyles}>Loading...</Text>
      ) : (
        <>
          <View style={styles.imgContainer}>
            <ScrollView>
                <View style={{ flex:1}}>
                    <Image
                    style={{
                    resizeMode: "contain",
                    width: imageHeight,
                    height: imageWidth,
                    marginHorizontal: 10,
                    marginVertical: 20,
                    borderRadius: 25,
                    //   resizeMode: "contain",
                    alignSelf: "center",
                    }}
                    source={{ uri: IMAGE_URL + movieDetail.backdrop_path }}
                />
                <Text style={styles.movieTitle}>
                    {movieDetail.original_title}
                </Text>
                <Text style={styles.movieDescription}>
                    {movieDetail.overview}
                </Text>
                <View style={styles.statsStyleContainer}>
                    <View style={styles.statsStyle}>
                    <Feather name='heart' style={styles.iconStyle} />
                    <Text style={styles.statsText}>
                        {Math.round(movieDetail.popularity)}
                    </Text>
                    </View>
                    <View style={styles.statsStyle}>
                    <Feather name='hash' style={styles.iconStyle} />
                    <Text style={styles.statsText}>{movieDetail.vote_count}</Text>
                    </View>
                    <View style={styles.statsStyle}>
                    <Feather name='divide-square' style={styles.iconStyle} />
                    <Text style={styles.statsText}>
                        {movieDetail.vote_average.toFixed(2)}
                    </Text>
                    </View>
                </View>
                </View>
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyles: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 10,
    marginTop: 20,
  },
  imgContainer: {
    flex: 1,
    alignSelf: "center",
    marginBottom: 20,
    position: "absolute",
  },
  movieTitle: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 25,
    marginRight: 25,
    alignSelf: "flex-start",
  },
  movieDescription: {
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 25,
    marginRight: 25,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 34,
    marginBottom: 10,
    alignSelf: "center",
  },
  statsStyleContainer: {
    flexDirection: "row",
    marginHorizontal: 8,
    marginVertical: 10,
    justifyContent: "space-around",
  },
  statsStyle: {
    borderWidth: 3,
    borderColor: "#d3d3d3",
    borderRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  statsText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default DetailsScreen;
