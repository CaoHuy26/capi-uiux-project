import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const Swiper = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Image
        style={{
          marginLeft: 16,
          width: 344,
          height: 134
        }}
        source={require('../../../assets/img/banner/banner1.png')}
      />
      <Image
        style={{
          marginLeft: 8,
          width: 344,
          height: 134
        }}
        source={require('../../../assets/img/banner/banner2.png')}
      />
    </ScrollView>
  );
};

export default Swiper;