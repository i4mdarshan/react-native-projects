import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import PersonTile from "./PersonTile";

const PersonsList = ({ title, results, navigation }) => {
  // console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyles}>{title}</Text>
      <FlatList
        horizontal
        data={results.sort(() => Math.random() - 0.5)}
        keyExtractor={(result) => result.name}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details',{
                type:"person",
                id:item.id
              })}
            >
              <PersonTile details={item} />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  titleStyles: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 5,
  },
});

export default withNavigation(PersonsList);
