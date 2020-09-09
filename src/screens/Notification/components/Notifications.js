import React from 'react';
import { View, Text } from 'react-native';
import Notification from './Notification';
import TextStyle from '../../../styles/TextStyle';
import SpaceStyle from '../../../styles/SpaceStyle';

const Notifications = () => {
  return (
    <View style={SpaceStyle.container}>
      <Text style={[TextStyle.headline1, { marginTop: 24 }]}>
        Mới
      </Text>

      <Notification
        name='Trứng gà - ID: 1234567'
        message='Đã tạo phòng chat mua chung'
        status='Tham gia phòng chat'
        imageUrl={require('../../../assets/img/food/noti1.png')}
      />
      <Notification
        name='Trứng gà - ID: 1234567'
        message='Đã tạo phòng chat mua chung'
        status='Tham gia phòng chat'
        imageUrl={require('../../../assets/img/food/noti2.png')}
      />

      <Text style={[TextStyle.headline1, { marginTop: 24 }]}>
        Cập nhật đơn hàng
      </Text>
      <Notification
        name='Cơm tấm - ID: 1234567'
        message='Thanh toán: Tiền mặt'
        status='Đã giao hàng và thanh toán thành công'
        imageUrl={require('../../../assets/img/food/noti3.png')}
      />
      <Notification
        name='Mỳ cay - ID: 1234567'
        message='Thanh toán: Tiền mặt'
        status='Đã giao hàng và thanh toán thành công'
        imageUrl={require('../../../assets/img/food/noti4.png')}
      />
      <Notification
        name='Đùi gà - ID: 1234567'
        message='Thanh toán: Qua Momo'
        status='Đã hủy thành công'
        imageUrl={require('../../../assets/img/food/noti5.png')}
      />

    </View>
  );
};

export default Notifications;