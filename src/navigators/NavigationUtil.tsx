import {CommonActions} from '@react-navigation/native';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(name: string, params?: any) {
  if (_navigator) _navigator.dispatch(CommonActions.navigate(name, params));
}
function goBack() {
  if (_navigator) _navigator.dispatch(CommonActions.goBack());
}

export const NavigationUtil = {
  setTopLevelNavigator,
  navigate,
  goBack,
};
export default NavigationUtil;
