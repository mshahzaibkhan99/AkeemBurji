import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from '../DrawerNavigator';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />

      {/* <MainStack.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{headerShown: false}}
      /> */}
      {/* <MainStack.Screen
        name="AuthNavigator"
        component={AuthNavigator}
        options={{headerShown: false}}
      /> */}

      {/* <MainStack.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{headerShown: false}}
      /> */}

      {/* <MainStack.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{headerShown: false}}
      /> */}
    </MainStack.Navigator>
  );
};

export default MainNavigator;
