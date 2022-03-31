import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import HomeCarouselConmponent from '../../Components/HomeCarouselComponent';
import images from '../../Assets';
import GilroyBold from '../../Components/TextWrapper/GilroyBoldTextWrapper';
import GilroyLight from '../../Components/TextWrapper/GilroyLightTextWrapper';
import MainButtonComponent from '../../Components/MainButtonComponent';
import HomePrayCard from '../../Components/Cards/HomePrayCard';
import styles from './styles';
import {lightTheme} from '../../Utils/theme';
import GilroyMedium from '../../Components/TextWrapper/GilroyMediumTextWrapper';

const prayItems = [
  {
    image: images.General.Pray1,
    text: 'Lorem ipsum',
  },
  {
    image: images.General.Pray2,
  },
  {
    image: images.General.Pray2,
  },
];

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Image source={images.Icons.Menu} style={styles.menu} />
        </TouchableOpacity>
        <GilroyBold style={styles.boldHeading}>
          Jesus Center of Good News
        </GilroyBold>
        <View style={styles.secondHeading}>
          <GilroyLight style={styles.secondText}>a Community </GilroyLight>
          <GilroyLight
            style={[styles.secondText, {color: lightTheme.primaryColor}]}>
            For all Nations{' '}
          </GilroyLight>
        </View>
      </View>
      <HomeCarouselConmponent />
      <View style={styles.buttonHeadingContainer}>
        <GilroyMedium style={styles.headingText}>
          Never Stop Praying
        </GilroyMedium>
        <MainButtonComponent title="View All" />
      </View>
      <View style={styles.redLine} />
      <View style={{height: '28%'}}>
        <FlatList
          data={prayItems}
          renderItem={({item}) => <HomePrayCard item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.buttonHeadingContainer}>
        <GilroyMedium style={styles.headingText}>Our Services</GilroyMedium>
        <MainButtonComponent title="View All" />
      </View>
      <View style={styles.redLine} />
    </SafeAreaView>
  );
};

export default HomeScreen;
