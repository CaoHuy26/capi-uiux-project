import React, { useCallback } from 'react';
import { View, StyleSheet, Button , TextInput} from 'react-native';
import COLOR from '../../../constants/color';

const FormInfo = () => {
  const updateProfile = useCallback(() => {
    alert('Update Profile');
  }, []);

  return (
    <View>
      <TextInput
        style={styles.inputText}
        placeholder='Họ và tên'
        value='Hoàng Thị Nhung'
      />
      <TextInput
        style={styles.inputText}
        placeholder='Giới tính'
      />
      <TextInput
        style={styles.inputText}
        placeholder='Ngày, tháng, năm sinh'
      />
      <TextInput
        style={styles.inputText}
        placeholder='Đia chi liên hệ'
      />
      <TextInput
        style={styles.inputText}
        placeholder='Số điện thoại'
      />

      <View style={styles.buttonUpdate}>
        <Button
          color={COLOR.neutral2}
          title='Cập nhật'
          onPress={() => updateProfile()}
        />
      </View>
    </View>
  );
};

export default FormInfo;

const styles = StyleSheet.create({
  inputText: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR.neutral5,
    padding: 12,
    marginTop: 8,
  },
  buttonUpdate: {
    backgroundColor: COLOR.accent1,
    borderRadius: 5,
    marginVertical: 16
  }
});