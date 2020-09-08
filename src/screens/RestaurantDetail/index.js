import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const RestaurantDetailScreen = (props) => {
  const {
    id,
    name,
    imageUrl,
    address,
    rating
  } = props.route.params;

  return (
    <ScrollView style={styles.container}>
      <Text>
        {name}
      </Text>
    </ScrollView>
  );
};

export default RestaurantDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  }
});