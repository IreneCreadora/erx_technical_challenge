import { useState } from 'react';
import { Chart } from 'components/Chart/Chart';
import { dummySignal } from 'lib/data/measurementData';

// FiArrowLeftCircle
// FiMessageCircle
// import { IconName } from "react-icons/fi";
export const FirstWidget = () => {
  const [userReady, setUserReady] = useState(false);

  function handleClick() {
    setUserReady(true);
  }
  return (
    <div className="w-360 h-640 flex justify-center items-center m-1 p-4  border border-solid border-red-500/75 rounded bg-accentBg">
      <h1>Code</h1>
      {userReady === true ? (
        <div className="w-full">
          <Chart userData={dummySignal} />
        </div>
      ) : (
        <></>
      )}
      <button type="button" onClick={handleClick} className="w-full bg-red-500">
        click
      </button>
    </div>
  );
};
