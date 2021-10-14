import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PropsComponent} from '@interfaces';
import {Header} from 'react-native-elements';
import {Theme} from '@constants';
export const ScreenComponents: React.FC<PropsComponent> = props => {
  const {
    centerComponent,
    rightComponent,
    leftComponent,
    centerContainerStyle,
    leftContainerStyle,
    rightContainerStyle,
    statusBarProps,
    containerStyle,
    children,
    dialogLoading,
    isSafeAre = false,
    renderViewHeader,
    titleBackHeader,
    backgroundColor,
    chilStyle,
  } = props;
  return (
    <SafeAreaView
      style={[
        styles.Container,
        {backgroundColor: backgroundColor || Theme.colors.white},
      ]}>
      <Header
        containerStyle={containerStyle}
        centerComponent={centerComponent}
        rightComponent={rightComponent}
        leftComponent={leftComponent}
        centerContainerStyle={centerContainerStyle}
        leftContainerStyle={leftContainerStyle}
        rightContainerStyle={rightContainerStyle}
        statusBarProps={statusBarProps}
      />
      <SafeAreaView
        style={chilStyle || styles.Container}
        children={children}></SafeAreaView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {flex: 1},
});
export default ScreenComponents;
