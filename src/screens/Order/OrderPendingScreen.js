import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import OrderPendingItem from './components/OrderPendingItem';

const OrderPendingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <OrderPendingItem />
    </ScrollView>
  )
};

export default OrderPendingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16
  }
});