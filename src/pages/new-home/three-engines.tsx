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

const ThreeEngines = () => {
  return (
    <PageContent className="mt-24">
      <CopmFadeInUp>
        <div className="text-cyan text-32-44 font-bold text-center">
          新一代企业数字化的三大引擎
        </div>
      </CopmFadeInUp>
      <CopmFadeInUp>
        <div className="text-desc text-16-28 text-center mt-3">
          三大引擎定义新一代企业数字化基础架构
        </div>
      </CopmFadeInUp>
      <div className="flex justify-between items-center mt-24">
        <div>
          <ImgLazy width={640} height={508} src={images.threeEngine} />
        </div>
        <div className="w-p480">
          <CopmFadeInUp delay={0}>
            <div className="h-1 w-8 bg-gradient-to-br from-lakegreen to-algaegreen" />
            <div className="text-cyan text-20-28 font-bold mt-3">
              混合云管理
            </div>
            <div className="text-desc text-16-28 mt-1">
              基于 Kubernetes 等云原生技术架构，打造云上、云下基础设施统一管理、调度的资源池，建设稳定、安全的混合云服务，屏蔽上层应用研发人员对底层资源的感知
            </div>
          </CopmFadeInUp>
          <CopmFadeInUp className="mt-10" delay={100}>
            <div className="h-1 w-8 bg-gradient-to-br from-newPrimary to-lightPrimary" />
            <div className="text-cyan text-20-28 font-bold mt-3">
              微服务研发治理
            </div>
            <div className="text-desc text-16-28 mt-1">
              以基础设施即代码和 GitOps 理念，提供敏捷项目管理、代码托管、CI/CD、自动化测试和微服务治理等功能，建设一站式应用研发全生命周期管理体系，让应用研发人员在一个平台上进行高效研发协同
            </div>
          </CopmFadeInUp>
          <CopmFadeInUp className="mt-10" delay={200}>
            <div className="h-1 w-8 bg-gradient-to-br from-lakegreen to-algaegreen" />
            <div className="text-cyan text-20-28 font-bold mt-3">
              数据开发治理
            </div>
            <div className="text-desc text-16-28 mt-1">
              提供端到端的大数据平台能力，快速帮助企业在业务场景中发现和提炼最有价值的数据，为推动业务快速向前发展提供决策数据
            </div>
          </CopmFadeInUp>
        </div>
      </div>
    </PageContent>
  );
};

export default ThreeEngines;
