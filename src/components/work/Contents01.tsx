import React from 'react';
import { Mpop, Mpop2 } from '../../imports/Work02-120-313';
import Mpop02 from './parts/Mpop02';

export default function Contents01() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="contents01">
      <Mpop />
      <Mpop02 />
      <Mpop2 />
    </div>
  );
}
