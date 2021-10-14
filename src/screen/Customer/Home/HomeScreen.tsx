import {NavigationUtil} from '@navigators';
import {SCREEN_ROUTER_APP} from '../../../utils/Constants';
import React from 'react';
import {StyleSheet, ScrollView, Alert} from 'react-native';
import {
  ScreenComponents,
  RightComponents,
  CenterComponents,
  LeftComponents,
  BrooklynComponents,
  DiscoverComponents,
} from '@components';
import {R} from '@assets';
import {Theme} from '@constants';
const ShowFilter = () => {
  return Alert.alert('Hello');
};
const HomeScreen = () => {
  return (
    <ScreenComponents
      leftComponent={<LeftComponents onPress={ShowFilter} />}
      centerComponent={<CenterComponents />}
      rightComponent={<RightComponents />}
      statusBarProps={styles.statusBar}
      containerStyle={styles.statusBar}
      children={
        <ScrollView contentContainerStyle={styles.content}>
          <BrooklynComponents></BrooklynComponents>
          <DiscoverComponents></DiscoverComponents>
        </ScrollView>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
  },
  imgCenter: {
    height: 48,
    width: 49,
    resizeMode: 'contain',
  },
  statusBar: {
    backgroundColor: Theme.colors.white,
  },
  containerHeader: {
    backgroundColor: Theme.colors.white,
  },
});
export default HomeScreen;
