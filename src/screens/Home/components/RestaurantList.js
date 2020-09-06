import React from 'react';
import { View, Text } from 'react-native';
import SpaceStyle from '../../../styles/SpaceStyle';
import TextStyle from '../../../styles/TextStyle';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ title }) => {
  return (
    <View
      style={[SpaceStyle.container, { marginTop: 18 }]}
    >
      <Text style={[TextStyle.headline1]}>
        {title}
      </Text>

      <View>
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </View>
    </View>
  );
};

export default RestaurantList;