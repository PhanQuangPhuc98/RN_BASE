import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ScreenComponents from '../../../components/ScreenComponents';

const Experiences = () => {
  return (
    <ScreenComponents
      children={
        <View style={styles.container}>
          <Text>Hello Experinces </Text>
        </View>
      }
    />
  );
};

export default Experiences;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
