import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ScreenComponents from '../../../components/ScreenComponents';

const ExperiencesDetail = () => {
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

export default ExperiencesDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
