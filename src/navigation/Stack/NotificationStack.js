import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationScreen from '../../screens/Notification';

const Stack = createStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={NotificationScreen}
      />
    </Stack.Navigator>
  );
};

export default NotificationStack;