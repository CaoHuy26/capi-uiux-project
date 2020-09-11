import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CartItem from './components/CartItem';

const CartScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CartItem
        restaurantName='Quán bún Hà Nội'
        address='Số 13, Phố Huế, Hai Bà Trưng'
      />
      <CartItem
        restaurantName='Quán bún Hà Nội'
      />
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