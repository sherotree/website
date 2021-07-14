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
import PageContent from '~/layout/common/page-content';
import ImgLazy from 'pages/component/img-lazy';
import HoverImg from 'pages/component/hover-img';
import { CopmFadeInUp } from 'pages/component/animate-comp';
import { map } from 'lodash';
import { useMobile } from 'common/utils';
import i18n from '~/i18n';
import images from './images';

const IndustryPartner = () => {
  const { partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12, partner13, partner14, partner15, partner16, partner17, partner18 } = images;

  const { activePartner1, activePartner2, activePartner3, activePartner4, activePartner5, activePartner6, activePartner7, activePartner8, activePartner9, activePartner10, activePartner11, activePartner12, activePartner13, activePartner14, activePartner15, activePartner16, activePartner17, activePartner18 } = images;

  const partnerMap = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12, partner13, partner14, partner15, partner16, partner17, partner18];

  const activePartnerMap = [
    activePartner1, activePartner2, activePartner3, activePartner4, activePartner5, activePartner6, activePartner7, activePartner8, activePartner9, activePartner10, activePartner11, activePartner12, activePartner13, activePartner14, activePartner15, activePartner16, activePartner17, activePartner18,
  ];

  return (
    <PageContent className="mt-24">
      <CopmFadeInUp>
        <div className="text-32-44 font-bold text-center">
          助力各行业客户成功
        </div>
      </CopmFadeInUp>
      <CopmFadeInUp>
        <div className="text-desc text-16-28 text-center mt-3">
          被各行业领军企业所信赖使用
        </div>
      </CopmFadeInUp>
      <div className="flex justify-between items-center mt-16">
        <CopmFadeInUp className="text-center">
          {
            map(partnerMap, (partner, index) => (
              <HoverImg width={185.8} height={104} imgSrc={partner} activeImgSrc={activePartnerMap[index]} />

            ))
          }
        </CopmFadeInUp>
      </div>
    </PageContent>
  );
};

export default IndustryPartner;
