import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import MovieTile from "./MovieTile";
import { withNavigation } from 'react-navigation';
const ResultsList = ({ title, results, navigation }) => {
  // console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyles}>{title}</Text>
      {/* <Text>Showing Results {results.length}</Text> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results.sort(() => Math.random() - 0.5)}
        keyExtractor={ result  => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details',{
                type:"movie",
                id:item.id
              })}
            >
              <MovieTile details={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginRight: 10,
  },
  titleStyles: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 10,
  },
});

export default withNavigation(ResultsList);
