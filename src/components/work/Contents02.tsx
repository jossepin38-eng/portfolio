import React from 'react';
import { Konai, Konai1, Konai3 } from '../../imports/Contents02-121-176';
import Konai03 from './parts/Konai03';

export default function Contents02() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="contents02">
      <Konai />
      <Konai1 />
      <Konai03 />
      <Konai3 />
    </div>
  );
}
