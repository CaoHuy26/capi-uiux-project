import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../../../constants/color';
import TextStyle from '../../../styles/TextStyle';

const histories = [
  {
    id: '1',
    search: 'Cá Lóc nướng lu'
  },
  {
    id: '2',
    search: 'Cơm Hến bánh đa'
  },
  {
    id: '3',
    search: 'Rau cải bó xôi'
  },
  {
    id: '4',
    search: 'Sườn non'
  }
];

const Line = () => (
  <View
    style={{
      borderWidth: 0.6,
      borderColor: COLOR.neutral5
    }}
  />
);

const SearchHistory = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 12,
          paddingBottom: 8
        }}
      >
        <Text style={TextStyle.headline1}>
          Lịch sử
        </Text>
        <TouchableOpacity onPress={() => alert('Xoá tất cả lịch sử tìm kiếm')}>
          <Text style={{ color: COLOR.semantic2, fontSize: 16, fontWeight: '500' }}>
            Xoá tất cả
          </Text>
        </TouchableOpacity>
      </View>
      <Line />
      <View>
        {
          histories.map(history => (
            <View
              key={history.id}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 8
              }}
            >
              <Text>{history.search}</Text>
              
              <TouchableOpacity onPress={() => alert('Xoá lịch sử tìm kiếm')}>
                <MaterialIcons name='clear' size={16} color={COLOR.neutral1} />
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    </View>
  );
};

export default SearchHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: 8
  }
});