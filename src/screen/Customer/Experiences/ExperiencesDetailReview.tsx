import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ScreenComponents from '../../../components/ScreenComponents';

const ExperiencesDetailReview = () => {
  return (
    <ScreenComponents
      children={
        <View style={styles.container}>
          <Text>Hello search Detail Review </Text>
        </View>
      }
    />
  );
};

export default ExperiencesDetailReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
