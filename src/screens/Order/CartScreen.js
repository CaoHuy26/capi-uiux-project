import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

const CartScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>CartScreen</Text>
    </ScrollView>
  )
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16
  }
});