import React from 'react';
import PageContent from '~/components/common/page-content';
import ImgLazy from 'pages/component/img-lazy';
import Accordion from 'pages/home/accordion';

const config = [{
  icon: 'icon1',
  title: '精细化权限管理',
  key: 'refinedAuthority',
  description: '根据项目、应用的用户角色、分支等不同纬度，细分了代码分支的访问和编辑的权限',
},{
  icon: 'icon21',
  title: '分支规则管理',
  key: 'branchRule',
  description: '遵循 GitFlow 规范，平台沉淀分支和环境的约定关系同时， 支持用户自定义的分支规则配置',
},{
  icon: 'icon31',
  title: '代码扫描和单元测试',
  key: 'codeScanning and unitTesting',
  description: '能够及时发现您的代码缺陷、安全漏洞、代码不规范等问题助力您提升代码质量，降低风险',
},{
  icon: 'icon41',
  title: '外置代码仓库的托管',
  key: 'externalRepository',
  description: '支持业界主流代码仓库的无缝对接',
}]

const CodeHosting  = () => {
  return (
    <div className="erda-home-code-host">
      <PageContent className="flex-box v-align-start two-column">
        <div className="flex-1 pr28 text-column">
          <div className="card-title">全方位的企业级<span className="card-title-height-light">代码托管</span></div>
          <div className="card-desc">
            基于 Git，为您提供全方位的企业级代码管理服务，让团队代码协作能够安全、高效进行的同时，遵循 GitFlow 规范的代码托管机制，助力应用的迭代快速开发和持续交付。
          </div>
          <Accordion defaultActiveKey="refinedAuthority" list={config} className="mt24"/>
        </div>
        <div className="images-column">
          <ImgLazy className="code-branch" src="/images/home/Pic3.png"/>
        </div>
      </PageContent>
    </div>
  )
}

export default CodeHosting
