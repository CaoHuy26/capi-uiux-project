import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../../../constants/color';
import TextStyle from '../../../styles/TextStyle';

const RowAction = ({ title, iconName, action }) => (
  <TouchableOpacity style={styles.userAction}>
    <MaterialIcons
      style={{ marginRight: 8 }}
      name={iconName}
      size={18}
      color={COLOR.neutral1}
    />
    <Text style={TextStyle.title2}>
      {title}
    </Text>
    <MaterialIcons
      style={{ position: 'absolute', right: 16 }}
      name='keyboard-arrow-right'
      size={24}
      color={COLOR.neutral1}
    />
  </TouchableOpacity>
);

const UserSettings = () => {
  return (
    <View>
      <RowAction
        title='Thông tin tài khoản'
        iconName='account-circle'
      />
      <RowAction
        title='Cài đặt'
        iconName='settings'
      />
      <RowAction
        title='Đăng xuất'
        iconName='keyboard-return'
      />
    </View>
  );
};

export default UserSettings;

const styles = StyleSheet.create({
  userAction: {
    height: 40,
    backgroundColor: '#EBEBEB',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8
  }
});