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

const CoreFunction = () => {
  return (

    <PageContent className="mt-24">

      <CopmFadeInUp>
        <div className="text-32-44 font-bold text-center">
          核心功能
        </div>
      </CopmFadeInUp>
      <CopmFadeInUp>
        <div className="text-desc text-16-28 text-center mt-3">
          开源的 Erda 平台，助力开发者快速构建新一代数据、应用研发运营的 PaaS 平台
        </div>
      </CopmFadeInUp>

      <CopmFadeInUp className="flex justify-between mt-24">
        <ImgLazy width={224} height={400} src={images.coreFunction1} className="rounded-md"/>
        <ImgLazy width={224} height={400} src={images.coreFunction2} className="rounded-md"/>
        <ImgLazy width={224} height={400} src={images.coreFunction3} className="rounded-md"/>
        <ImgLazy width={224} height={400} src={images.coreFunction4} className="rounded-md"/>
        {/* <ImgLazy width={224} height={400} src={images.coreFunction5} className="rounded-md"/> */}
        <div className="bg-scroll bg-cover w-p224 h-p400 px-4 py-8 text-white" style={{ backgroundImage: 'url(/images/home/home-images/core-function-1.png)' }}>
          <div className="text-46-66 font-bold">01</div>
          <div className="text-18-24 font-bold">云厂商无绑定的混合云
            架构
          </div>
          <div className="text-16-24 mt-3 font-light">
            基于 Kubernetes 等云原生技术架构，支持异构资源统一池化、统一调度、白屏化运维、声明式云服务编排，屏蔽开发者对底层资源的感知，轻松实现环境隔离、跨云迁移。
          </div>
        </div>
      </CopmFadeInUp>
    </PageContent>
  );
};

export default CoreFunction;
