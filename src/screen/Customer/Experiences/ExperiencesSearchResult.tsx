import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ScreenComponents from '../../../components/ScreenComponents';

const ExperiencesSearchResult = () => {
  return (
    <ScreenComponents
      children={
        <View style={styles.container}>
          <Text>Hello search result</Text>
        </View>
      }
    />
  );
};

export default ExperiencesSearchResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
