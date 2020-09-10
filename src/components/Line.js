import React from 'react';
import { View } from 'react-native';
import COLOR from '../constants/color';

const Line = ({ color, opacity, style }) => (
  <View
    style={{
      borderWidth: 0.6,
      borderColor: color ? color : COLOR.neutral5,
      opacity: opacity ? opacity : null,
      ...style
    }}
  />
);

export default Line;