import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../../../constants/color';

const CurrentLocation = () => {
  return (
    <View style={styles.currentLocationContainer}>
      <MaterialIcons
        name='location-on'
        size={16}
        color={COLOR.accent3}
      />
      <Text style={styles.currentLocationText}>
        Số 29, ngõ 138 Mễ Trì Thượng, Quận Nam Từ Liêm, Hà Nội
      </Text>
    </View>
  );
};

export default CurrentLocation;

const styles = StyleSheet.create({
  currentLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 12
  },
  currentLocationText: {
    color: COLOR.neutral4,
    fontSize: 12,
    marginLeft: 4
  }
});