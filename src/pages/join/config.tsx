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
import delivery from '~/images/join/delivery.png';
import filter from '~/images/join/filter.png';
import interview from '~/images/join/interview.png';
import hire from '~/images/join/hire.png';

export type IJobCategory = 'productExpert' | 'operationsExpert' | 'design' | 'developer' | 'testDeveloper';

export interface IJob {
  name: string;
  code: string;
  teamDesc?: string;
  responsibilities: React.ReactNode[];
  requirements: string[];
  prioritize?: string[];
}

export type IJobs = {
  [jobCategory in IJobCategory]: {
    name: string;
    logo: string;
    description: string;
    list: IJob[];
  }
};

export const jobs: IJobs = {
  productExpert: {
    name: '产品',
    logo: 'chanpinzhuanjia',
    description: '',
    list: [
      {
        name: 'PaaS 平台产品',
        code: 'P1',
        responsibilities: [
          '通过市场调研、用户分析、竞品试用以及与一线同事交流进行产品需求调研与分析',
          '结合用户需求和产品技术架构，完成产品的需求文档和原型设计',
          '跟踪产品的上线效果、用户反馈，主动挖掘需求，根据业务需要持续改进产品，提升用户体验',
        ],
        requirements: [
          '3年以上 PaaS 平台产品经理工作经验',
          '具备产品创新意识，学习能力强，有强责任心，愿意接受挑战',
          '具备良好的沟通协调能力，有很强的竞品分析、客户需求调研、逻辑分析场景分析、产品策划运营的能力',
          '具备良好的项目管理能力，能够制定、协调合理的产品开发计划，推动产品持续迭代',
          '了解云计算领域。对容器、运维监控、微服务治理技术有一定基础知识',
        ],

      },
    ],
  },
  design: {
    name: '设计',
    logo: 'sheji',
    description: '',
    list: [],
  },
  developer: {
    name: '开发',
    logo: 'kaifagongchengshi',
    description: '',
    list: [
      {
        name: '前端开发专家',
        code: 'D1',
        teamDesc: 'Erda 前端团队专注于打造国内专业可靠的 PaaS 平台，支持平台功能开发，负责对接多个后端团队的功能，同时开发维护相关的前端技术工具和产品。加入我们，你将能够了解并塑造 PaaS 平台前端的技术架构，建设丰富平台的前端体系，掌握专业的敏捷研发流程，探索 UI 自动化测试、前端微服务等有难度的领域，借助 Erda 开源项目建立个人品牌',
        responsibilities: [
          '负责讨论设计、开发包括 DevOps 平台、微服务平台、快数据平台以及云管平台等多个平台的前端架构和产品实现',
          '负责推动团队的技术栈优化，周边工具生态的建设',
          '带领部分团队人员挑战并解决有难度的问题，优化团队内的知识沉淀分享机制',
          '探索调研业界优秀的竞品，学习并探索我们实现业界领先的路径',
        ],
        requirements: [
          '基础扎实，具备良好的工作及编码习惯，有丰富的前端页面开发经验，熟悉业界的技术发展方向',
          '熟悉 Webpack 打包构建原理，能够进行深度性能分析优化，有大型项目架构经验',
          '熟练掌握 React、Typescript、Node、移动端等主流技术栈，对业界流行技术栈都有比较详细的认识，对后端、容器技术有一定了解',
          '能够深刻理解产品背后的业务逻辑，对产品发展方向有建设性意见',
          '积极乐观，责任心强，工作认真细致，具备良好的服务意识，具有带团队经验',
          '有优秀开源作品或积极参与维护大型开源项目经验者优先',
          '有丰富的前端性能优化、安全管控或 UI 自动化测试经验者优先',
        ],
      },
      {
        name: 'PaaS 平台研发工程师/专家',
        code: 'D2',
        responsibilities: [
          <>从事开源相关工作，参与开源云原生 PaaS 平台 <a href="https://github.com/erda-project/erda" target="_blank" rel="noopener noreferrer">Erda Project</a> 的架构设计、核心代码和框架的开发，打造稳定、高效的平台服务</>,
          '参与基于开源 PaaS 的 Erda Cloud 开发者平台的核心功能开发',
          '负责 Erda DevOps 平台的研发，提供 DevOps 落地方案 (可选)',
          '负责 Erda 微服务治理平台的研发，提供高可用的微服务引擎托管方案 (可选)',
          '负责 Erda 多云管理平台的研发，改进和完善混合云管平台的架构和工具链 (可选)',
        ],
        requirements: [
          '操作系统/数据库/网络基础知识扎实',
          '熟练掌握 Go、Java、C、C++ 其中任一语言，熟悉常见数据结构和算法',
          '有良好的编程习惯，对代码质量和性能有一定的自我要求',
          '熟悉云原生 DevOps、可观测性、容器服务、Service Mesh 等任一方向的开源项目',
        ],
        prioritize: [
          '熟悉容器技术，如 Docker、Kubernetes、Mesos 等，深入源码者优先',
          '有基于 Istio 做微服务治理的项目经验 （微服务架构方向）',
          '熟悉 Prometheus、InfluxData、SkyWalking 等开源监控系统（监控方向）',
          '熟悉 Linux 内核、网络、分布式存储、中间件（其中一项）',
          '在开源社群活跃并有积极贡献者优先',
        ],
      },
      {
        name: '监控平台开发专家',
        code: 'D3',
        teamDesc: 'Erda 监控团队专注建设稳定的监控和日志基础设施，为 SaaS 化可观测性 APM，日志服务，服务治理，数据治理和 IT 运维等领域提供智能化驱动和管理加入该团队，你将参与大规模数据挑战下的云原生监控和日志系统的落地实践，从 0-1 构建企业级场景下的智能运维和大规模弹性 PaaS 平台',
        responsibilities: [
          '负责 SaaS 化监控和日志平台的基础设施设计和核心代码实现',
          '负责时序存储的核心代码实现 (可选)',
          '负责流分析平台的核心代码实现 (可选)',
          '负责 MPP 查询引擎的核心代码实现 (可选)',
        ],
        requirements: [
          '熟练掌握 Go、Java、C、C++ 其中任一语言，熟悉常见数据结构和算法',
          '熟悉操作系统、网络、存储和分布式系统的基础理论',
          '了解 Prometheus、InfluxData 等开源监控系统，并了解其 TSDB 的实现',
          '了解 ElasticSearch、Cassandra、Clickhouse、Presto 等数据中间件的使用、架构实现和调优',
        ],
        prioritize: [
          '负责过具有一定规模的存储、查询引擎实现',
          '熟悉开源，为任一开源时序数据库、查询引擎项目贡献过代码',
        ],
      },
      {
        name: '流式计算开发工程师/专家',
        code: 'D4',
        responsibilities: [
          '负责数据基础设施的搭建，为快数据平台、监控和日志平台提供计算能力支撑',
          '负责搭建流数据计算平台，设计并开发监控和日志类数据的实时聚合引擎',
          '负责设计 Flink、Sprak 等数据框架在 Kubernetes 环境的自动化部署和运维工具',
        ],
        requirements: [
          '熟练掌握 Java 或 Golang 开发语言，熟悉数据结构和算法',
          '熟练掌握 Spark/Flink 等主流的流式处理引擎的工作原理并有实际使用经验',
          '了解 Kafka、ElasticSearch、Cassandra、Presto 等数据中间件的使用和架构实现',
        ],
        prioritize: [
          '有流处理计算引擎实现的经历',
          '熟悉开源，为开源流处理项目贡献过代码',
          '熟悉或了解 AIOps 平台的架构设计和落地实现(日志聚类、根因分析等)',
        ],
      },
      {
        name: '云原生中间件平台工程师/专家',
        code: 'D5',
        responsibilities: [
          '开发基于 Kubernetes 的中间件自动化部署和运维平台',
          '负责中间件（包括但不限于 Redis、ElasticSearch、Cassandra、Kafka）的日常运维、故障分析和稳定性优化',
        ],
        requirements: [
          '熟练掌握 Java 或 Golang 开发语言，熟悉数据结构和算法',
          '熟悉 Docker、Kubernetes 相关的技术，有相关的使用、运维经验',
          '熟悉分布式系统的设计和建设，熟悉分布式缓存（Memcached，Redis 等）、存储（Minio、Glusterfs、Cassandra、ElasticSearch 等）、消息（RocketMQ、Kafka 等）等主流中间件其中至少 2 个',
        ],
        prioritize: [
          '熟悉容器技术，如 Docker、Kubernetes、Mesos 等，深入了解源码',
          '熟悉 Linux 内核、网络、分布式存储、中间件（其中一项），做过相关开发',
          '了解任一主流中间件背后的原理，能对分布式常用技术进行合理应用，解决线上问题，提升服务平台稳定性，有源码 Debug 能力',
          '有自动化运维平台开发经验',
        ],
      },
      {
        name: 'SRE 工程师/专家',
        code: 'D6',
        responsibilities: [
          '负责容器云/大数据平台基础设施的稳定性，可靠性',
          '负责优化运维体系，提升团队的自动化运维水平和问题处理效率',
          '负责优化平台技术架构，从运维角度改进架构体系，提高平台稳定性',
          '负责相关中间件疑难问题排查，深入源代码、操作系统及硬件特性，对问题根因进行定位分析',
          '提供相关产品的最佳实践，帮助企业客户提高业务架构的高效与稳定性',
        ],
        requirements: [
          '本科以上学历，计算机相关专业，有 3 年及以上工作经验',
          '熟悉 C/C++/Go/Java/Python 一种或者多种语言，熟悉常见数据结构和算法',
          '丰富的 Linux 系统运维、优化经验，对常见问题故障有处理经验，并能系统性总结',
          '熟悉 Docker、Kubernetes 相关的技术，有相关的使用、运维经验',
          '熟悉分布式系统的设计和建设，熟悉分布式缓存（Memcached，Redis 等）、存储（Minio、Glusterfs、Cassandra、ElasticSearch 等）、消息（RocketMQ、Kafka 等）等主流中间件其中至少 2 个',
          '有 Owner 意识，具备较强的逻辑思考、学习能力，有强烈的责任心，抗压能力强',
        ],
        prioritize: [
          '熟悉容器技术，如 Docker、Kubernetes、Mesos 等，深入了解源码',
          '熟悉 Linux 内核、网络、分布式存储、中间件（其中一项），做过相关开发',
          '了解任一主流中间件背后的原理，能对分布式常用技术进行合理应用，解决线上问题，提升服务平台稳定性，有源码 Debug 能力',
          '有自动化运维平台开发经验',
        ],
      },
      {
        name: 'Java 开发工程师（SaaS 方向）',
        code: 'D7',
        responsibilities: [
          '负责 Cloud 平台运营功能的设计与开发实现',
          '负责进行相关产品需求分析、详细设计以及开发实现',
          '负责相关产品的服务接口开发和维护',
        ],
        requirements: [
          '本科及以上学历，2年及以上 Java 相关技术背景',
          '熟练进行 Java 的代码编写，良好的代码编写素养，良好的数据结构算法技能',
          '熟悉 SpringBoot、Mybatis、Dubbo、MQ、Redis 等，熟悉前后端分离开发流程',
          '有相关平台开发经验优先，包括但不限于计费系统、审计系统、用户组织管理、运营后台等',
        ],
      },
    ],
  },
  testDeveloper: {
    name: '测试',
    logo: 'ceshikaifagongchengshi',
    description: '',
    list: [
      {
        name: '测试开发工程师',
        code: 'T1',
        responsibilities: [
          '参与 PaaS 平台的需求分析，制定测试计划和测试方案',
          '独立设计和执行设计用例，进行缺陷跟踪，根据测试结果完成测试报告',
          '对测试过程中发现的软件质量问题进行分析和定位、与开发人员、需求人员积极有效沟通，推动问题解决',
          '参与平台相关自动化测试、性能、稳定性测试',
          '把控测试进度、识别并预防测试风险、建立并优化测试过程,提升测试效率和产品质量',
        ],
        requirements: [
          '本科或以上学历，计算机相关专业优先，两年以上软件开发或测试相关工作经验',
          '熟悉软件测试方法和流程，能独立编写测试方案、测试计划、测试用例，能迅速定位 bug，缺陷跟踪并编写测试报告',
          '熟悉 Java/Python/Go 其中至少一种语言，熟悉 MySQL，SQL Server，Oracle 其中至少一种数据库，能够熟练编写 SQL',
        ],
      },
    ],
  },
  operationsExpert: {
    name: '运营',
    logo: 'yunyingzhuanjia',
    description: '',
    list: [],
  },
};

export const applicationProcess = [
  {
    key: 'delivery',
    img: delivery,
    name: '简历投递',
  },
  {
    key: 'filter',
    img: filter,
    name: '简历筛选',
  },
  {
    key: 'interview',
    img: interview,
    name: '面试(含笔试)',
  },
  {
    key: 'hire',
    img: hire,
    name: '录用',
  },
];

export const vitaeEmail = 'qinqian@terminus.io';
