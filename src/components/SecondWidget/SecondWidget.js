import { useState } from 'react';
import { FiCornerUpLeft, FiActivity } from 'react-icons/fi';
import { CountNum } from 'components/CountNum/CountNum';
import { CircleTimer } from 'components/CircleTimer/CircleTimer';
import { Chart } from 'components/Chart/Chart';
import {
  BloodPressure,
  dummySignal,
  dummyHeartRate,
  rhythmTitle,
} from 'lib/data/measurementData';

export const SecondWidget = () => {
  const [userReady, setUserReady] = useState(false);
  const [diastolic, setDiastolic] = useState(0);
  const [systolic, setSystolic] = useState(0);
  const [bpm, setBpm] = useState(0);
  const [rhythm, setRhythm] = useState('');
  const [showTopMenu, setShowTopMenu] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  function handleClick() {
    setUserReady(true);
    setShowTopMenu(false);
    setShowMessage(true);
    setTimeout(() => {
      setBpm(dummyHeartRate.result);
      setDiastolic(BloodPressure.diastolic);
      setSystolic(BloodPressure.systolic);
      setRhythm(rhythmTitle(dummyHeartRate.result));
      setShowTopMenu(true);
      setShowMessage(false);
    }, 15000);
  }

  return (
    <div className="w-360 h-640 grid place-items-center m-1 p-4  border border-solid border-indigo-500/75 rounded  bg-amber-100">
      {showTopMenu && (
        <div className="w-full flex justify-between pb-2 border-b border-indigo-900">
          <FiCornerUpLeft size="30px" color="#312e81" />
          <FiActivity size="30px" color="#312e81" />
        </div>
      )}

      {userReady === true ? (
        <></>
      ) : (
        <p className="w-3/4 my-6 text-center text-lg text-gray-700">
          Welcome, to start testing, please click on the button below
        </p>
      )}
      {bpm > 1 ? (
        <div className="flex-wrap w-full">
          <div className="w-1/2 mx-auto grid place-items-center  text-cyan-900  m-1 border-2 border-cyan-500 rounded">
            <h2>Your Heart Rate</h2>
            <p className="text-4xl font-bold">
              <CountNum value={bpm} time={5} />
            </p>
            <p>BPM</p>
          </div>
          <div className="flex w-full">
            <div className="w-full grid place-items-center text-sky-900  m-1 border-2 border-sky-600 rounded">
              <h2>diastolic</h2>
              <p className="text-3xl font-bold">
                <CountNum value={diastolic} time={5} />
              </p>
              <h2>mm Hg</h2>
            </div>
            <div className="w-full grid place-items-center   text-indigo-900  m-1 border-2 border-indigo-400 rounded">
              <h2>systolic</h2>
              <p className=" text-3xl font-bold">
                <CountNum value={systolic} time={5} />
              </p>
              <p>mm Hg</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="w-full h-40 flex justify-center items-center mx-auto text-3xl text-indigo-900">
        {rhythm.length > 1 ? <></> : <CircleTimer isReady={userReady} />}
        {rhythm.length > 1 && (
          <div className=" p-6  bg-cyan-500/20 border-2  border-cyan-300 rounded-md grid place-items-center text-xl">
            <p>
              Your result is: <b>{rhythm}</b>
            </p>
          </div>
        )}
      </div>

      {userReady === true ? (
        <></>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className="w-60 h-20 my-12  bg-cyan-500/30 text-indigo-900 text-xl border-2 border-cyan-300 rounded-md"
        >
          Track your Heart Rate
        </button>
      )}
      {showMessage && (
        <p className=" text-center text-lg text-gray-700">please wait</p>
      )}
      {userReady === true ? <Chart userData={dummySignal} /> : <></>}
    </div>
  );
};
