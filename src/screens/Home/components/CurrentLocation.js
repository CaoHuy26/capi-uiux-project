import React from 'react';
import { View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../../../constants/color';

const CurrentLocation = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 12
      }}
    >
      <MaterialIcons name='location-on' size={16} color={COLOR.accent3} />
      <Text
        style={{
          color: '#898989',
          fontSize: 12,
          marginLeft: 4
        }}
      >
        Số 29, ngõ 138 Mễ Trì Thượng, Quận Nam Từ Liêm, Hà Nội
      </Text>
    </View>
  );
};

export default CurrentLocation;