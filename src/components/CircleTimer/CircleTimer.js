import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export const CircleTimer = ({ isReady }) => {
  return (
    <CountdownCircleTimer
      isPlaying={isReady}
      duration={15}
      size={180}
      colors={[
        '#6b21a8',
        '#004777',
        '#16a34a',
        '#F7B801',
        '#ea580c',
        '#b91c1c',
      ]}
      colorsTime={[15, 12, 9, 5, 3, 0]}
      onComplete={() => {
        // showResalt();
        console.log('timer stop');
        return [false, 1000];
      }}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};
