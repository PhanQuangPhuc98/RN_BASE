import HomeScreen from '../../screen/Customer/Home/HomeScreen';
import Experiences from '../../screen/Customer/Experiences/Experiences';
import ExperiencesDetail from '../../screen/Customer/Experiences/ExperiencesDetail';
import ExperiencesDetailIntinerary from '../../screen/Customer/Experiences/ExperiencesDetailIntinerary';
import ExperiencesDetailReview from '../../screen/Customer/Experiences/ExperiencesDetailReview';
import ExperiencesSearch from '../../screen/Customer/Experiences/ExperiencesSearch';
import ExperiencesSearchResult from '../../screen/Customer/Experiences/ExperiencesSearchResult';
import ExperiencesDetailBooking from '../../screen/Customer/Experiences/ExperiencesDetailBooking';

import {SCREEN_ROUTER_APP} from '../../utils/Constants';
const {
  HOME,
  EXPERIENCES,
  EXPERIENCESDETAIL,
  EXPERIENCESINTINERARY,
  EXPERIENCESREVIEW,
  EXPERIENCESSEARCH,
  EXPERIENCESRESULT,
  EXPERIENCESBOOKING,
} = SCREEN_ROUTER_APP;
export default {
  [HOME]: HomeScreen,
  [EXPERIENCES]: Experiences,
  [EXPERIENCESDETAIL]: ExperiencesDetail,
  [EXPERIENCESINTINERARY]: ExperiencesDetailIntinerary,
  [EXPERIENCESREVIEW]: ExperiencesDetailReview,
  [EXPERIENCESSEARCH]: ExperiencesSearch,
  [EXPERIENCESRESULT]: ExperiencesSearchResult,
  [EXPERIENCESBOOKING]: ExperiencesDetailBooking,
};
