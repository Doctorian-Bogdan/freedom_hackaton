import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Charts from '../Charts/Charts.jsx';

function Stats() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  return (
    <div className="stats">
      <h1 className="stats__title">
        Статистика
      </h1>
      <Charts
        labels={['d008493', 'd012788', 'd007962', 'd004274', 'd015370']}
        data={[120, 19, 3, 5, 500]}
        backgroundColor="#0b82ae"
        title="Самые популярные устройства"
        caption="Кол-во устройств"
      />
      <Charts
        labels={['d008493', 'd012788', 'd007962', 'd004274', 'd015370']}
        data={[120, 19, 3, 5, 500]}
        backgroundColor="#0b82ae"
        title="Самые популярные устройства"
        caption="Кол-во устройств"
      />
    </div>
  );
}

export default Stats;
