/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-05-31 23:35:57
 * @version $Id$
 */

import React from 'react';
import { render } from 'react-dom';
import Slider from './components/Slider';

const image_data = [
  {
    src:require('../img/d1.jpg'),
    alt:'images-1'
  },
  {
    src:require('../img/d2.jpg'),
    alt:'images-2'
  },
  {
    src:require('../img/d3.jpg'),
    alt:'images-3'
  }
];

render(
  <Slider effect="left" items={image_data} speed={0.8} delay={1.2} pause={true} autoplay={true} dots={true} arrows={true} />,
  document.querySelector('.container')
  )























