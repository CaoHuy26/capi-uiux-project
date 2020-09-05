import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default AppNavigation;