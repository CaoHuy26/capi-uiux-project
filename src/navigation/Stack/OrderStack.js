import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderTopTab } from '../TopTab';

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Order'
        component={OrderTopTab}
        options={{
          title: null,
          headerStyle: {
            shadowColor: 'transparent'
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;