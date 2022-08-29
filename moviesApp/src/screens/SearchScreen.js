import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import SearchBar from "../components/SearchBar";
import tmdb from "../api/tmdb";
import ResultsList from "../components/ResultsList";
import PersonsList from "../components/PersonsList";
import SearchResults from "../components/SearchResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [trendingPerson, setTrendingPerson] = useState([]);
  const [trendingAll, setTrendingAll] = useState([]);
  const [trendingThisWeek, setTrendingThisWeek] = useState([]);

  const movieSearchApi = async () => {
    try {
      const response = await tmdb.get("/search/movie", {
        params: {
          query: term,
        },
      });

      setMoviesList(response.data.results);
      setErrorMessage(null);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  const getTrending = async (mediaType, timeWindow) => {
    try {
      const response = await tmdb.get(`/trending/${mediaType}/${timeWindow}`);
      setErrorMessage(null);
      switch (mediaType) {
        case "person":
          setTrendingPerson(
            response.data.results.filter(
              (person) => person.profile_path != null
            )
          );
          break;
        case "all":
          setTrendingAll(response.data.results);
          break;
        case "movie":
          setTrendingThisWeek(response.data.results);
        default:
          break;
      }
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    getTrending("person", "day");
    getTrending("all", "week");
    getTrending("movie", "week");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          if (term === "") {
            setMoviesList([]);
            return;
          }

          if (term != "" && term.length > 2) {
            movieSearchApi();
            setErrorMessage(null);
          }
        }}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <ScrollView>
        {term === "" && (
          <View>
            <ResultsList title='Trending' results={trendingAll} />
            <PersonsList title='Actors' results={trendingPerson} />
            <ResultsList title='Movies this Week' results={trendingThisWeek} />
          </View>
        )}
        {term != "" ? (
          <SearchResults
            results={moviesList.filter((item) => item.poster_path != null)}
          />
        ) : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 14,
    color: "red",
    textAlign: "center",
    marginTop: 5,
  },
  titleStyles: {
    fontSize: 28,
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 8,
  },
});

export default SearchScreen;
