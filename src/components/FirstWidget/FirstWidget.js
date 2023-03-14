import { useState } from 'react';
import { FiArrowLeftCircle, FiMessageCircle } from 'react-icons/fi';
import { HiddenChart } from 'components/Chart/HiddenChart';
import { CountNum } from 'components/CountNum/CountNum';
import { CircleTimer } from 'components/CircleTimer/CircleTimer';

import {
  BloodPressure,
  dummySignal,
  dummyHeartRate,
  rhythmTitle,
} from 'lib/data/measurementData';

export const FirstWidget = () => {
  const [userReady, setUserReady] = useState(false);
  const [diastolic, setDiastolic] = useState(0);
  const [systolic, setSystolic] = useState(0);
  const [bpm, setBpm] = useState(0);
  const [rhythm, setRhythm] = useState('');
  const [showTopMenu, setShowTopMenu] = useState(true);
  const [chartReady, setChartReady] = useState(false);

  function handleClick() {
    setUserReady(true);
    setShowTopMenu(false);
    setTimeout(() => {
      setBpm(dummyHeartRate.result);
      setDiastolic(BloodPressure.diastolic);
      setSystolic(BloodPressure.systolic);
      setRhythm(rhythmTitle(dummyHeartRate.result));
      setShowTopMenu(true);
    }, 15000);
  }

  function showChart() {
    setChartReady(true);
  }
  return (
    <div className="w-360 h-640 grid place-items-center m-1 p-4  border border-solid border-lime-500/75 rounded bg-accentBg">
      {showTopMenu && (
        <div className="w-full flex justify-between pb-2 border-b border-orange-600">
          <FiArrowLeftCircle size="30px" color="#fde68a" />
          <FiMessageCircle size="30px" color="#fde68a" />
        </div>
      )}

      {userReady === true ? (
        <></>
      ) : (
        <p className="w-3/4 mb-2 text-center text-lg text-amber-100">
          Hello, to start testing, please click on the button
        </p>
      )}
      {bpm > 1 ? (
        <div>
          {!chartReady && (
            <button
              type="button"
              onClick={showChart}
              className="w-44 h-12 my-6  bg-orange-500/30 text-amber-100 text-lg border border-amber-300 rounded-full"
            >
              Show Chart
            </button>
          )}
          {chartReady && <HiddenChart userData={dummySignal} />}
        </div>
      ) : (
        <></>
      )}

      <div className="w-full h-40 flex justify-center items-center mx-auto text-5xl font-bold text-amber-200">
        {rhythm.length > 1 ? (
          <></>
        ) : (
          <CircleTimer isReady={userReady} circle={220} />
        )}
        {rhythm.length > 1 && (
          <div className="w-52 h-52 p-6 bg-orange-500/30 border-2 border-orange-600 rounded-full flex items-center text-center text-xl font-normal ">
            <p>
              Your result is: <b>{rhythm}</b>
            </p>
          </div>
        )}
      </div>

      {bpm > 1 ? (
        <div className="flex w-full mt-3">
          <div className="w-24 h-24 m-1 py-3 grid place-items-center bg-orange-500/30 text-amber-100 text-sm border-2 border-amber-300 rounded-full">
            <h2>Heart Rate</h2>
            <p className="text-2xl font-bold">
              <CountNum value={bpm} time={5} />
            </p>
            <p>BPM</p>
          </div>
          <div className="w-24 h-24 m-1 py-3  grid place-items-center bg-orange-500/30 text-amber-100 text-sm border-2 border-amber-300 rounded-full">
            <h2>diastolic</h2>
            <p className="text-2xl font-bold">
              <CountNum value={diastolic} time={5} />
            </p>
            <h2>mm Hg</h2>
          </div>
          <div className="w-24 h-24 m-1 py-3   grid place-items-center bg-orange-500/30 text-amber-100 text-sm border-2 border-amber-300 rounded-full">
            <h2>systolic</h2>
            <p className=" text-2xl font-bold">
              <CountNum value={systolic} time={5} />
            </p>
            <p>mm Hg</p>
          </div>
        </div>
      ) : (
        <></>
      )}

      {userReady === true ? (
        <></>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className="w-32 h-32 mt-12 mb-4 bg-orange-500/30 text-amber-100 text-xl border-2 border-orange-600 rounded-full"
        >
          START
        </button>
      )}
    </div>
  );
};
