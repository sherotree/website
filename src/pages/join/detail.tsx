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

import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import PageContent from 'layout/common/page-content';
import { RouteComponentProps } from 'react-router';
import envStore from '~/models/env';
import { jobs, vitaeEmail, IJobCategory } from 'pages/join/config';
import { IF } from 'common';
import { Button } from 'antd';
import addEventListener, { IReturn } from 'rc-util/lib/Dom/addEventListener';
import { getScrollTop, useMobile } from 'common/utils';
import { useUpdate } from 'common/utils/hooks';
import classNames from 'classnames';

const Item = ({ title, list }: {title: string; list: React.ReactNode[]}) => {
  if (!list.length) {
    return null;
  }
  return (
    <>
      <p className="text-0D0C22 text-20-28 my-2 font-semibold md:text-16-28">{title}</p>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index} className="text-2F3C5F text-16-28 md:text-14-28">{index + 1}、{item}</li>;
          })
        }
      </ul>
    </>
  );
};

const JobDetail = (props: RouteComponentProps<{categoryId: IJobCategory}>) => {
  const { categoryId } = props.match.params;
  const currentCategory = jobs[categoryId];
  const [{ jobIndex, isFixed, showMore, showMoreBtn }, updater, update] = useUpdate({
    jobIndex: currentCategory.list[0]?.code,
    isFixed: false,
    showMore: false,
    showMoreBtn: true,
  });
  const eventRef = useRef<IReturn>();
  const isMobile = useMobile();
  const wrapRef = useRef<HTMLDivElement>();
  React.useEffect(() => {
    eventRef.current = addEventListener(window, 'scroll', () => {
      updater.isFixed(getScrollTop() > 20);
    });
    envStore.reducers.setHeaderInfo({
      whiteHeader: true,
    });
    return () => {
      eventRef.current?.remove();
      envStore.reducers.resetHeaderInfo();
    };
  }, []);

  React.useLayoutEffect(() => {
    // 移动端职位描述卡片高度大于580时，显示"显示更多"按钮
    const isOverHeight = (wrapRef.current?.offsetHeight || 0) > 580;
    updater.showMore(isOverHeight && showMoreBtn);
  }, [jobIndex, showMoreBtn]);

  const [currentJob, otherPositionList] = React.useMemo(() => {
    const current = currentCategory.list.find((item) => item.code === jobIndex);
    const otherPositions = currentCategory.list.filter((item) => item.code !== jobIndex);
    return [current, otherPositions];
  }, [jobIndex]);

  const jobListCls = React.useMemo(() => {
    const fixed = isFixed && !isMobile;
    return classNames('bg-white shadow-card08 px-5 py-4 -mt-18 w-p260 md:w-full', {
      fixed,
      'top-18': fixed,
    });
  }, [isFixed, isMobile]);

  if (!currentJob) {
    return <div className="gray-bg"><div className="no-banner-body" /></div>;
  }

  const handleShowMore = () => {
    updater.showMoreBtn(false);
  };

  const handleChangeJob = (code: string) => {
    if (code === jobIndex) {
      return;
    }
    update({
      jobIndex: code,
      showMoreBtn: true,
    });
  };

  const handleApplyPosition = () => {
    location.href = `mailto:${vitaeEmail}?subject=应聘${currentJob.name}&body=你好，我从贵公司官网看到此招聘职位。附上我的简历，请查收。`;
  };

  return (
    <div className="bg-F5F7FE">
      <PageContent className="no-banner-body">
        <div className={`w-5/6 mx-auto pt-6 flex mb-5 md:w-full md:flex-col ${otherPositionList.length ? 'justify-between' : 'justify-center'}`}>
          <div
            className={`w-p720 relative bg-white shadow-card08 p-10 md:w-full md:mb-5 md:p-5 ${showMore && isMobile ? 'h-p580 overflow-hidden' : ''}`}
            ref={wrapRef as unknown as React.RefObject<HTMLDivElement>}
          >
            <div className="flex justify-between items-center pb-8 mb-8 border-b border-solid border-gray-200 md:pb-4 md:mb-4">
              <div>
                <div className="text-0D0C22 text-30-38 font-semibold">{currentJob.name}</div>
              </div>
              {
                isMobile ? null : <Button type="primary" onClick={handleApplyPosition}>申请职位</Button>
              }
            </div>
            <div>
              <IF check={currentJob.teamDesc}>
                <p className="text-0D0C22 text-20-28 my-2 font-semibold">团队介绍</p>
                <p className="text-2F3C5F text-16-28">{currentJob.teamDesc}</p>
              </IF>
              <Item list={currentJob.responsibilities} title="岗位职责" />
              <Item list={currentJob.requirements} title="岗位要求" />
              <Item list={currentJob.prioritize || []} title="优先考虑" />
            </div>
            {
              showMore && showMoreBtn && isMobile ? (
                <div onClick={handleShowMore} className="absolute w-full bottom-0 left-0 right-0 h-16 bg-gradient-more text-primary flex justify-center items-center">
                  查看更多
                </div>
              ) : null
            }
          </div>
          {
            otherPositionList.length ? (
              <div className="w-p260 md:w-full">
                <div className={jobListCls}>
                  <p className="text-14-28 text-0D0C22 mb-2 font-semibold">其他职位</p>
                  {
                    <ul>
                      {
                          otherPositionList.map((item) => {
                            return (<li className="text-14-28 text-2F3C5F cursor-pointer hover:text-primary" key={item.code} onClick={() => { handleChangeJob(item.code); }}>{item.name}</li>);
                          })
                        }
                    </ul>
                    }
                </div>
              </div>
            ) : null
          }
        </div>
        {
          isMobile ? <Button className="w-full mb-5" type="primary">申请职位</Button> : null
        }
      </PageContent>
    </div>
  );
};

export default withRouter(JobDetail);
