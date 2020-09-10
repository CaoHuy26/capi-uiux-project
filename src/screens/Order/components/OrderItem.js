import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import TextStyle from '../../../styles/TextStyle';
import RatingStar from '../../../components/RatingStar';
import COLOR from '../../../constants/color';
import Line from '../../../components/Line';

const OrderItem = (props) => {
  const {
    id,
    name,
    imageUrl,
    address,
    rating,
    price,
    numberOfItem
  } = props;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.orderImage}
          source={imageUrl}
        />

        <View style={styles.orderInfo}>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={TextStyle.headline2}>
                {name}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RatingStar />
                <Text style={[TextStyle.body3, { marginLeft: 4 }]}>
                  {rating}/5
                </Text>
              </View>
            </View>
            <Text
              style={[TextStyle.body4, { marginVertical: 4 }]}
              numberOfLines={1}
            >
              {address}
            </Text>
          </View>
          
          <Text style={{
            fontSize: 14,
            color: COLOR.neutral1
          }}>
            {price} - SL: {numberOfItem}
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, marginVertical: 12 }}>
        <Line color='#f1f1f1' opacity='0.6' />
      </View>
      
      <View style={styles.orderStatus}>
        <Text style={styles.orderStatusText}>
          Đang đến ...
        </Text>
        <Text style={styles.orderStatusTime}>
          15 phút
        </Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#f1f1f1'
  },
  orderImage: {
    width: 76,
    height: 76,
    margin: 8
  },
  orderInfo: {
    flex: 1,
    marginVertical: 8,
    marginRight: 12,
    justifyContent: 'space-between'
  },
  orderStatus: {
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8
  },
  orderStatusText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLOR.accent3
  },
  orderStatusTime: {
    fontSize: 12,
    fontWeight: 'bold'
  }
});