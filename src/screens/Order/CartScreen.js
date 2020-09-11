import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import COLOR from '../../constants/color';
import CartItem from './components/CartItem';

const CartScreen = () => {
  const navigation = useNavigation();
  
  return (
    <ScrollView style={styles.container}>
      <CartItem
        restaurantName='Quán bún Hà Nội'
        address='Số 13, Phố Huế, Hai Bà Trưng'
      />
      <CartItem
        restaurantName='Quán bún Hà Nội'
      />

      <View
        style={{
          alignItems: 'center',
          marginTop: 16
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLOR.accent1,
            width: 128,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 14,
              fontWeight: 'bold'
            }}
          >
            Thanh toán
          </Text>
        </TouchableOpacity>
      </View>
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