import React from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../constants/color';

const HeaderSearch = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16
      }}
    >
      <View
        style={{
          width: 264,
          height: 32,
          backgroundColor: '#fff',
          borderRadius: 6,
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 10,
          borderWidth: 1,
          borderRadius: 25,
          borderColor: COLOR.neutral3
        }}
      >
        <Ionicons
          name="ios-search"
          size={20}
          color={COLOR.neutral4}
          style={{ paddingHorizontal: 8, paddingLeft: 12 }}
        />
        <TextInput
          style={{
            flex: 1,
            height: 32
          }}
          placeholder="Tìm kiếm"
          placeholderTextColor={COLOR.neutral3}
          keyboardType="web-search"
          returnKeyType="done"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: '#565656', marginRight: 4 }}>
          Hà Nội
        </Text>
        <MaterialIcons name='keyboard-arrow-down' size={24} color='#565656' />
      </View>
    </View>
  );
};

export default HeaderSearch;