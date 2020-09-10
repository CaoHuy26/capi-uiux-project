import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, Octicons } from 'react-native-vector-icons';
import TextStyle from '../../../styles/TextStyle';
import COLOR from '../../../constants/color';
import Line from '../../../components/Line';

const CartFood = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16
      }}
    >
      <MaterialIcons
        name='radio-button-unchecked'
        size={12}
        color={COLOR.neutral3}
      />

      <Image
        style={{
          width: 64,
          height: 64,
          marginLeft: 12,
          marginRight: 18
        }}
        source={require('../../../assets/img/food/food4.png')}
      />

      <View>
        <Text style={TextStyle.headline5}>
          Bún thang hải sản
        </Text>
        <Text style={[TextStyle.body3, { marginVertical: 8 }]}>
          80.000đ
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity>
            <MaterialIcons
              name='control-point'
              size={20}
              color={COLOR.neutral3}
            />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 8 }}>
            1
          </Text>
          <TouchableOpacity>
            <MaterialIcons
              name='remove-circle-outline'
              size={20}
              color={COLOR.neutral3}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start'
        }}
      >
        <MaterialIcons
          style={{ marginTop: 3 }}
          name='radio-button-unchecked'
          size={12}
          color={COLOR.neutral3}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={TextStyle.headline2}>
          Quán bún Hà Nội
          </Text>
          <Text style={TextStyle.body4}>
            Số 13, Phố Huế, Hai Bà Trưng
          </Text>
        </View>

        <Octicons
          style={{
            position: 'absolute',
            top: 0,
            right: 0
          }}
          name='heart'
          size={20}
          color='red'
        />
      </View>

      <Line style={{ marginTop: 8, marginBottom: 16 }} />

      <View>
        <CartFood />
        <CartFood />
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: '#f1f1f1',
    paddingHorizontal: 18,
    paddingTop: 18,
    marginTop: 18
  }
});