import { useState } from 'react';
import { Chart } from 'components/Chart/Chart';
import { dummySignal } from 'lib/data/measurementData';

export const FirstWidget = () => {
  const [signalData, setSignalData] = useState(dummySignal);

  function handleClick() {
    setSignalData(dummySignal);
  }
  return (
    <div className="w-360 h-640 flex justify-center items-center m-1 p-4  border border-solid border-red-500/75 rounded bg-amber-100">
      <h1>Code</h1>
      <button type="button" onClick={handleClick} className="w-full bg-red-500">
        click
      </button>
      <div className="w-full">
        <Chart userData={signalData} />
      </div>
    </div>
  );
};
