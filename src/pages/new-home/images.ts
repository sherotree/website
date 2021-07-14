// Copyright (c) 2021 Terminus, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { isZh } from '~/i18n';
import mainLeft from '~/images/home/main-l.png';
import mainRight from '~/images/home/main-r.png';
import mainCenter from '~/images/home/main-c.png';
import mainCenterEn from '~/images/home/main-c-en.png';
import projectManagement from '~/images/home/Pic2.png';
import projectManagementEn from '~/images/home/Pic2-en.png';
import projectManagementMale from '~/images/home/Pic2-1.png';
import projectManagementFemale from '~/images/home/Pic2-2.png';
import codeRepo from '~/images/home/Pic3.png';
import api from '~/images/home/Pic7.png';
import cicd from '~/images/home/Pic4.png';
import monitor from '~/images/home/Pic5.png';
import monitorEn from '~/images/home/Pic5-en.png';
import log from '~/images/home/Pic-log.png';
import logEn from '~/images/home/Pic-log-en.png';
import multiCloud from '~/images/home/Pic9.png';
import multiCloudEn from '~/images/home/Pic9-en.png';
import banner from '~/images/home/banner/earth.png';
import fdp from '~/images/home/fdp.png';

// new home
import headerIcon from '~/images/home/home-images/header-icon.png';
import headerAnimation from '~/images/home/home-images/header-animation.png';
import threeEngine from '~/images/home/home-images/three-engine.png';
import infrastructure from '~/images/home/home-images/infrastructure.png';
import ValueToUserBg from '~/images/home/home-images/value-to-user-bg.png';
import teamIcon1 from '~/images/home/home-images/team-icon1.png';
import teamIcon2 from '~/images/home/home-images/team-icon2.png';
import teamIcon3 from '~/images/home/home-images/team-icon3.png';
import teamIcon4 from '~/images/home/home-images/team-icon4.png';
import teamIcon5 from '~/images/home/home-images/team-icon5.png';
import teamActiveIcon1 from '~/images/home/home-images/team-active-icon1.png';
import teamActiveIcon2 from '~/images/home/home-images/team-active-icon2.png';
import teamActiveIcon3 from '~/images/home/home-images/team-active-icon3.png';
import teamActiveIcon4 from '~/images/home/home-images/team-active-icon4.png';
import teamActiveIcon5 from '~/images/home/home-images/team-active-icon5.png';
import valueToUser1 from '~/images/home/home-images/value-to-user-1.png';
import valueToUser2 from '~/images/home/home-images/value-to-user-2.png';
import valueToUser3 from '~/images/home/home-images/value-to-user-3.png';
import valueToUser4 from '~/images/home/home-images/value-to-user-4.png';
import valueToUser5 from '~/images/home/home-images/value-to-user-5.png';
import coreFunction1 from '~/images/home/home-images/core-function-1.png';
import coreFunction2 from '~/images/home/home-images/core-function-2.png';
import coreFunction3 from '~/images/home/home-images/core-function-3.png';
import coreFunction4 from '~/images/home/home-images/core-function-4.png';
import coreFunction5 from '~/images/home/home-images/core-function-5.png';
import techFrameBg from '~/images/home/home-images/technical-framework-bg.png';
import techFrame from '~/images/home/home-images/technical-framework.png';
import partner1 from '~/images/home/home-images/partner-logo/partner-1.png';
import partner2 from '~/images/home/home-images/partner-logo/partner-2.png';
import partner3 from '~/images/home/home-images/partner-logo/partner-3.png';
import partner4 from '~/images/home/home-images/partner-logo/partner-4.png';
import partner5 from '~/images/home/home-images/partner-logo/partner-5.png';
import partner6 from '~/images/home/home-images/partner-logo/partner-6.png';
import partner7 from '~/images/home/home-images/partner-logo/partner-7.png';
import partner8 from '~/images/home/home-images/partner-logo/partner-8.png';
import partner9 from '~/images/home/home-images/partner-logo/partner-9.png';
import partner10 from '~/images/home/home-images/partner-logo/partner-10.png';
import partner11 from '~/images/home/home-images/partner-logo/partner-11.png';
import partner12 from '~/images/home/home-images/partner-logo/partner-12.png';
import partner13 from '~/images/home/home-images/partner-logo/partner-13.png';
import partner14 from '~/images/home/home-images/partner-logo/partner-14.png';
import partner15 from '~/images/home/home-images/partner-logo/partner-15.png';
import partner16 from '~/images/home/home-images/partner-logo/partner-16.png';
import partner17 from '~/images/home/home-images/partner-logo/partner-17.png';
import partner18 from '~/images/home/home-images/partner-logo/partner-18.png';
import activePartner1 from '~/images/home/home-images/partner-logo/active-partner-1.png';
import activePartner2 from '~/images/home/home-images/partner-logo/active-partner-2.png';
import activePartner3 from '~/images/home/home-images/partner-logo/active-partner-3.png';
import activePartner4 from '~/images/home/home-images/partner-logo/active-partner-4.png';
import activePartner5 from '~/images/home/home-images/partner-logo/active-partner-5.png';
import activePartner6 from '~/images/home/home-images/partner-logo/active-partner-6.png';
import activePartner7 from '~/images/home/home-images/partner-logo/active-partner-7.png';
import activePartner8 from '~/images/home/home-images/partner-logo/active-partner-8.png';
import activePartner9 from '~/images/home/home-images/partner-logo/active-partner-9.png';
import activePartner10 from '~/images/home/home-images/partner-logo/active-partner-10.png';
import activePartner11 from '~/images/home/home-images/partner-logo/active-partner-11.png';
import activePartner12 from '~/images/home/home-images/partner-logo/active-partner-12.png';
import activePartner13 from '~/images/home/home-images/partner-logo/active-partner-13.png';
import activePartner14 from '~/images/home/home-images/partner-logo/active-partner-14.png';
import activePartner15 from '~/images/home/home-images/partner-logo/active-partner-15.png';
import activePartner16 from '~/images/home/home-images/partner-logo/active-partner-16.png';
import activePartner17 from '~/images/home/home-images/partner-logo/active-partner-17.png';
import activePartner18 from '~/images/home/home-images/partner-logo/active-partner-18.png';



const zhImgMap = {
  banner,
  mainLeft,
  mainRight,
  mainCenter,
  projectManagement,
  projectManagementMale,
  projectManagementFemale,
  codeRepo,
  api,
  cicd,
  monitor,
  log,
  multiCloud,
  fdp,
  headerIcon,
  headerAnimation,
  threeEngine,
  infrastructure,
  ValueToUserBg,
  teamIcon1,
  teamIcon2,
  teamIcon3,
  teamIcon4,
  teamIcon5,
  teamActiveIcon1,
  teamActiveIcon2,
  teamActiveIcon3,
  teamActiveIcon4,
  teamActiveIcon5,
  valueToUser1,
  valueToUser2,
  valueToUser3,
  valueToUser4,
  valueToUser5,
  coreFunction1,
  coreFunction2,
  coreFunction3,
  coreFunction4,
  coreFunction5,
  techFrameBg,
  techFrame,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
  partner15,
  partner16,
  partner17,
  partner18,
  activePartner1,
  activePartner2,
  activePartner3,
  activePartner4,
  activePartner5,
  activePartner6,
  activePartner7,
  activePartner8,
  activePartner9,
  activePartner10,
  activePartner11,
  activePartner12,
  activePartner13,
  activePartner14,
  activePartner15,
  activePartner16,
  activePartner17,
  activePartner18,
};

const enImgMap = {
  banner,
  mainLeft,
  mainRight,
  mainCenter: mainCenterEn,
  projectManagement: projectManagementEn,
  projectManagementMale,
  projectManagementFemale,
  codeRepo,
  api,
  cicd,
  monitor: monitorEn,
  log: logEn,
  multiCloud: multiCloudEn,
  fdp,
  headerIcon,
  headerAnimation,
  threeEngine,
  infrastructure,
  ValueToUserBg,
  teamIcon1,
  teamIcon2,
  teamIcon3,
  teamIcon4,
  teamIcon5,
  teamActiveIcon1,
  teamActiveIcon2,
  teamActiveIcon3,
  teamActiveIcon4,
  teamActiveIcon5,
  valueToUser1,
  valueToUser2,
  valueToUser3,
  valueToUser4,
  valueToUser5,
  coreFunction1,
  coreFunction2,
  coreFunction3,
  coreFunction4,
  coreFunction5,
  techFrameBg,
  techFrame,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
  partner10,
  partner11,
  partner12,
  partner13,
  partner14,
  partner15,
  partner16,
  partner17,
  partner18,
  activePartner1,
  activePartner2,
  activePartner3,
  activePartner4,
  activePartner5,
  activePartner6,
  activePartner7,
  activePartner8,
  activePartner9,
  activePartner10,
  activePartner11,
  activePartner12,
  activePartner13,
  activePartner14,
  activePartner15,
  activePartner16,
  activePartner17,
  activePartner18,
};


export default isZh() ? zhImgMap : enImgMap;
