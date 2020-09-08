import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import TextStyle from '../../../styles/TextStyle';
import SpaceStyle from '../../../styles/SpaceStyle';
import COLOR from '../../../constants/color';
import RatingStar from '../../../components/RatingStar';

const InfoRestaurantCard = ({ restaurantInfo }) => {
  const {
    id,
    name,
    imageUrl,
    address,
    rating
  } = restaurantInfo;

  return (
    <View style={[SpaceStyle.container, styles.cardContainer]}>
      <Text style={[TextStyle.title1, styles.restaurantName]}>
        {name}
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <MaterialIcons
          style={{ paddingRight: 4 }}
          name='location-on'
          size={16}
          color={COLOR.accent1}
        />
        <Text style={TextStyle.body4}>
          {address}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 6, alignItems: 'center' }}>
        <Text style={TextStyle.body4}>
          Đặc sản Tây Bắc
        </Text>
        <View style={{ flexDirection: 'row', marginLeft: 12 }} >
          <RatingStar />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Text style={[TextStyle.body3, { paddingHorizontal: 4 }]}>
              {rating}/5
            </Text>
            <Text style={TextStyle.body4}>
              (567 Đánh giá)
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.openingTime}>
          Mở cửa: 8h - 23h
        </Text>
      </View>
    </View>
  );
};

export default InfoRestaurantCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#f2f2f2',
    alignItems: 'center'
  },
  restaurantName: {
    paddingHorizontal: 8,
    paddingTop: 12,
    paddingBottom: 4
  },
  openingTime: {
    fontSize: 16,
    color: COLOR.accent3,
    paddingHorizontal: 8,
    paddingVertical: 24
  }
});