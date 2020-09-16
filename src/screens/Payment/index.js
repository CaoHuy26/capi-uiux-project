import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import COLOR from '../../constants/color';
import TextStyle from '../../styles/TextStyle';
import Line from '../../components/Line';

const PaymentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', ...styles.text }}>
          <Text style={TextStyle.headline5}>
            Thông tin giao hàng
          </Text>
          <Text style={[TextStyle.headline5, { color: COLOR.accent3 }]}>
            Sửa
          </Text>
        </View>

        <Line style={styles.line} />

        <Text style={[TextStyle.body5, styles.text]}>
          Số 29, ngõ 138 Mễ Trì Thượng, Quận Nam Từ Liêm, Hà Nội, Việt Nam
        </Text>

        <Line style={styles.line} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', ...styles.text }}>
          <Text style={TextStyle.body5}>
            Nguyễn Hồng Nhung
          </Text>
          <Text style={TextStyle.body5}>
            0388283442
          </Text>
        </View>
      </View>

      <View style={styles.orderCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', ...styles.text }}>
          <Text style={TextStyle.headline5}>
            Đơn hàng
          </Text>
          <Text style={[TextStyle.headline5, { color: COLOR.accent3 }]}>
            Sửa
          </Text>
        </View>

        <Line style={styles.line} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', ...styles.text }}>
          <Text style={TextStyle.body5}>
            Thịt Bò Bắp
          </Text>
          <Text style={TextStyle.body5}>
            2kg
          </Text>
        </View>

        <Line style={styles.line} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', ...styles.text }}>
          <Text style={TextStyle.body5}>
            Hình thức
          </Text>
          <Text style={[TextStyle.body5, { color: COLOR.accent3 }]}>
            Mua thường
          </Text>
        </View>

        <Line style={styles.line} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', ...styles.text }}>
          <Text style={TextStyle.body5}>
            Tổng
          </Text>
          <Text style={TextStyle.body5}>
            300.000đ
          </Text>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: 34 }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLOR.accent1,
            width: 263,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => alert('Thanh toán thành công!')}
        >
          <Text
            style={{
              color: '#FFF',
              fontSize: 14,
              fontWeight: 'bold'
            }}
          >
            Xác nhận
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 16
  },
  infoCard: {
    paddingHorizontal: 8,
    marginTop: 24,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  line: {
    borderWidth: 0.8
  },
  text: {
    paddingVertical: 12
  },
  orderCard: {
    paddingHorizontal: 8,
    marginTop: 16,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  }
});