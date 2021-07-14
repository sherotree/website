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

const BasicInfrastructure = () => {
  return (
    <div className="erda-home-pm">
      <PageContent>
        <CopmFadeInUp>
          <div className="text-cyan text-32-44 font-bold text-center mt-36">
            新一代企业数字化基础架构全景图
          </div>
        </CopmFadeInUp>
        <CopmFadeInUp className="mt-20 text-center">
          <ImgLazy width={1122} height={560} src={images.infrastructure} />
        </CopmFadeInUp>
      </PageContent>
    </div>
  );
};

export default BasicInfrastructure;
