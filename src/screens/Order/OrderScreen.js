import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OrderItem from './components/OrderItem';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <OrderItem />
    </View>
  )
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16
  }
});