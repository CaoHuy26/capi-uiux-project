import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../../../constants/color';
import TextStyle from '../../../styles/TextStyle';
import RatingStar from '../../../components/RatingStar';
import { useNavigation } from '@react-navigation/native';

const DistanceAndTime = ({ distance, time }) => (
  <View style={{ flexDirection: 'row' }}>
    <View style={{ flexDirection: 'row' }}>
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
);

const Discount = ({ discountPercent }) => (
  <View style={styles.discountContainer}>
    <Text style={TextStyle.body2}>
      -{discountPercent}%
    </Text>
  </View>
);

const RestaurantItem = (props) => {
  const {
    id,
    name,
    imageUrl,
    address,
    rating,
    distance,
    time,
    discountPercent
  } = props;

  const navigation = useNavigation();

  const moveToDetail = useCallback(() => {
    navigation.navigate('RestaurantDetail', props);
  }, []);

  return (
    <TouchableOpacity
      onPress={moveToDetail}
      style={styles.container}
    >
      <Image
        source={imageUrl}
        style={styles.restaurantImage}
      />

      <View style={styles.restaurantInfo}>
        <Text style={TextStyle.headline1}>
          {name}
        </Text>
        <View style={styles.restaurantAddress}>
          <Text
            style={TextStyle.body4}
            numberOfLines={1}  
          >
            {address}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            {
              [...Array(5)].map((element, index) => (
                <RatingStar key={index} />
              ))
            }
          </View>
          {
            discountPercent
             ? <Discount discountPercent={discountPercent} />
             : <DistanceAndTime distance={distance} time={time} />
          }
          
        </View>
      </View>

    </TouchableOpacity>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 92,
    borderRadius: 10,
    marginBottom: 12,
    borderBottomWidth: 0.2,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  restaurantImage: {
    margin: 8,
    borderRadius: 8
  },
  restaurantInfo: {
    flex: 1,
    paddingRight: 8,
    paddingVertical: 12
  },
  restaurantAddress: {
    marginTop: 4,
    marginBottom: 16
  },
  discountContainer: {
    width: 64,
    height: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.accent1
  }
});