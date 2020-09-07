import React from 'react';
import { ScrollView } from 'react-native';
import SearchHistory from './components/SearchHistory';
import PopularFood from './components/PopularFood';
import BigDeal from './components/BigDeal';

const SearchScreen = () => {
  return (
    <ScrollView>
      <SearchHistory />

      <PopularFood />

      <BigDeal />
    </ScrollView>
  );
};

export default SearchScreen;