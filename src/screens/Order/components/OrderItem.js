import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import TextStyle from '../../../styles/TextStyle';
import RatingStar from '../../../components/RatingStar';
import COLOR from '../../../constants/color';
import Line from '../../../components/Line';

const OrderItem = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          // backgroundColor: 'blue',
          flexDirection: 'row'
        }}
      >
        <Image
          style={{
            width: 76,
            height: 76,
            margin: 8
          }}
          source={require('../../../assets/img/food/noti1.png')}
        />

        <View style={{
          flex: 1,
          marginVertical: 8,
          marginRight: 12,
          justifyContent: 'space-between'
        }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text style={TextStyle.headline2}>
                Dâu tây
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RatingStar />
                <Text style={[TextStyle.body3, { marginLeft: 4 }]}>
                  5/5
                </Text>
              </View>
            </View>
            <Text
              style={[TextStyle.body4, { marginVertical: 4 }]}
              numberOfLines={1}
            >
              Số 13, Phố Huế, Hai Bà Trưng, Hà Nội
            </Text>
          </View>
          
          <Text style={{
            fontSize: 14,
            color: COLOR.neutral1
          }}>
            80.000đ - SL: 1
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, marginVertical: 12 }}>
        <Line color='#C4C4C4' opacity='0.6' />
      </View>
      
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            color: COLOR.accent3
          }}
        >
          Đang đến ...
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold'
          }}
        >
          15 phút
        </Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    height: 142,
    marginTop: 16,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#f1f1f1'
  }
});