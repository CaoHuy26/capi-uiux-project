import React from 'react';
import { View, Text } from 'react-native';
import SpaceStyle from '../../../styles/SpaceStyle';
import TextStyle from '../../../styles/TextStyle';

const Restaurant = () => {
  return (
    <View
      style={SpaceStyle.container}
    >
      <Text style={[TextStyle.headline1]}>
        Nhà hàng
      </Text>
    </View>
  );
};

export default Restaurant;