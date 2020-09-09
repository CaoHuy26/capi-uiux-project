import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons';
import NullScreen from '../screens/Null';
import {
  HomeStack,
  NotificationStack,
  OrderStack,
  ProfileStack
} from './Stack';

import BottomTabAddIcon from '../components/BottomTabAddIcon';
import COLOR from '../constants/color';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Notification') {
            iconName = 'notifications-none';
          } else if (route.name === 'Add') {
            return <BottomTabAddIcon style={{ bottom: 20 }} />
          } else if (route.name === 'Order') {
            iconName = 'library-books';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <MaterialIcons name={iconName} size={28} color={color} />;
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
      <Tab.Screen name="Add" component={NullScreen} />
      <Tab.Screen name="Order" component={OrderStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTab;

