import React, {useRef, useState} from 'react';
import {View, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Pagination} from 'react-native-snap-carousel';
import images from '../../Assets';
import {lightTheme} from '../../Utils/theme';
import {vw} from '../../Utils/units';
import GilroyMedium from '../TextWrapper/GilroyMediumTextWrapper';
import styles from './styles';

const entries = [
  {
    title: 'Titles',
    image: images.Carousel.Carousel1,
  },
  {
    title: 'Titles',
    image: images.Carousel.Carousel1,
  },
  {
    title: 'Titles',
    image: images.Carousel.Carousel1,
  },
];
const HomeCarouselConmponent = () => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const carouselRef = useRef();
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={carouselRef}
        data={entries}
        autoplay
        renderItem={_renderItem}
        loop={true}
        autoplay={true}
        autoplayDelay={5000}
        autoplayInterval={5000}
        sliderWidth={vw * 90}
        itemWidth={vw * 90}
        onSnapToItem={index => setActiveCarouselIndex(index)}
        enableSnap
        lockScrollWhileSnapping={true}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeCarouselIndex}
        activeOpacity={1}
        containerStyle={styles.paginationContainer}
        dotColor={lightTheme.red}
        dotStyle={styles.paginationDot}
        inactiveDotColor={lightTheme.white}
        inactiveDotOpacity={0.9}
        inactiveDotScale={0.5}
        carouselRef={carouselRef}
        tappableDots
      />
      <View style={styles.title}>
        <GilroyMedium style={styles.text}>Pray Teach Serve</GilroyMedium>
      </View>
    </View>
  );
};

export default HomeCarouselConmponent;
