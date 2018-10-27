import React, { Fragment } from 'react';
import './appgit.css'

import FetchApproach from './FetchApproach';
import AxiosApproach from './AxiosApproach';
import AsyncAwaitApproach from './AsyncAwaitApproach';
import HigherOrderComponentApproach from './HigherOrderComponentApproach';
import RenderPropApproach from './RenderPropApproach';

const Appgit = () =>
<div className="top">
<Fragment>
<RenderPropApproach />
</Fragment>
</div>
 
  // <FetchApproach />
  // <AxiosApproach />
  // <AsyncAwaitApproach />
  // <HigherOrderComponentApproach />
  // <RenderPropComponentApproach />

export default Appgit;
