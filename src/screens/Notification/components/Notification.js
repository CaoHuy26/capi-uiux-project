import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import TextStyle from '../../../styles/TextStyle';

const Notification = ({ name, message, status, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.notificationImage}
        source={imageUrl}
      />
      <View style={{ flex: 1, marginVertical: 8, justifyContent: 'space-between' }}>
        <Text style={TextStyle.headline3}>
          {name}
        </Text>
        <Text style={TextStyle.body4}>
          {message}
        </Text>
        <Text style={TextStyle.body4}>
          {status}
        </Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    height: 68,
    backgroundColor: '#fff',
    marginTop: 16,
    borderRadius: 10,
    flexDirection: 'row'
  },
  notificationImage: {
    width: 56,
    height: 56,
    marginVertical: 6,
    marginHorizontal: 8
  }
});