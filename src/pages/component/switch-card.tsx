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
import ImgLazy from './img-lazy';
import { CopmFadeInUp } from 'pages/component/animate-comp';
import { map } from 'lodash';

interface IProps {
  title: string;
  image: string;
  teamKey: number;
  activeKey: number;
  descriptions: string[];
}

const SwitchCard = ({ title = '', image = '', teamKey, activeKey, descriptions = [] }: IProps) => {
  return (
    <div className={`bg-white w-p866 h-p480 rounded-md flex justify-between p-5  ${teamKey === activeKey ? 'flex' : 'hidden' }`}>
      <div className="px-4 py-3 w-p400">
        <div className="h-1 w-8 bg-gradient-to-br from-newPrimary to-lightPrimary" />
        <div className="text-cyan text-18-28 font-bold mt-3">
          {title}
        </div>
        <div>
          {
              map(descriptions, (desc) => (
                <div className="flex justify-between items-start mt-5">
                  <div className="w-2 h-1.5 bg-newPrimary rounded-full bg-opacity-50 mt-2" />
                  <div className="text-16-28 text-desc ml-2">{desc}</div>
                </div>
              ))
            }
        </div>
      </div>
      <img width={348} height={444} src={image} />
    </div>

  );
};

export default SwitchCard;
