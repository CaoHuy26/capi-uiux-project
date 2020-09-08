import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home';
import HeaderSearch from '../../components/HeaderSearch';
import SearchScreen from '../../screens/Search';
import HeaderSearchOptions from '../../components/HeaderSearchOptions';
import HeaderBackButton from '../../components/HeaderBackButton';
import RestaurantDetailScreen from '../../screens/RestaurantDetail';
import HeaderRightOptions from '../../components/HeaderRightOptions';

const Stack = createStackNavigator();

const HomeStack = ({ navigation, route }) => {
  // Ẩn tabbar
  // console.log(route)
  // if (route.state && route.state.index > 0) {
  //   navigation.setOptions({
  //     tabBarVisible: false
  //   });
  // }
  // else {
  //   navigation.setOptions({
  //     tabBarVisible: true
  //   });
  // }
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
          headerLeft: () => <HeaderBackButton />,
          headerRight: () => <HeaderSearchOptions />
        }}
      />
      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{
          title: null,
          headerStyle: {
            shadowColor: 'transparent'
          },
          headerLeft: () => <HeaderBackButton />,
          headerRight: () => <HeaderRightOptions />
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;