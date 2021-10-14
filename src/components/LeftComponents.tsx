import React from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {R} from '@assets';
export const LeftComponents = (props: any) => {
  const {onPress} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.imgLeft} source={R.images.ic_menu}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
  },
  imgLeft: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    position: 'relative',
    top: 10,
  },
});

export default LeftComponents;
