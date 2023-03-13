// import { useState } from 'react';
import { Chart } from 'components/Chart/Chart';
import { dummySignal } from 'lib/data/measurementData';

export const FirstWidget = () => {
  return (
    <div className="w-360 h-640 flex justify-center items-center m-1 p-4  border border-solid border-red-500/75 rounded bg-amber-100">
      <h1>Code</h1>
      <div className="w-full">
        <Chart userData={dummySignal} />
      </div>
    </div>
  );
};
