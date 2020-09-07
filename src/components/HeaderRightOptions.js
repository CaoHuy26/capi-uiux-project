import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../constants/color';

const HeaderRightOptions = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ paddingRight: 8 }}>
        <MaterialIcons
          name='favorite-border'
          size={24}
          color={COLOR.neutral1}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons
          name='more-vert'
          size={24}
          color={COLOR.neutral1}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRightOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16
  }
});