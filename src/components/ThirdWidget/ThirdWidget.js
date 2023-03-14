import { useState } from 'react';
import { BiLogOut, BiBookHeart } from 'react-icons/bi';
import { CountNum } from 'components/CountNum/CountNum';
import { CircleTimer } from 'components/CircleTimer/CircleTimer';
import { ChartLine } from 'components/Chart/ChartLine';
import {
  BloodPressure,
  dummySignal,
  dummyHeartRate,
  rhythmTitle,
} from 'lib/data/measurementData';

export const ThirdWidget = () => {
  const [userReady, setUserReady] = useState(false);
  const [diastolic, setDiastolic] = useState(0);
  const [systolic, setSystolic] = useState(0);
  const [bpm, setBpm] = useState(0);
  const [rhythm, setRhythm] = useState('');
  const [showTopMenu, setShowTopMenu] = useState(true);

  function handleClick() {
    setUserReady(true);
    setShowTopMenu(false);
    setTimeout(() => {
      setBpm(dummyHeartRate.result);
      setDiastolic(BloodPressure.diastolic);
      setSystolic(BloodPressure.systolic);
      getRhythmTitle();
      setShowTopMenu(true);
    }, 10500);
  }

  function getRhythmTitle() {
    setTimeout(() => {
      setRhythm(rhythmTitle(dummyHeartRate.result));
    }, 5000);
  }

  return (
    <div className="w-360 h-640 grid place-items-center m-1 p-4  border border-solid border-amber-300/75 rounded bg-white">
      {showTopMenu && (
        <div className="w-full flex justify-between pb-2 border-b-2">
          <BiLogOut size="30px" color="#5b21b6" />
          <BiBookHeart size="30px" color="#5b21b6" />
        </div>
      )}
      <div className="w-52 h-52 flex justify-center items-center mx-auto border rounded-full text-3xl text-indigo-900 bg-violet-300">
        {rhythm.length > 1 ? <></> : <CircleTimer isReady={userReady} />}
        {rhythm.length > 1 && (
          <div className="grid place-items-center text-2xl">
            <p>Your result is:</p>
            <b>{rhythm}</b>
          </div>
        )}
      </div>
      {userReady === true ? (
        <></>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className="w-36 h-12 my-12  bg-teal-400 text-indigo-900 text-lg border rounded-full"
        >
          click for start
        </button>
      )}
      {bpm > 1 ? (
        <></>
      ) : (
        <p className=" text-center text-lg text-gray-700">
          after the click on start button, please wait the indicated time to get
          your result
        </p>
      )}
      {userReady === true ? <ChartLine userData={dummySignal} /> : <></>}
      {bpm > 1 ? (
        <div className="flex w-full ">
          <div className="w-1/3 grid place-items-center  text-pink-800 bg-cyan-300 m-1 border rounded">
            <p className="text-3xl font-bold">
              <CountNum value={bpm} time={8} />
            </p>
            <h2>BPM</h2>
          </div>
          <div className="w-1/3 grid place-items-center text-green-900 bg-yellow-300 m-1 border rounded">
            <p className="text-3xl font-bold">
              <CountNum value={diastolic} time={8} />
            </p>
            <h2>diastolic</h2>
          </div>
          <div className="w-1/3 grid place-items-center   text-sky-900 bg-rose-300 m-1 border rounded">
            <p className=" text-3xl font-bold">
              <CountNum value={systolic} time={8} />
            </p>
            <p>sysnolic</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
