import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search By Movie...'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fafafa",
    height: 45,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: "#737373",
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 24,
  },
  iconStyle: {
    fontSize: 26,
    alignSelf: "center",
    margin: 10,
  },
});

export default SearchBar;
