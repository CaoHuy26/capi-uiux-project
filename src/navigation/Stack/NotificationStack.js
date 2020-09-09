import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../../screens/Notification';
import COLOR from '../../constants/color';

const Stack = createStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Thông báo',
          headerTintColor: COLOR.accent5,
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold'
          },
          headerStyle: {
            backgroundColor: COLOR.accent1
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationStack;