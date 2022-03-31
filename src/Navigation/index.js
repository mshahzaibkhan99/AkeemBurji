import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from '../Statemanagement/store';
import MainNavigator from './MainNavigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
