import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderTopTab } from '../TopTab';
import PaymentScreen from '../../screens/Payment';
import HeaderBackButton from '../../components/HeaderBackButton';
import COLOR from '../../constants/color';

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
      <Stack.Screen
        name='Payment'
        component={PaymentScreen}
        options={{
          title: 'Xác nhận đơn hàng',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: COLOR.neutral1
          },
          headerStyle: {
            shadowColor: 'transparent',
          },
          headerLeft: () => <HeaderBackButton />
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;