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

const ValueToUser = () => {
  return (
    <div className="bg-scroll bg-cove pt-24 pb-36" style={{ backgroundImage: 'url(/images/home/home-images/value-to-user-bg.png)' }}>
      <PageContent>

        <CopmFadeInUp>
          <div className="text-white text-32-44 font-bold text-center">
            对象用户价值
          </div>
        </CopmFadeInUp>
        <CopmFadeInUp>
          <div className="text-whisper text-16-28 text-center mt-3">
            平台多租户、多用户权限设置，让不同团队在一个平台上进行高效协同
          </div>
        </CopmFadeInUp>
        <div className="flex justify-between items-center mt-16">
          <CopmFadeInUp className="text-center">
            <div>
              <div className="flex items-center bg-gradient-to-br from-graniteGray to-cyan px-5 py-7 w-56 h-22 ">
                <ImgLazy width={32} height={32} src={images.teamIcon1} />
                <span className="text-18-24 text-white ml-2">
                  组织管理团队
                </span>
              </div>
              <div className="flex items-center bg-gradient-to-br from-graniteGray to-cyan px-5 py-7 w-56 h-22 ">
                <ImgLazy width={32} height={32} src={images.teamIcon2} />
                <span className="text-18-24 text-white ml-2">
                  基础设施团队
                </span>
              </div>
              <div className="flex items-center bg-gradient-to-br from-graniteGray to-cyan px-5 py-7 w-56 h-22 ">
                <ImgLazy className="main-img" width={32} height={32} src={images.teamIcon3} />
                <span className="text-18-24 text-white ml-2">
                  应用研发团队
                </span>
              </div>
              <div className="flex items-center bg-gradient-to-br from-graniteGray to-cyan px-5 py-7 w-56 h-22 ">
                <ImgLazy className="main-img" width={32} height={32} src={images.teamIcon4} />
                <span className="text-18-24 text-white ml-2">
                  运维团队
                </span>
              </div>
              <div className="flex items-center bg-gradient-to-br from-graniteGray to-cyan px-5 py-7 w-56 h-22 ">
                <ImgLazy className="main-img" width={32} height={32} src={images.teamIcon5} />
                <span className="text-18-24 text-white ml-2">
                  数据开发治理团队
                </span>
              </div>
            </div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            <div className="bg-white w-p866 h-p480 rounded-md flex justify-between p-5">
              <div className="px-4 py-3 w-p400">
                <div className="h-1 w-8 bg-gradient-to-br from-newPrimary to-lightPrimary" />
                <div className="text-cyan text-18-28 font-bold mt-3">
                  全面的资产运营、研发效能统计数据，为组织管理者决策提供数据支撑
                </div>
                <div>
                  <div className="flex justify-between items-start mt-5">
                    <div className="w-2 h-1.5 bg-newPrimary rounded-full bg-opacity-50 mt-2" />
                    <div className="text-16-28 text-desc ml-2">统筹分析所有数字资产的资源利用率、可用性，以及云厂商账单等数据</div>
                  </div>
                  <div className="flex justify-between items-start mt-5">
                    <div className="w-2 h-1.5 bg-newPrimary rounded-full bg-opacity-50 mt-2" />
                    <div className="text-16-28 text-desc ml-2">纵向查看热点和空闲资产，横向对比项目开销和资源预算</div>
                  </div>
                  <div className="flex justify-between items-start mt-5">
                    <div className="w-2 h-1.5 bg-newPrimary rounded-full bg-opacity-50 mt-2" />
                    <div className="text-16-28 text-desc ml-2">研发效能统计数据，为精细化管理和效能提升决策提供数据支撑</div>
                  </div>
                </div>
              </div>
              <ImgLazy width={348} height={444} src={images.valueToUser1} />
            </div>
          </CopmFadeInUp>
        </div>
      </PageContent>

    </div>
  );
};

export default ValueToUser;
