import React from 'react';
import { View, Text } from 'react-native';
import TextStyle from '../../../styles/TextStyle';
import FoodItem from './FoodItem';
import SpaceStyle from '../../../styles/SpaceStyle';

const FoodList = ({ title, datas }) => {
  return (
    <View style={SpaceStyle.container}>
      <Text style={[TextStyle.headline1, { marginTop: 20 }]}>
        {title}
      </Text>

      {
        datas.map(data => (
          <FoodItem
            key={data.id}
            {...data}
          />
        ))
      }
    </View>
  );
};

export default FoodList;

