import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const OrderHistoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>OrderHistoryScreen</Text>
    </ScrollView>
  )
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16
  }
});