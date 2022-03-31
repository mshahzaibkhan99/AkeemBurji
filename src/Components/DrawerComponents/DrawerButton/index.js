import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {drawerRoutes} from '../../../Navigation/NavigationOptions';
import {vh, vw} from '../../../Utils/units';

import styles from './styles';
import GilroyMedium from '../../TextWrapper/GilroyMediumTextWrapper';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {
  // const progress = useDrawerProgress();
  // const translateX = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-40 * vw * (props.index + 1), 0],
  // });
  // const animatedStyles = {
  //   transform: [{translateX}],
  // };
  const routeConfigs = drawerRoutes[props.routeName];
  if (!routeConfigs) {
    return null;
  }
  return (
    <AnimatedTouchable
      onPress={() => props.onPress(props.routeName)}
      style={[styles.container]}>
      <Image style={styles.icon} source={routeConfigs.icon} />
      <GilroyMedium style={styles.label}>{routeConfigs.label}</GilroyMedium>
    </AnimatedTouchable>
  );
};

export default DrawerButton;
