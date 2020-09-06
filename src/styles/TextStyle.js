import { StyleSheet } from 'react-native';
import COLOR from '../constants/color';

const TextStyle = StyleSheet.create({
  headline1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR.neutral1
  },
  headline3: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLOR.neutral1
  },
  body4: {
    fontSize: 12,
    color: COLOR.neutral4
  }
});

export default TextStyle;