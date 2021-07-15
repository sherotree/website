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
import SwitchCard from '../component/switch-card';
import { CopmFadeInUp } from 'pages/component/animate-comp';
import { map } from 'lodash';
import { useMobile } from 'common/utils';
import i18n from '~/i18n';
import images from './images';

const ValueToUser = () => {
  const [activeKey, setActiveKey] = React.useState(1);

  const valueToUserTeam = [
    {
      icon: images.teamIcon1,
      teamKey: 1,
      activeIcon: images.teamActiveIcon1,
      name: '组织管理团队',
    },
    {
      icon: images.teamIcon2,
      teamKey: 2,
      activeIcon: images.teamActiveIcon2,
      name: '基础设施团队',
    },
    {
      icon: images.teamIcon3,
      teamKey: 3,
      activeIcon: images.teamActiveIcon3,
      name: '应用研发团队',
    },
    {
      icon: images.teamIcon4,
      teamKey: 4,
      activeIcon: images.teamActiveIcon4,
      name: '运维团队',
    },
    {
      icon: images.teamIcon5,
      teamKey: 5,
      activeIcon: images.teamActiveIcon5,
      name: '数据开发治理团队',
    },
  ];

  const valueToUserTeamData = [
    {
      teamKey: 1,
      title: '全面的资产运营、研发效能统计数据，为组织管理者决策提供数据支撑',
      image: images.valueToUser1,
      descriptions:
      ['统筹分析所有数字资产的资源利用率、可用性，以及云厂商账单等数据', '纵向查看热点和空闲资产，横向对比项目开销和资源预算', '研发效能统计数据，为精细化管理和效能提升决策提供数据支撑'],
    },
    {
      teamKey: 2,
      title: '白屏化运维、声明式配置编排，让团队管理和运维云资源、Kubernetes 集群变得更简单',
      image: images.valueToUser2,
      descriptions:
      ['资源统一池化管理、统一调度、统一运维，提高资源利用率的同时有效降低运维成本', '支持多云多集群Kubernetes管理，避免厂商锁定，轻松实现环境隔离、跨云迁移', '基于声明式配置灵活编排云厂商提供的各类中间件云服务，提高运维效率，加速业务上云', '白屏化运维 Kubernetes，有效降低运维门槛'],
    },
    {
      teamKey: 3,
      title: '以应用为中心，为开发者构建企业级的 DevOps 平台，提供极致的应用开发体验',
      image: images.valueToUser3,
      descriptions:
      ['基于 Git 协议，平台默认企业级代码仓库，开箱即用，无需搭建或购买', '提供全方位的 API 管理能力，基于 API 实现更好的团队协作，流量治理和能力开放', '提供包含代码单元测试、代码安全测试、手工测试用例管理和自动化测试的全方位的测试管理能力', '提供覆盖代码扫描构建、测试、部署等能力的流水线服务，让应用的持续集成更简单'],
    },
    {
      teamKey: 4,
      title: '构建一站式立体式的监控运维体系，有效保障稳定生产',
      image: images.valueToUser4,
      descriptions:
      ['提供应用便捷的持续集成、测试、审核、发布、升级与弹性扩缩容', '根据微服务调用关系自动绘制全局拓扑架构图，能够清晰洞察微服务之间的关系和调用情况', '根据微服务每次调用链路中各请求点信息捕获，实现整个链路调用信息的全透明化，高效便捷帮忙开发对于应用调用链路的诊断分析', '提供从平台到应用维度的日志、监控、事件、审计、告警与通知，实现集中式与多租户隔离的可观测性', '日志服务针对应用日志进行搜索分析，协助用户深入挖掘日志数据的业务价值'],
    },
    {
      teamKey: 5,
      title: '提供端到端的大数据平台能力，助力开发者缩短数据价值的萃取过程',
      image: images.valueToUser5,
      descriptions:
      ['多元异构的离线和实时的数据采集、萃取、融合、构建企业级数据资产', '基于业务应用场景的数据域建模，实现真正的数据驱动业务价值', '快速将数据表生成API的能力，同时支持API的统一管理和发布', '面向技术及业务的可视化操作界面及标准化流程管理，灵活易用、降低大数据开发的门和成本'],
    },

  ];

  const SwitchTeamList = ({ icon = '', activeIcon = '', name = '', teamKey }: { icon: string; activeIcon: string; name: string; teamKey: number }) => {
    const isActive = teamKey === activeKey;
    return (
      <div
        className={`flex items-center bg-gradient-to-br  px-5 py-7 w-56 h-22 cursor-pointer ${isActive ? 'from-lightPrimary to-newPrimary' : 'from-graniteGray to-cyan'}`}
        onClick={() => setActiveKey(teamKey)}
      >
        <ImgLazy className="main-img" width={32} height={32} src={isActive ? activeIcon : icon} />
        <span className={`text-18-24 ml-2 ${isActive ? 'text-white' : 'text-sliverGray'}`}>
          {name}
        </span>
      </div>
    );
  };

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
              {
                map(valueToUserTeam, (team) =>
                  (<SwitchTeamList
                    icon={team.icon}
                    name={team.name}
                    teamKey={team.teamKey}
                    activeIcon={team.activeIcon}
                  />))
              }
            </div>
          </CopmFadeInUp>
          <CopmFadeInUp>
            {
            map(valueToUserTeamData, (data) => <SwitchCard title={data.title} image={data.image} descriptions={data.descriptions} teamKey={data.teamKey} activeKey={activeKey} />)
            }
          </CopmFadeInUp>
        </div>
      </PageContent>

    </div>
  );
};

export default ValueToUser;
