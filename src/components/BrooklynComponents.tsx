import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {R} from '@assets';
import {Add_Comma} from '@utils';
import {Theme} from '@constants';
const renderTravel = (
  img: any,
  count: any,
  lable: any,
  even: any,
  style: boolean,
) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: style ? 'row-reverse' : 'row',
          paddingTop: style ? 12 : 0,
        },
      ]}>
      <View
        style={[
          styles.containerImg,
          {flexDirection: style ? 'row-reverse' : 'row'},
        ]}>
        <Image source={img} style={styles.Img} />
      </View>
      <View
        style={[
          styles.container,
          {paddingTop: 15, paddingLeft: style ? 0 : 25},
        ]}>
        <Text style={styles.textCount}>{count}</Text>
        <Text style={styles.textContent}>{lable}</Text>
        <Text style={styles.textDiscover}>{even}</Text>
      </View>
    </View>
  );
};
export const BrooklynComponents = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Welcome back.</Text>
      <Text style={styles.textTravel}>Brooklyn Simmons</Text>
      {renderTravel(
        R.images.img_exper1,
        `more than ${Add_Comma(2000)}`,
        'Experiences',
        'Discover now',
        false,
      )}
      {renderTravel(
        R.images.img_hotel,
        `more than ${Add_Comma(32000)}`,
        'Experiences',
        'Discover now',
        true,
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    color: Theme.colors.brown,
    fontSize: 18,
    fontFamily: R.fonts.regular,
  },
  textTravel: {
    fontSize: 28,
    fontFamily: R.fonts.bold,
    fontWeight: 'bold',
    color: Theme.colors.black,
    paddingBottom: 32,
  },
  containerImg: {
    borderRadius: 8,
    flex: 1,
  },
  Img: {
    height: 104,
    width: 145,
  },
  textCount: {
    fontSize: 8,
    fontFamily: R.fonts.regular,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: Theme.colors.darker,
  },
  textContent: {
    fontSize: 18,
    fontFamily: R.fonts.bold,
    fontWeight: 'bold',
    color: Theme.colors.black,
  },
  textDiscover: {
    fontSize: 14,
    paddingTop: 10,
    textDecorationLine: 'underline',
    fontFamily: R.fonts.bold,
    fontWeight: 'bold',
    color: Theme.colors.orange,
  },
});
export default BrooklynComponents;
