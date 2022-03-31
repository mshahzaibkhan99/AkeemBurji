import React, {useEffect} from 'react';
import {Platform, StatusBar, StyleSheet, UIManager, View} from 'react-native';
import AnimatedSplash from 'react-native-animated-splash';

import Navigation from './src/Navigation';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = props => {
  useEffect(() => {
    AnimatedSplash.hide();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Navigation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
