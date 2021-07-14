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

interface IProps {
  imgSrc: string;
  activeImgSrc?: string;
  width: number;
  height: number;
}

const HoverImg = ({ imgSrc = '', activeImgSrc = '', width, height }: IProps) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <ImgLazy
      width={width}
      height={height}
      src={isHover ? activeImgSrc : imgSrc}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    />
  );
};

export default HoverImg;
