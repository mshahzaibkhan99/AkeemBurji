import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import GilroyMedium from '../TextWrapper/GilroyMediumTextWrapper';
import styles from './styles';

const MainButtonComponent = ({title, containerStyle, textStyle, onPress}) => {
  return (
    <View style={styles.mainContiner}>
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        onPress={onPress}>
        <GilroyMedium style={[styles.title, textStyle]}>{title}</GilroyMedium>
      </TouchableOpacity>
    </View>
  );
};

export default MainButtonComponent;
