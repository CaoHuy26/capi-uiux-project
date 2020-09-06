import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import HeaderSearch from '../../components/HeaderSearch';
import SearchScreen from '../../screens/Search';
import HeaderSearchOptions from '../../components/HeaderSearchOptions';
import HeaderBackButton from '../../components/HeaderBackButton';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: null,
          headerStyle: {
            shadowColor: 'transparent'
          },
          headerLeft: () => <HeaderSearch />
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: null,
          headerStyle: {
            shadowColor: 'transparent'
          },
          headerRight: () => <HeaderSearchOptions />,
          headerLeft: () => <HeaderBackButton />
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;