import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.userAvatar}>
        <Image source={require('../../../assets/img/user.png')} />
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  userAvatar: {
    width: 126,
    height: 126,
    // backgroundColor: '#FFC690',
    borderRadius: 100,
    marginVertical: 16,
  }
});