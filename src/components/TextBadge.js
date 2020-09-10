import React from 'react';
import { View, Text } from 'react-native';
import TextStyle from '../styles/TextStyle';

const TextBadge = ({ text, backgroundColor, textColor, style }) => {
  return (
    <View style={{
      backgroundColor: backgroundColor,
      paddingVertical: 4,
      paddingHorizontal: 12,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }}>
      <Text style={
        [TextStyle.body3, {
          color: textColor
        }]
      }>
        {text}
      </Text>
    </View>
  );
};

export default TextBadge;