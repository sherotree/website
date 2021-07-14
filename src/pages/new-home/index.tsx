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

import React from 'react';
import Banner from './banner';
import MainCard from './main-card';
import ProjectManagement from './project-manage';
import ThreeEngines from './three-engines';
import BasicInfrastructure from './basic-infrastructure';
import ValueToUser from './value-to-user';
import CoreFunction from './core-function';
import TechnicalFrame from './technical-framework';
import IndustryPartner from './industry-partner';
import TestManage from './test-manage';
import PageContent from '~/layout/common/page-content';
import { CopmFadeInUp } from 'pages/component/animate-comp';
import HomeConfig from 'pages/home/config';
import DoubleWing from 'pages/home/double-wing';
import { Link } from 'react-router-dom';
import i18n from '~/i18n';
import './index.scss';


const Home = () => {
  return (
    <div className="erda-home pt0">
      <Banner />
      <ThreeEngines />
      <BasicInfrastructure />
      <ValueToUser />
      <CoreFunction />
      <TechnicalFrame />
      <IndustryPartner />
      <div className="contact-trial bg-scroll bg-cover py-20 mt-20" style={{ backgroundImage: 'url(/images/home/home-images/homepage-end.png)' }} >
        <PageContent>
          <CopmFadeInUp>
            <p className="text-36-48 text-white text-center">{i18n.t('what difficulties does your team have in the application development process?')}</p>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <div className="flex justify-center items-center">
              <div
                className="w-p140 h-12 mx-3 bg-white text-newPrimary text-18-24 flex justify-center items-center rounded-xl cursor-pointer"
                onClick={() => {
                  window.open('/login-erda');
                }}
              >{i18n.t('common:free trial')}
              </div>
              <Link className="w-p140 h-12 mx-3 bg-newPrimary text-white text-18-24 flex justify-center items-center rounded-xl cursor-pointer border-white border border-solid hover:text-newPrimary hover:bg-white" to="/contact">{i18n.t('default:contact us')}</Link>
            </div>
          </CopmFadeInUp>
        </PageContent>
      </div>
    </div>
  );
};

export default Home;
