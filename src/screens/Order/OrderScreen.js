import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import OrderItem from './components/OrderItem';

const datas = [
  {
    id: '1',
    name: 'Dâu tây',
    imageUrl: require('../../assets/img/food/noti1.png'),
    address: 'Số 13, Phố Huế, Hai Bà Trưng, Hà Nội',
    rating: 5,
    price: '80.000đ',
    numberOfItem: 1
  },
  {
    id: '2',
    name: 'Rau xanh',
    imageUrl: require('../../assets/img/food/noti2.png'),
    address: 'Số 13, Phố Huế, Hai Bà Trưng, Hà Nội',
    rating: 5,
    price: '20.000đ/Kg',
    numberOfItem: 2
  }
];

const OrderScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {
        datas.map(data => (
          <OrderItem
            key={data.id}
            {...data}
          />
        ))
      }
    </ScrollView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16
  }
});