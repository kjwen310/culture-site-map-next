import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { StyledBarChart } from './styles/BarChart.styles'
import { BarChartProps, Cities } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y' as const,
  scales: {
    x: {
      stacked: true,
      gridlines: {
        display: false,
      },
    },
    y: {
      stacked: true,
      gridLines: {
        display: false,
      },
    },
  },
}

function updateBarChart(cities: Cities) {
  const aimData1 = []
  const aimData2 = []
  const aimLabel = []

  for (const city in cities) {
    aimData1.push(cities[city].nationalNum)
    aimData2.push(cities[city].items?.length - cities[city].nationalNum)
    aimLabel.push(city)
  }

  const data = {
    datasets: [
      {
        data: aimData1,
        label: '國定古蹟',
        backgroundColor: '#D6E9C6',
        barPercentage: 0.3,
        barThickness: 12,
      },
      {
        data: aimData2,
        label: '直轄市/縣市定古蹟',
        backgroundColor: '#FAEBCC',
        barPercentage: 0.3,
        barThickness: 12,
      },
    ],
    labels: aimLabel,
  };
  return data
}

const BarChart: React.FC<BarChartProps> = ({ cities }) => {
  const data = updateBarChart(cities)

  return (
    <StyledBarChart>
      <Bar options={options} data={data} />
    </StyledBarChart>
  )
}

export default BarChart
