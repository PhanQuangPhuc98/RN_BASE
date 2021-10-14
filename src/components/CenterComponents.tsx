import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {R} from '@assets';
import {Theme} from '@constants';
export const CenterComponents = () => {
  return (
    <View style={styles.containerCenter}>
      <Image style={styles.imgCenter} source={R.images.ic_logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCenter: {
    backgroundColor: Theme.colors.white,
    paddingRight: 25,
  },
  imgCenter: {
    height: 50,
    width: 52,
    resizeMode: 'contain',
  },
});

export default CenterComponents;
