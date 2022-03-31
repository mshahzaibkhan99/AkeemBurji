import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  Image,
  Text,
} from 'react-native';
import images from '../../../Assets';
import GilroyMedium from '../../TextWrapper/GilroyMediumTextWrapper';

import styles from './styles';

const HomePrayCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.card} source={props.item.image} />
      {props.item.text && (
        <View style={styles.textContainer}>
          <GilroyMedium style={styles.text}>{props.item.text}</GilroyMedium>
          <View style={styles.btnForward}>
            <Image source={images.Icons.Forward} style={styles.forward} />
          </View>
        </View>
      )}
    </View>
  );
};

export default HomePrayCard;
