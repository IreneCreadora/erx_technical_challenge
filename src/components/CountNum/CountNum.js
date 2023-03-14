import CountUp from 'react-countup';

export const CountNum = ({ value, time }) => {
  return <CountUp end={value} start={0} duration={time} />;
};
