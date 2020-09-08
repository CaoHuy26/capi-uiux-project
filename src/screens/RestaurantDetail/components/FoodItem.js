import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import COLOR from '../../../constants/color';
import TextStyle from '../../../styles/TextStyle';
import RatingStar from '../../../components/RatingStar';

const FoodItem = (props) => {
  const {
    id,
    name,
    imageUrl,
    ingredients,
    rating,
    price
  } = props;

  const addToCart = useCallback(() => {
    alert('Add To Cart');
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={imageUrl}
        style={styles.restaurantImage}
      />

      <View style={styles.restaurantInfo}>
        <Text style={TextStyle.headline1}>
          {name}
        </Text>
        {
          ingredients
           ? (
            <View style={styles.restaurantAddress}>
              <Text
                style={TextStyle.body4}
                numberOfLines={1}  
              >
                Nguyên liệu: {ingredients}
              </Text>
            </View>
           )
           : <View style={styles.restaurantAddress} />
        }
        
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
          <RatingStar />
          <Text style={{ paddingLeft: 4, fontSize: 12 }}>5/5</Text>
        </View>

        <View>
          <Text style={TextStyle.headline3}>
            {price}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.iconAddToCart}
          onPress={() => addToCart()}
        >
          <MaterialIcons name='add-circle' size={24} color={COLOR.accent1}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 92,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 4,
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
    paddingVertical: 8
  },
  restaurantAddress: {
    marginTop: 4,
    marginBottom: 4
  },
  iconAddToCart: {
    position: 'absolute',
    right: 8,
    bottom: 8
  }
});