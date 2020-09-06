import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../constants/color';

const HeaderSearchOptions = () => {
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

      <TouchableOpacity
        onPress={() => alert('Select options')}
      >
        <MaterialIcons name='tune' size={24} color={COLOR.neutral4} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSearchOptions;

const styles = StyleSheet.create({
  inputSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    flex: 1
  },
  inputSearch: {
    width: 276,
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
  }
});