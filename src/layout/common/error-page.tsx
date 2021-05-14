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

import * as React from 'react';
import { Link } from 'react-router-dom';
import i18n from '~/i18n';
import notFound from '~/images/common/404.png';
import envStore from '~/models/env';
import './error-page.scss';
import { useMobile } from 'common/utils';


const NotFound = () => {
  const isMobile = useMobile();
  React.useEffect(() => {
    envStore.reducers.setHeaderInfo({
      whiteHeader: true,
    });
    return () => {
      envStore.reducers.resetHeaderInfo();
    };
  }, []);
  return (
    <div className="not-found-page basic-error-page">
      <div className="info gray-bg no-banner-body">
        <img className={isMobile ? '' : 'mr40'} width={220} src={notFound} alt="" />
        <div className="desc">
          <span>{i18n.t('page not found')}</span>
          <Link aria-label="go back to home page" to="/"> {i18n.t('back to homepage')} </Link>
        </div>
      </div>
    </div>
  );
};


export {
  NotFound,
};
