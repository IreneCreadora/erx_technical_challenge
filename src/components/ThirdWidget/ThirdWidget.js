import { useState } from 'react';
import { CountNum } from 'components/CountNum/CountNum';
import { CircleTimer } from 'components/CircleTimer/CircleTimer';
import { Chart } from 'components/Chart/Chart';
import { BloodPressure, dummySignal } from 'lib/data/measurementData';

export const ThirdWidget = () => {
  const [userReady, setUserReady] = useState(false);
  const [diastolic, setDiastolic] = useState(0);
  const [systolic, setSystolic] = useState(0);

  function handleClick() {
    setUserReady(true);
    setDiastolic(BloodPressure.diastolic);
    setSystolic(BloodPressure.systolic);
  }
  return (
    <div className="w-360 h-640 flex-col  justify-center items-center m-1 p-4  border border-solid border-amber-300/75 rounded bg-white">
      <h1 className="text-blue-600 bg-red-200">Code 3</h1>
      <CircleTimer isReady={userReady} />
      <button type="button" onClick={handleClick} className="w-full bg-red-500">
        click
      </button>
      <p className=" text-red-600 bg-yellow-300">
        <CountNum value={diastolic} />
      </p>
      <p className=" text-black bg-pink-300">
        <CountNum value={systolic} />
      </p>
      {userReady === true ? <Chart userData={dummySignal} /> : <></>}
    </div>
  );
};
