import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {R} from '@assets';

export const RightComponents = () => {
  return (
    <View style={styles.containerRight}>
      <Image style={styles.imgRight} source={R.images.img_avatar} />
    </View>
  );
};
const styles = StyleSheet.create({
  containerRight: {
    borderRadius: 8,
    backgroundColor: 'green',
  },
  imgRight: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    position: 'absolute',
    right: 32,
    top: 10,
  },
});

export default RightComponents;
