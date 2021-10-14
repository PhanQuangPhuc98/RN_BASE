import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ScreenComponents from '../../../components/ScreenComponents';

const ExperiencesSearch = () => {
  return (
    <ScreenComponents
      children={
        <View style={styles.container}>
          <Text>Hello search </Text>
        </View>
      }
    />
  );
};

export default ExperiencesSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
