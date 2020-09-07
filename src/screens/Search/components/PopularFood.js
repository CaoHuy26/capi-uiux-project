import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TextStyle from '../../../styles/TextStyle';
import COLOR from '../../../constants/color';

const Food = ({ name, imageUrl }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8
      }}
    >
      <Image
        style={{
          width: 56,
          height: 56
        }}
        source={imageUrl ? imageUrl : require('../../../assets/img/food/food1.png')}
      />
      <Text style={[TextStyle.body1, { paddingLeft: 12 }]}>
        {name}
      </Text>
    </View>
  );
};

const Line = () => (
  <View
    style={{
      borderWidth: 0.6,
      borderColor: COLOR.neutral5
    }}
  />
);

const PopularFood = () => {
  return (
    <View style={styles.container}>
      <Text style={[TextStyle.headline1, styles.title]}>
        Phổ biến
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <Food name='Cơm trưa' imageUrl={require('../../../assets/img/food/food1.png')} />
        <Food name='Sinh Tố' imageUrl={require('../../../assets/img/food/food6.png')} />
      </View>

      <Line />

      <View style={{ flexDirection: 'row' }}>
        <Food name='Ăn Vặt' imageUrl={require('../../../assets/img/food/food3.png')} />
        <Food name='Bún' imageUrl={require('../../../assets/img/food/food2.png')} />
      </View>

      <Line />

      <View style={{ flexDirection: 'row', paddingBottom: 8 }}>
        <Food name='Thịt Lợn' imageUrl={require('../../../assets/img/food/food4.png')} />
        <Food name='Rau Củ' imageUrl={require('../../../assets/img/food/food5.png')} />
      </View>

    </View>
  );
};

export default PopularFood;

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