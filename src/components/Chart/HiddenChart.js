import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const HiddenChart = ({ userData }) => {
  const [signal, setSignal] = useState([]);
  const [label, setLabel] = useState([]);

  useEffect(() => {
    function getSignal() {
      const data = userData;
      setSignal(data.map(item => item));
      setLabel(data.map((elem, index) => index));
    }

    getSignal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = {
    labels: label.map(item => item),
    datasets: [
      {
        label: 'Signal',
        data: signal.map(item => item),
        borderColor: '#ea580c',
        pointBorderWidth: 0,
        pointBackgroundColor: 'transparent',
        borderWidth: 0.3,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {},
    gridLines: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>{signal.length > 1 && <Line data={data} options={options}></Line>}</>
  );
};
