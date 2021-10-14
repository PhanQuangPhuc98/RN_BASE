import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ScreenComponents from '../../../components/ScreenComponents';

const ExperiencesDetailBooking = () => {
  return (
    <ScreenComponents
      children={
        <View style={styles.container}>
          <Text>Hello search Detail </Text>
        </View>
      }
    />
  );
};

export default ExperiencesDetailBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
