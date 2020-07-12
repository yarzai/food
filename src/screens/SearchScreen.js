import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAPI, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price = '$', '$$', '$$$'
    return results.filter((result) => result.price === price);
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(value) => setSearchTerm(value)}
        onSearchTermSubmit={() => searchAPI(searchTerm)}
      />
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
