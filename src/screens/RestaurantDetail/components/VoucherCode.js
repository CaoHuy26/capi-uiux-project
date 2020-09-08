import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import SpaceStyle from '../../../styles/SpaceStyle';
import TextStyle from '../../../styles/TextStyle';
import COLOR from '../../../constants/color';

const Code = ({ code }) => (
  <View
    style={{
      height: 32,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: COLOR.neutral5,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8
    }}
  >
    <MaterialIcons
      style={{ paddingVertical: 6, paddingLeft: 6 }}
      name='check-circle' size={20} color={COLOR.accent3}
    />
    <Text
      style={{
        paddingLeft: 10,
        flex: 1,
        fontSize: 12,
        color: COLOR.neutral1
      }}
      numberOfLines={1}
    >
      {code}
    </Text>
  </View>
)

const VoucherCode = () => {
  return (
    <View style={SpaceStyle.container}>
      <Text style={[TextStyle.headline1, { marginTop: 24 }]}>
        Ưu đãi
      </Text>

      <Code code='Nhập “T3VUIVE”: -10% với đơn hàng trên 200.000đ' />
      <Code code='Nhập “FREESHIP”: Miễn phí giao hàng tới 3km' />
    </View>
  );
};

export default VoucherCode;