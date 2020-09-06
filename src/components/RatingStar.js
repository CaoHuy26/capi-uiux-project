import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import COLOR from '../constants/color';

const RatingStar = ({ disable }) => {
  return (
    <Ionicons
      name='ios-star'
      size={16}
      color={
        disable
          ? COLOR.accent4 
          : COLOR.accent3
      }
    />
  );
};

export default RatingStar;