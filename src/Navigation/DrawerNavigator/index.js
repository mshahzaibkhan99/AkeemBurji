import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {vh, vw} from '../../Utils/units';
import DrawerScreenWrapper from '../../Components/DrawerComponents/DrawerScreenWrapper';
import DrawerContent from '../../Components/DrawerComponents/DrawerContent';
import {lightTheme} from '../../Utils/theme';

import HomeNavigator from '../HomeNavigator';

const Drawer = createDrawerNavigator();
const HomeStack = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <HomeNavigator />
    </DrawerScreenWrapper>
  );
};

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {
          width: 60 * vw,
        },
        sceneContainerStyle: {backgroundColor: lightTheme.accent1},
      }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
