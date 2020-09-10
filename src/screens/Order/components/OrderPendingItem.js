import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import TextStyle from '../../../styles/TextStyle';
import RatingStar from '../../../components/RatingStar';
import COLOR from '../../../constants/color';
import TextBadge from '../../../components/TextBadge';
import Line from '../../../components/Line';

const OrderPendingItem = (props) => {
  const {
    id,
    name,
    imageUrl,
    address,
    rating,
    price,
    numberOfItem
  } = props;

  const onPressCancelOrder = useCallback(() => {
    alert('Huỷ đơn hơn')
  }, []);

  const joinChatRoom = useCallback(() => {
    alert('Tham gia phòng chat');
  }, []);

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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={TextStyle.body4}>
                ID: {id}
              </Text>
              <TextBadge
                text='02:30:00'
                backgroundColor={COLOR.accent3}
                textColor='#FFF'
              />
            </View>
          </View>
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, marginVertical: 12 }}>
        <Line color='#f1f1f1' opacity='0.6' />
      </View>

      <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
        <Text style={TextStyle.headline3}>
          {price} - SL: {numberOfItem}
        </Text>
        <TouchableOpacity
          style={{ marginTop: 4, alignSelf: 'flex-start' }}
          onPress={() => onPressCancelOrder()}
        >
          <TextBadge
            style={{ alignSelf: 'flex-start' }}
            text='Hủy đơn hàng'
            backgroundColor={COLOR.accent4}
            textColor='#FFF'
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconChat}
          onPress={() => joinChatRoom()}
        >
          <MaterialIcons
            name='forum'
            size={24}
            color={COLOR.accent1}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderPendingItem;

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
  timeBagde: {
    backgroundColor: COLOR.semantic2,
    paddingVertical: 4,
    paddingHorizontal: 12,
    color: '#FFF',
    borderRadius: 25
  },
  iconChat: {
    position: 'absolute',
    bottom: 8,
    right: 8
  }
});