import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../constants/color';

const HeaderBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginLeft: 8 }}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons
        name='chevron-left'
        size={34}
        color={COLOR.neutral1}
      />
    </TouchableOpacity>
  );
};

export default HeaderBackButton;