import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Svg,  Path , G } from 'react-native-svg';

const ImageEly = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.roundImage}
        source={require('../images/cd0e0dbb19f35e33bb6e68b4f47d0db8.jpg')}
      />
    </View>
  );
};

const SecondImageEly = () => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.smallImage}
          source={require('../images/2570618_f4bb0.png')}
        />
      </View>
    );
};

const StarSVG = ({ style, rotate }) => {
  return (
    <View style={styles.starContainer}>
      <Svg 
        height="50" 
        width="50" 
        viewBox="0 0 24 24" 
        fill="floralwhite"
        style={style}
      >
        <G transform={rotate ? `rotate(${rotate})` : ''}>
          <Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'floralwhite',
  },
  smallImage: {
    width: 100,
    height: 100
  },
  splashImage: {
    height: 150,
    width: 150,
    display: 'flex',
    alignSelf: 'flex-start',  
    marginLeft: 20
  },
  starContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});

export {ImageEly, SecondImageEly, StarSVG};