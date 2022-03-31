import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../Screens/HomeScreens';
import navigationOptions from '../NavigationOptions';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={navigationOptions}
      initialRouteName="HomeScreen">
      <HomeStack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{headerShown: false}}
      />
      {/* <HomeStack.Screen
        component={WishlistScreen}
        name="WishlistScreen"
        options={navigationOptions}
      /> */}
      {/* <HomeStack.Screen
        component={BestRatedProductScreen}
        name="BestRatedProductScreen"
      />
      <HomeStack.Screen
        component={MostPurchasedProductScreen}
        name="MostPurchasedProductScreen"
      />
      <HomeStack.Screen component={ProductScreen} name="ProductScreen" />
      <HomeStack.Screen component={ReviewScreen} name="ReviewScreen" />
      <HomeStack.Screen
        component={WriteReviewScreen}
        name="WriteReviewScreen"
      />
      <HomeStack.Screen component={EditReviewScreen} name="EditReviewScreen" />
      <HomeStack.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="AuthNavigator"
        component={AuthNavigator}
        options={{headerShown: false}}
      /> */}
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
