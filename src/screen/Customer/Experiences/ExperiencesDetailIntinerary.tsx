import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ScreenComponents from '../../../components/ScreenComponents';

const ExperiencesDetailIntinerary = () => {
  return (
    <ScreenComponents
      children={
        <View style={styles.container}>
          <Text>Hello search Detail Intinerary </Text>
        </View>
      }
    />
  );
};

export default ExperiencesDetailIntinerary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
