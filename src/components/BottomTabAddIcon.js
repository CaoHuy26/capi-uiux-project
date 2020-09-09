import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import COLOR from '../constants/color';

const BottomTabAddIcon = (props) => {
  // TODO: Hiển thị lựa chọn: Món ăn Việt, Thực phẩm sạch, Mua chung
  const showOptions = useCallback(() => {
    alert('Món ăn Việt');
  }, []);
  
  return (
    <TouchableOpacity
      style={props.style}
      onPress={() => showOptions()}
    >
      <Ionicons
        name='ios-add-circle'
        size={38}
        color={COLOR.accent1}
      />
    </TouchableOpacity>
  );
}

export default BottomTabAddIcon;