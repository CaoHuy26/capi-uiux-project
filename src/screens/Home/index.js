import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Swiper from './components/Swiper';
import Category from './components/Category';
import FavouriteFood from './components/FavouriteFood';
import CurrentLocation from './components/CurrentLocation';
import RestaurantList from './components/RestaurantList';

const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <CurrentLocation />
      
      <Swiper />

      <Category />

      <FavouriteFood />

      <RestaurantList title='Nhà hàng' />

      <RestaurantList title='Cửa hàng thực phẩm' />
    </ScrollView>
  )
};

export default HomeScreen;