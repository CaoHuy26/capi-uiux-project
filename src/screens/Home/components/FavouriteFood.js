import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import TextStyle from '../../../styles/TextStyle';
import RatingStar from '../../../components/RatingStar';

const favouriteFoods = [
  {
    id: '1',
    url: require('../../../assets/img/food/Favorite/food1.png'),
    name: 'Ốc Nước Tiêu Xanh',
    rate: '5/5',
    price: '80.000đ'
  },
  {
    id: '2',
    url: require('../../../assets/img/food/Favorite/food2.png'),
    name: 'Cá Rô Phi Chiên Xù',
    rate: '5/5',
    price: '50.000đ'
  },
  {
    id: '3',
    url: require('../../../assets/img/food/Favorite/food3.png'),
    name: 'Bánh Xèo Nam Bộ',
    rate: '5/5',
    price: '80.000đ'
  }
];

const FavouriteFoodItem = ({ favouriteFood }) => {
  return (
    <View style={styles.favouriteFoodItem}>
      <Image source={favouriteFood.url} />

      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 6
        }}
      >
        <Text style={TextStyle.headline3}>
          {favouriteFood.name}
        </Text>
        <View
          style={{
            marginTop: 4,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RatingStar />
            <Text style={{ paddingLeft: 2, fontSize: 12 }}>5/5</Text>
          </View>
          <View>
            <Text style={TextStyle.headline3}>
              {favouriteFood.price}
            </Text>
          </View>
        </View>
      </View>
      
      <View
        style={{
          position: 'absolute',
          top: 8,
          right: 8
        }}
      >
        <MaterialIcons name='favorite-border' size={24} color='#EB5757' />
      </View>
    </View>
  );
};

const FavouriteFood = () => {
  return (
    <View style={{ marginTop: 18 }}>
      <Text style={[TextStyle.headline1, { marginLeft: 16, marginBottom: 10 }]}>
        Món ăn yêu thích
      </Text>
      
      <ScrollView
        style={{ flexDirection: 'row' }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          favouriteFoods.map(favouriteFood => (
            <FavouriteFoodItem
              key={favouriteFood.id}
              favouriteFood={favouriteFood}
            />
          ))
        }
      </ScrollView>
      
    </View>
  );
};

export default FavouriteFood;

const styles = StyleSheet.create({
  favouriteFoodItem: {
    width: 136,
    height: 160,
    marginLeft: 16,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1, 
    backgroundColor: '#fff'
  }
});