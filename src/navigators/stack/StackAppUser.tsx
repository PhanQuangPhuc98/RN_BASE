import HomeScreen from '../../screen/Customer/Home/HomeScree';
import Notification from '../../screen/Customer/Notification/Notification';
import UserScreen from '../../screen/Customer/User/UserScreen';
import {SCREEN_ROUTER_APP} from '../../utils/Constants';
const {HOME, NOTIFY, USER} = SCREEN_ROUTER_APP;
export default {
  [HOME]: HomeScreen,
  [NOTIFY]: Notification,
  [USER]: UserScreen,
};
