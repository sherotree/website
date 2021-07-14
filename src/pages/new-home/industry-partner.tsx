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
import { CopmFadeInUp } from 'pages/component/animate-comp';
import { useMobile } from 'common/utils';
import i18n from '~/i18n';
import images from './images';

const IndustryPartner = () => {
  return (
    <PageContent>
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
          <ImgLazy width={1184} height={432} src={images.techFrame} />
        </CopmFadeInUp>
      </div>
    </PageContent>
  );
};

export default IndustryPartner;
