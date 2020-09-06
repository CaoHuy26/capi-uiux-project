import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../../../constants/color';
import TextStyle from '../../../styles/TextStyle';
import RatingStar from '../../../components/RatingStar';

const RestaurantItem = (props) => {
  const {
    id,
    name,
    imageUrl,
    address,
    rating,
    distance,
    time
  } = props;

  return (
    <View style={{
      flexDirection: 'row',
      height: 92,
      borderRadius: 10,
      marginBottom: 12
    }}>
      <View
        style={{
          width: 76,
          height: 76,
          backgroundColor: 'blue',
          margin: 8,
          borderRadius: 8
        }}
      >
        <Image source={imageUrl} />
      </View>

      <View style={{
        flex: 1,
        paddingRight: 8,
        paddingVertical: 12
      }}>
        <View>
          <Text style={TextStyle.headline1}>
            {name}
          </Text>
        </View>
        <View style={{
          marginTop: 4,
          marginBottom: 16
        }}>
          <Text
            style={TextStyle.body4}
            numberOfLines={1}  
          >
            {address}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View style={{
            flexDirection: 'row'
          }}>
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={{
              flexDirection: 'row'
            }}>
              <MaterialIcons name='location-on' size={16} color={COLOR.accent1} />
              <Text style={[ TextStyle.body4, { paddingLeft: 2 } ]}>
                {distance}
              </Text>
            </View>
            <View style={{
              flexDirection: 'row',
              paddingLeft: 6
            }}>
              <MaterialIcons name='access-time' size={16} color={COLOR.accent1} />
              <Text style={[ TextStyle.body4, { paddingLeft: 2 } ]}>
                {time}
              </Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
};

export default RestaurantItem;