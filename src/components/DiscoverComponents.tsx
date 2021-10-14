import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {R} from '@assets';
import {Theme} from '@constants';
import {DataCenter} from '@constants';
import MasonryList from '@react-native-seoul/masonry-list';
export const DiscoverComponents = (props: any) => {
  const {onPress, Detail} = props;
  const renderDiscove = ({item, index}: any) => {
    return (
      <Pressable
        onPress={() => {
          Alert.alert('hello');
        }}
        style={styles.containerImgBackgroup}>
        <ImageBackground
          resizeMode={'contain'}
          style={styles.image}
          source={item.imgae}>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.city}</Text>
          </View>
          <View>
            <Text>
              {item.count}
              {item.exper}
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.contnetHeader}>
        <Text style={styles.text}>Discover fascinating destinations</Text>
        <Text style={styles.styleButton} onPress={onPress}>
          View all
        </Text>
      </View>
      <View>
        <MasonryList
          style={styles.styleList}
          keyExtractor={(index: any) => index.id}
          data={DataCenter}
          numColumns={2}
          renderItem={renderDiscove}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contnetHeader: {
    flexDirection: 'row',
    paddingTop: 48,
  },
  text: {
    fontSize: 28,
    fontFamily: R.fonts.bold,
    fontWeight: 'bold',
    color: Theme.colors.black,
    lineHeight: 30,
    borderLeftWidth: 1,
    paddingLeft: 20,
    borderColor: Theme.colors.brown,
    width: 180,
  },
  styleButton: {
    width: 103,
    height: 41,
    backgroundColor: Theme.colors.black,
    color: Theme.colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    marginLeft: 43,
    marginTop: 43,
  },
  styleList: {
    alignSelf: 'stretch',
    backgroundColor: 'green',
  },
  image: {
    width: 145,
    height: 195,
  },
  containerImgBackgroup: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 10,
  },
});
export default DiscoverComponents;
