import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import OrderPendingItem from './components/OrderPendingItem';

const datas = [
  {
    id: 'ABC123456',
    name: 'Cá basa',
    imageUrl: require('../../assets/img/food/noti1.png'),
    address: '345 Hoàng Quốc Việt, Hà Nội',
    rating: 5,
    price: '150.000đ',
    numberOfItem: 1
  },
  {
    id: 'ABC123457',
    name: 'Cá basa',
    imageUrl: require('../../assets/img/food/noti1.png'),
    address: '345 Hoàng Quốc Việt, Hà Nội',
    rating: 5,
    price: '150.000đ',
    numberOfItem: 1
  },
];

const OrderPendingScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {
        datas.map(data => (
          <OrderPendingItem
            key={data.id}
            {...data}
          />
        ))
      }
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