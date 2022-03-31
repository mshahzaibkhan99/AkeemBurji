import React, {useRef} from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import {Image, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import {drawerRoutes} from '../../../Navigation/NavigationOptions';
import GilroyBold from '../../TextWrapper/GilroyBoldTextWrapper';
import images from '../../../Assets';
import {vw} from '../../../Utils/units';

const DrawerContent = props => {
  const popupRef = useRef(null);
  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
      if (routeOrders[routeOrders.length - 1] == 'Logout') {
        return popupRef?.current?.show();
      }
    }
  };

  const routeOrders = [
    'HomeStack',
    // 'NotificationStack',
    // 'AllProductStack',
    // 'AllCourseStack',
    // // 'MySubscriptionStack',
    // 'OrderStack',
    // 'WishlistStack',
    // 'CourseStack',
    // 'PaymentStack',
    'ContactStack',
    // token !== null && 'Logout',
  ];
  // const progress = useDrawerProgress();
  // const opacity = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-5, 1],
  // });
  return (
    <Animated.View style={[styles.container]}>
      <Animated.View>
        <View style={styles.header}>
          <TouchableOpacity style={{width: vw * 40}} onPress={() => {}}>
            <View style={styles.profileImageContainer}>
              <Image
                source={images.General.Profile}
                style={styles.profileImage}
              />
            </View>
            <GilroyBold style={styles.userName}>Mark</GilroyBold>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <View style={styles.routeContainer}>
        {routeOrders.map((item, index) => {
          return (
            <DrawerButton
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item}
            />
          );
        })}
      </View>

      <Animated.View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => {}}>
            <GilroyBold style={styles.buttonText}>Login or Register</GilroyBold>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
};
export default DrawerContent;
