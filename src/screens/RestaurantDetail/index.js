import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import VoucherCode from './components/VoucherCode';
import FavouriteFood from '../Home/components/FavouriteFood';
import FoodList from './components/FoodList';
import InfoRestaurantCard from './components/InfoRestaurantCard';

const fakeData1 = [
  {
    id: '1',
    name: 'Ếch Đồng Xào Măng Trúc',
    imageUrl: require('../../assets/img/food/food3.png'),
    ingredients: 'Măng trúc, Ếch đồng, Ớt siêu cay',
    price: '80.000đ'
  },
  {
    id: '2',
    name: 'Lẩu Cá Lăng Măng Cay',
    imageUrl: require('../../assets/img/food/food5.png'),
    ingredients: 'Cá Lăng, Măng cay, Ớt siêu cay',
    price: '80.000đ'
  },
  {
    id: '3',
    name: 'Dải Lợn Nướng',
    imageUrl: require('../../assets/img/food/food2.png'),
    ingredients: 'Thịt dải lợn, Tiêu, Ớt, Nước',
    price: '80.000đ'
  }
];

const fakeData2 = [
  {
    id: '1',
    name: 'Rượu Nếp Quê',
    imageUrl: require('../../assets/img/food/food3.png'),
    price: '50.000đ'
  },
  {
    id: '2',
    name: 'Rượu Ba Kích',
    imageUrl: require('../../assets/img/food/food5.png'),
    price: '50.000đ'
  }
];

const RestaurantDetailScreen = (props) => {
  const restaurantInfo = props.route.params;

  return (
    <ScrollView style={styles.container}>
      <InfoRestaurantCard restaurantInfo={restaurantInfo} />

      <VoucherCode />

      <FavouriteFood />

      <FoodList title='Món chính' datas={fakeData1} />

      <FoodList title='Rượu' datas={fakeData2} />
    </ScrollView>
  );
};

export default RestaurantDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  }
});