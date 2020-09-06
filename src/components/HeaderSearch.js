import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../constants/color';

const HeaderSearch = () => {
  return (
    <View style={styles.inputSearchContainer}>
      <View style={styles.inputSearch}>
        <Ionicons
          name="ios-search"
          size={20}
          color={COLOR.neutral4}
          style={styles.searchIcon}
        />
        <TextInput
          style={{ flex: 1 }}
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
        <Text style={styles.locationName}>
          Hà Nội
        </Text>
        <MaterialIcons name='keyboard-arrow-down' size={24} color='#565656' />
      </View>
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  inputSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16
  },
  inputSearch: {
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
  },
  searchIcon: {
    paddingHorizontal: 8,
    paddingLeft: 12
  },
  locationName: {
    color: '#565656',
    marginRight: 4
  }
});