import React from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import images from '../Assets';
import {lightTheme} from '../Utils/theme';
import {vh, vw} from '../Utils/units';
import styles from './styles';

const titles = {
  HomeScreen: 'Home',
};

const menuRoutes = {
  HomeScreen: 'HomeScreen',
};

const withSearchRoutes = {
  HomeScreen: 'HomeScreen',
};

const cartRoutes = {
  HomeScreen: 'HomeScreen',
};

const backRoutes = {};

const navigationOptions = navProps => {
  // const cart = useSelector(state => state.ProductReducer.addToCart);

  return {
    headerTitle: () => getTitle(navProps),
    headerTitleAlign: 'center',
    headerLeft: () => renderHeaderLeft(navProps),
    headerRight: () => renderHeaderRight(navProps),
    headerLeftContainerStyle: {paddingLeft: 5 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
    headerStyle: getHeaderStyle(navProps),
    headerBackground: props => HeaderBackground(navProps),
  };
};

const HeaderBackground = props => {
  if (withSearchRoutes[props?.route?.name]) {
    return (
      <View>
        <ImageBackground
          source={images.General.HeaderBackground}
          style={styles.headerBackground}
          imageStyle={styles.headerBackgroundImage}
        />
        {/* <MainTextInputComponent
          placeHolder={'Search Your Product'}
          rightIcon={images.Icons.Search}
          rightIconStyle={styles.dropwDownStyle}
          containerStyle={styles.searchBar}
        /> */}
      </View>
    );
  }
  return <View style={styles.headerBackground}></View>;
};

const getHeaderStyle = props => {
  return {
    shadowColor: 'transparent',
  };
};

const getTitle = props => {
  if (titles[props?.route?.name]) {
    return (
      <Image source={images.General.Header} style={styles.logo} />
      // <Text style={[styles.headerTitleStyle]}>
      //   {titles[props?.route?.name]}
      // </Text>
    );
  }
};

const renderHeaderLeft = props => {
  if (menuRoutes[props?.route?.name]) {
    return HeaderButton(images.Icons.Menu, () => props.navigation.openDrawer());
  }

  if (backRoutes[props?.route?.name]) {
    return HeaderButton(images.Icons.Back, () => props.navigation.goBack(), {
      tintColor: lightTheme.white,
    });
  }
};

const renderHeaderRight = props => {
  if (cartRoutes[props?.route?.name]) {
    return HeaderButton(images.Icons.Search, () => {}, '', '');
  }
};

const HeaderButton = (imageSource, onPress, imageStyle, title) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnBG, {flexDirection: 'row', alignItems: 'center'}]}>
      {imageSource != null && (
        <Image
          source={imageSource}
          style={[styles.image, imageStyle]}
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

export const drawerRoutes = {
  HomeStack: {
    label: 'Home',
    icon: images.DrawerIcons.Home,
  },
  SubPackagesStack: {
    label: 'Sub Packages',
    icon: images.DrawerIcons.Packages,
  },
  ServicesStack: {
    label: 'Services',
    icon: images.DrawerIcons.Services,
  },
  Logout: {
    label: 'Logout',
    icon: images.DrawerIcons.Logout,
    notRoute: true,
  },
  DoanteStack: {
    label: 'Donate',
    icon: images.DrawerIcons.Donate,
  },
  RequestFormStack: {
    label: 'Request Form',
    icon: images.DrawerIcons.RequestForm,
  },
  ContactStack: {
    label: 'Contact Us',
    icon: images.DrawerIcons.Contact,
  },
};

export default navigationOptions;
