import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextStyle from '../../../styles/TextStyle';
import RestaurantItem from '../../Home/components/RestaurantItem';

const fakeData1 = {
  name: 'Combo Gia Đình-Pao Quán',
  imageUrl: require('../../../assets/img/food/food1.png'),
  address: 'Ngõ 62 Trần Thái Tông, Cầu Giấy, Hà Nội',
  discountPercent: 20
};

const fakeData2 = {
  name: 'Bưởi Năm Roi - Bác Tôm',
  imageUrl: require('../../../assets/img/food/food7.png'),
  address: 'Ngõ 62 Trần Thái Tông, Cầu Giấy, Hà Nội',
  discountPercent: 30
};

const BigDeal = () => {
  return (
    <View style={styles.container}>
      <Text style={[TextStyle.headline1, styles.title]}>
        Ưu đãi lớn
      </Text>

      <RestaurantItem {...fakeData1}/>
      <RestaurantItem {...fakeData2}/>
    </View>
  );
};

export default BigDeal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: 6
  },
  title: {
    paddingVertical: 12
  }
})