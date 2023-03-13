import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export const CircleTimer = ({ isReady }) => {
  return (
    <CountdownCircleTimer
      isPlaying={isReady}
      duration={30}
      size={180}
      colors={['#6b21a8', '#004777', '#F7B801', '#ea580c', '#b91c1c']}
      colorsTime={[30, 18, 10, 2, 0]}
      onComplete={() => {
        // showResalt();
        console.log('timer stop');
      }}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};
