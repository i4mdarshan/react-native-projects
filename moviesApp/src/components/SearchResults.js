import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import SearchResultsTile from "./SearchResultsTile";

const SearchResults = ({ results, navigation }) => {
  return (
    <View style={styles.container}>
      {(results.length > 0) ? (
        <View>
          <Text style={styles.titleStyles}>Search Results</Text>
          <FlatList
            numColumns={3}
            contentContainerStyle={styles.flatListStyle}
            data={results.sort(() => Math.random() - 0.5)}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Details',{
                    type:"movie",
                    id:item.id
                  })}
                >
                  <SearchResultsTile details={item} />
                </TouchableOpacity>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) 
      :
      <Text style={styles.titleStyles}>No Results Found</Text>
    }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  titleStyles: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 8,
  },
  flatListStyle: {
    justifyContent: "space-between",
    alignItems:"center"
  },
});

export default withNavigation(SearchResults);
