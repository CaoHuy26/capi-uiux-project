import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../constants/color';

const HeaderSearch = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.inputSearchContainer}>
      <TouchableOpacity
        style={styles.inputSearch}
        onPress={() => navigation.navigate('Search')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name="ios-search"
            size={20}
            color={COLOR.neutral4}
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>
            Tìm kiếm
          </Text>
        </View>
      </TouchableOpacity>
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
    marginHorizontal: 16,
    flex: 1
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
  searchText: {
    flex: 1,
    color: COLOR.neutral3,
    fontSize: 12
  },
  locationName: {
    color: '#565656',
    marginRight: 4
  }
});