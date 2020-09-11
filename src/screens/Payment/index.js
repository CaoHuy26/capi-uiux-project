import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const PaymentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Payment Screen</Text>
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF'
  }
});