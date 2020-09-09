import React from 'react';
import { View, Text } from 'react-native';
import SpaceStyle from '../../../styles/SpaceStyle';
import TextStyle from '../../../styles/TextStyle';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ title, datas }) => {
  return (
    <View
      style={[SpaceStyle.container, { marginTop: 18 }]}
    >
      <Text style={[TextStyle.headline1, { marginBottom: 8 }]}>
        {title}
      </Text>

      <View>
        {
          datas.map(data => (
            <RestaurantItem
              key={data.id}
              {...data}
            />
          ))
        }
      </View>
    </View>
  );
};

export default RestaurantList;