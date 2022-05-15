import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieContainer } from './styles/Pie.styles'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  plugins: {
    labels: [{
      render: 'label',
      overlap: false,
      fontSize: 16,
      fontColor: '#474747',
    }],
  },
}

const siteTypes = [
  { type: '宅第', num: 0, color: '#F2A074' },
  { type: '關塞', num: 0, color: '#EAA568' },
  { type: '寺廟', num: 0, color: '#DFAA5F' },
  { type: '城郭', num: 0, color: '#D0B05A' },
  { type: '祠堂', num: 0, color: '#C0B659' },
  { type: '衙署', num: 0, color: '#ADBB5E' },
  { type: '車站', num: 0, color: '#98C068' },
  { type: '書院', num: 0, color: '#82C376' },
  { type: '碑碣', num: 0, color: '#6BC687' },
  { type: '教堂', num: 0, color: '#52C89A' },
  { type: '牌坊', num: 0, color: '#39C8AF' },
  { type: '墓葬', num: 0, color: '#26C7C2' },
  { type: '堤閘', num: 0, color: '#2CC5D5' },
  { type: '產業', num: 0, color: '#49C1E3' },
  { type: '燈塔', num: 0, color: '#6CBCEE' },
  { type: '橋梁', num: 0, color: '#8FB5F3' },
  { type: '學校', num: 0, color: '#B2ACF2' },
  { type: '銀行', num: 0, color: '#D2A1EA' },
  { type: '其他設施', num: 0, color: '#EE96DD' },
]

function updatePieData(cityCulSite) {
  let counter = 0
  const aimData = []
  const aimColor = []
  const aimLabel = []

  cityCulSite.forEach((item) => {
    siteTypes.forEach((siteType) => {
      if (item.assetsTypes[0].name === siteType.type) {
        siteType.num += 1;
      }
    })
  })

  siteTypes.filter((item) => item.num > 1).forEach((aim) => {
    counter += aim.num
    aimData.push(aim.num)
    aimColor.push(aim.color)
    aimLabel.push(aim.type)
  })

  aimData.push(cityCulSite.length - counter)
  aimColor.push('#D3D3D3')
  aimLabel.push('其他')
  const data = {
    datasets: [
      {
        data: aimData,
        backgroundColor: aimColor,
      },
    ],
    labels: aimLabel,
  }

  siteTypes.forEach((item) => item.num = 0)

  return data
}

const PieChart = ({ cityCulSite }) => {
  const data = updatePieData(cityCulSite)

  return (
    <PieContainer>
      <Pie options={options} data={data} />
    </PieContainer>
  )
}

export default PieChart
