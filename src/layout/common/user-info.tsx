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
import { Avatar, Popover } from 'antd';
import userStore from '~/models/user';
import { Icon as CustomIcon } from 'common';
import { getParentContainer } from 'common/utils';
import defaultOrgIcon from '~/images/common/default-org-icon.svg';
import i18n from '~/i18n';
import './user-info.scss';

const UserInfo = () => {
  const [visible, setVisible] = React.useState(false);
  const [org, user] = userStore.useStore((s) => [s.orgList, s.user]);


  const logout = () => {
    userStore.effects.logout();
    setVisible(false);
  };

  const goToPlatform = (targetUrl: string) => {
    setVisible(false);
    window.open(targetUrl);
  };

  const content = (
    <div className="py4">
      {
        org.length ? (
          <div className="pb4 org-wrapper">
            <ul className="org-list">
              {
                org.map((item) => {
                  const { domain, displayName, id, logo } = item;
                  // remove name until 4.0
                  // const targetUrl = `//${domain}/${name}`;
                  const targetUrl = `//${domain}`;
                  return (
                    <li key={id} className="org-item flex-box px16 my8" onClick={() => { goToPlatform(targetUrl); }}>
                      <Avatar shape="square" className="mr8" src={logo || defaultOrgIcon}>
                        {displayName.slice(0, 1).toUpperCase()}
                      </Avatar>
                      <span className="flex-1 nowrap">{displayName}</span>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        ) : null
      }
      <div className="erda-user-info-menu-item px16 py4 logout" onClick={logout}>{i18n.t('sign out')}</div>
    </div>
  );
  return (
    <div className="erda-header-user-wrap">
      <Popover
        visible={visible}
        placement="bottomRight"
        className="user-info flex-box"
        trigger="click"
        title={<p className="py4">{user.nick}</p>}
        content={content}
        overlayClassName="action-wrapper"
        onVisibleChange={setVisible}
        getPopupContainer={getParentContainer}
      >
        <Avatar className="mr8" src={user.avatar}>
          {user.nick.slice(0, 1).toUpperCase()}
        </Avatar>
        <CustomIcon className="unfold fz12" type="unfold" />
      </Popover>
    </div>
  );
};

export default UserInfo;
