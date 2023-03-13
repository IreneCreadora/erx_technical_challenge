import CountUp from 'react-countup';

export const CountNum = ({ value }) => {
  return <CountUp end={value} start={0} duration={50} />;
};
