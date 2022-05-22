import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

import { StyledPieChart } from './styles/PieChart.styles'
import { siteTypes } from '../constants'

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

function updatePieData(cityCulSites) {
  let counter = 0
  const aimData = []
  const aimColor = []
  const aimLabel = []

  cityCulSites.forEach((item) => {
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

  aimData.push(cityCulSites.length - counter)
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

const PieChart = ({ cityCulSites }) => {
  const data = updatePieData(cityCulSites)

  return (
    <StyledPieChart>
      <Pie options={options} data={data} />
    </StyledPieChart>
  )
}

export default PieChart
