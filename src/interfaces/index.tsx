import React from 'react';
import {StyleProp, ViewStyle, StatusBarProps} from 'react-native';
export interface PropsComponent {
  /**
   * View hiển thị
   */
  children?: React.ReactNode;
  /**
   * State hiện thị màn hình Loading
   */
  isLoading?: boolean;
  /**
   * State hiện thị màn hình Lỗi
   */
  isError?: object | boolean;
  /**
   * View nút phải
   */
  rightComponent?: React.ReactElement;
  /**
   * View nút trái
   */
  leftComponent?: any;
  /**
   * View ở giữa
   */
  centerComponent?: React.ReactElement;
  /**
   * Style Container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Style View center
   */
  centerContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style View left
   */
  leftContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style View Right
   */
  rightContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Status Bar
   */
  chilStyle?: StyleProp<ViewStyle>;

  statusBarProps?: StatusBarProps;
  reload?: () => void;
  onRefresh?: () => void;

  dialogLoading?: boolean;

  isSafeAre?: boolean;
  isEmpty?: boolean;
  renderViewHeader?: React.ReactNode;
  titleBackHeader?: string;
  backgroundColor?: string;
}
