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
import { map } from 'lodash';
import { Icon as CustomIcon } from 'common';
import { jobs, applicationProcess } from 'pages/join/config';
import './index.scss';
import { useMobile, goTo } from 'common/utils';


const JoinUs = () => {
  const isMobile = useMobile();

  return (
    <div className="join-erda gray-bg pt0">
      <div className="full-width-header v-flex-box">
        <div className="title">加入我们</div>
      </div>
      <PageContent className="py-10 body md:py-4">
        <div className="text-center mb-8">
          <span className="text-32-44 relative sub-title px-9">开放职位</span>
        </div>
        <div className="flex w-3/4 mx-auto flex-wrap md:w-full">
          {
            map(jobs, (item, key) => {
              const { list, name, logo } = item;
              if (list.length) {
                return (
                  <div key={key} className="mb-5 mx-2.5 w-p430 h-40 shadow-card08 p-10 relative overflow-hidden cursor-pointer rounded md:mx-0 hover:shadow-card2" onClick={() => { goTo(`/join/${key}`); }}>
                    <p className="text-28-36 mb-4 text-0D0C22">{name}</p>
                    <p className="text-20-28 text-0D0C22 text-opacity-60">查看岗位详情</p>
                    <div className="absolute -bottom-4 right-0">
                      <CustomIcon className="text-E1DEFB text-100" type={logo} />
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })
          }
        </div>
        <div className="text-center mb-8 mt-14">
          <span className="text-32-44 relative sub-title px-9">应聘流程</span>
        </div>
        <div className="flex w-3/4 mx-auto flex-wrap justify-between items-center md:w-full md:flex-col">
          {
            applicationProcess.map(((item, index) => {
              return (
                <>
                  <div className="flex flex-col items-center">
                    <img width={98} height={98} src={item.img} alt="" />
                    <p className="text-20-28 text-0D0C22 text-center mt-3 md:mb-10">{item.name}</p>
                  </div>
                  {
                    isMobile || index === applicationProcess.length - 1 ? null : <div className="arrows -mt-6" />
                  }
                </>
              );
            }))
          }
        </div>
      </PageContent>
    </div>
  );
};

export default JoinUs;
