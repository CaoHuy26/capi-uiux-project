import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../screens/Profile';
import COLOR from '../../constants/color';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
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

export default ProfileStack;