import { useState } from 'react';

import { CircleTimer } from 'components/CircleTimer/CircleTimer';

export const SecondWidget = () => {
  const [userReady, setUserReady] = useState(false);

  function handleClick() {
    setUserReady(true);
  }
  return (
    <div className="w-360 h-640 flex justify-center items-center m-1 p-4  border border-solid border-indigo-500/75 rounded bg-accentBg">
      <h1>Code 2</h1>
      <CircleTimer isReady={userReady} />
      <button type="button" onClick={handleClick} className="w-full bg-red-500">
        click
      </button>
    </div>
  );
};
