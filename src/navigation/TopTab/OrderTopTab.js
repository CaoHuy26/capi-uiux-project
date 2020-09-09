import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderScreen from '../../screens/Order';
import CartScreen from '../../screens/Order/Cart';
import OrderPendingScreen from '../../screens/Order/OrderPending';
import OrderHistoryScreen from '../../screens/Order/OrderHistory';
import COLOR from '../../constants/color';

const Tab = createMaterialTopTabNavigator();

const OrderTopTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          shadowColor: 'transparent'
        },
        activeTintColor: COLOR.accent1,
        inactiveTintColor: COLOR.accent4,
        indicatorStyle: {
          backgroundColor: COLOR.accent1,
          width: 71,
          marginLeft: 12,
          bottom: 12
        },
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          textTransform: 'capitalize'
        },
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