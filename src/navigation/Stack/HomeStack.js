import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import HeaderSearch from '../../components/HeaderSearch';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: null,
          headerLeft: () => <HeaderSearch />
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;