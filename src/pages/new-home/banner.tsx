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
import { Button } from 'antd';
import { CopmFadeInUp } from 'pages/component/animate-comp';
import i18n from '~/i18n';
import images from './images';
import { CountUp } from 'use-count-up';

const Banner = () => {
  return (
    <div className="erda-home-banner">
      <PageContent>
        <CopmFadeInUp delay={0}>
          <img width={152} height={38} src={images.headerIcon} alt="" />
        </CopmFadeInUp>
        <CopmFadeInUp delay={100}>
          <div className="text-newPrimary mt-5 text-24-32" >Erda 开源开放，共建研发运营新生态</div>
        </CopmFadeInUp>
        <CopmFadeInUp delay={100}>
          <div className="text-desc mt-3 text-16-32 w-p430 text-justify">包含混合云管理、DevOps、微服务观测治理以及快数据治理等平台级服务能力，为企业和开发者提供稳定可靠、功能全面、兼容生态、开源开放的云原生 PaaS 平台和最佳实践</div>
        </CopmFadeInUp>
        <CopmFadeInUp delay={200}>
          <Button
            className="text-18-24 text-white mt-10 w-p130 h-12 rounded-md border-white py-3 px-7 bg-gradient-to-tl from-newPrimary to-lightPrimary"
            onClick={() => {
              window.open('/login-erda');
            }}
          >{i18n.t('free trial')}
          </Button>
        </CopmFadeInUp>
        <CopmFadeInUp delay={300}>
          <div className="mt-44 mb-16 flex justify-between" >
            <div className="flex flex-col items-center" >
              <div className="font-bold" >
                <span className="text-cyan text-44-60">
                  <CountUp isCounting end={50} duration={3} />
                </span>
                <span className="text-2xl">+</span>
              </div>
              <div>
                <span className="text-base text-desc mt-2
                "
                >已服务50+ 行业客户
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center" >
              <div className="font-bold" >
                <span className="text-cyan text-44-60">
                  <CountUp isCounting end={100} duration={3} />
                </span>
                <span className="text-2xl">+</span>
              </div>
              <div>
                <span className="text-base text-desc mt-2
                "
                >运维管理100+ K8S集群
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center" >
              <div className="font-bold" >
                <span className="text-cyan text-44-60">
                  <CountUp isCounting end={70} duration={3} />
                </span>
                <span className="text-2xl">w+</span>
              </div>
              <div>
                <span className="text-base text-desc mt-2
                "
                >70W 行代码全部开源
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center" >
              <div className="font-bold" >
                <span className="text-cyan text-44-60">
                  <CountUp isCounting end={5} duration={3} />
                </span>
                <span className="text-2xl">+</span>
              </div>
              <div>
                <span className="text-base text-desc mt-2
                "
                >覆盖多个全球性区域
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center" >
              <div className="font-bold" >
                <span className="text-cyan text-44-60">
                  <CountUp isCounting end={40} duration={3} />
                </span>
                <span className="text-2xl">+</span>
              </div>
              <div>
                <span className="text-base text-desc mt-2
                "
                >共计发布 40+ 版本
                </span>
              </div>
            </div>
          </div>
        </CopmFadeInUp>
        {/* TODO: */}
        <div className="earth">
          <img width={634} height={366} style={{ position: 'absolute', top: '80px', left: '-40px' }} src={images.headerAnimation} alt="" />
        </div>
      </PageContent>
    </div>
  );
};

export default Banner;
