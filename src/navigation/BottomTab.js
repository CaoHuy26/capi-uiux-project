import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TestScreen from '../screens/Test';
import {
  HomeStack,
  NotificationStack,
  OrderStack,
  ProfileStack
} from './Stack';

import COLOR from '../constants/color';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'Notification') {
            iconName = 'ios-notifications';
          } else if (route.name === 'Test') {
            iconName = 'ios-add-circle';
          } else if (route.name === 'Order') {
            iconName = 'ios-bookmarks';
          } else if (route.name === 'Profile') {
            iconName = 'ios-person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: COLOR.accent1,
        inactiveTintColor: COLOR.accent4,
        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Notification" component={NotificationStack} />
      <Tab.Screen name="Test" component={TestScreen} />
      <Tab.Screen name="Order" component={OrderStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTab;

