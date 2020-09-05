import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderScreen from '../../screens/Order';

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Order"
        component={OrderScreen}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;