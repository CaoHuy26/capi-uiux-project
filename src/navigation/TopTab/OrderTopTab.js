import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  OrderScreen,
  OrderPendingScreen,
  CartScreen,
  OrderHistoryScreen,
} from '../../screens/Order';
import COLOR from '../../constants/color';

const Tab = createMaterialTopTabNavigator();

const OrderTopTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { // Style for container
          shadowColor: 'transparent',
          height: 36,
          justifyContent: 'center'
        },
        indicatorStyle: { // Style for line
          backgroundColor: COLOR.accent1,
          width: 71,
          marginLeft: 12
        },
        labelStyle: { // Style for text
          fontSize: 12,
          fontWeight: 'bold',
          textTransform: 'none'
        },
        activeTintColor: COLOR.accent1,
        inactiveTintColor: COLOR.accent4
      }}
    >
      <Tab.Screen
        name='Order'
        component={OrderScreen}
        options={{
          title: 'Đang đến'
        }}
      />
      <Tab.Screen
        name='OrderPending'
        component={OrderPendingScreen}
        options={{
          title: 'Đơn chờ'
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartScreen}
        options={{
          title: 'Giỏ hàng'
        }}
      />
      <Tab.Screen
        name='OrderHistory'
        component={OrderHistoryScreen}
        options={{
          title: 'Lịch sử'
        }}
      />
    </Tab.Navigator>
  );
};

export default OrderTopTab;