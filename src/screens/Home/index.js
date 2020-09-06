import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Swiper from './components/Swiper';
import Category from './components/Category';
import FavouriteFood from './components/FavouriteFood';
import CurrentLocation from './components/CurrentLocation';
import RestaurantList from './components/RestaurantList';

const restaurants = [
  {
    id: '1',
    name: 'Pao Quán',
    imageUrl: require('../../assets/img/food/food1.png'),
    address: 'Ngõ 62 Trần Thái Tông, Cầu Giấy, Hà Nội',
    distance: '3.5km',
    time: '30 phút',
    rating: 5
  },
  {
    id: '2',
    name: 'Đặc sản Miền Trung',
    imageUrl: require('../../assets/img/food/food2.png'),
    address: 'Số 35 Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
    distance: '3.5km',
    time: '20 phút',
    rating: 5
  },
  {
    id: '3',
    name: 'Bánh cuốn nóng gà Tần 381',
    imageUrl: require('../../assets/img/food/food3.png'),
    address: 'Số 381, Phố Đội Cấn, Ba Đình, Hà Nội',
    distance: '6.6km',
    time: '30 phút',
    rating: 5
  }
];

const foodStores = [
  {
    id: '4',
    name: 'Bác Tôm',
    imageUrl: require('../../assets/img/food/food4.png'),
    address: 'A15 liền kề 6A Mỗ Lao, quận Hà Đông, Hà Nội',
    distance: '3.5km',
    time: '20 phút',
    rating: 5
  },
  {
    id: '5',
    name: 'Top Green',
    imageUrl: require('../../assets/img/food/food5.png'),
    address: 'Số 16 Hoàng Sâm, Cầu Giấy, Hà Nội',
    distance: '6.6km',
    time: '30 phút',
    rating: 5
  },
  {
    id: '6',
    name: 'Bánh cuốn nóng gà Tần 381',
    imageUrl: require('../../assets/img/food/food6.png'),
    address: '5/299 Tây Sơn, Ngã Tư Sở, Thanh Xuân, Hà Nội',
    distance: '3.5km',
    time: '20 phút',
    rating: 5
  }
];

const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <CurrentLocation />
      
      <Swiper />

      <Category />

      <FavouriteFood />

      <RestaurantList title='Nhà hàng' datas={restaurants} />

      <RestaurantList title='Cửa hàng thực phẩm' datas={foodStores} />
    </ScrollView>
  )
};

export default HomeScreen;