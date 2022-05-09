import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Recovered',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 55, 66, 77, 88]
  },
  {
    name: 'Positive',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 55, 66, 77, 88]
  },
  {
    name: 'Death',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 55, 66, 77, 88]
  }
];

export default function TotalDataChart() { 
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 4, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      '01/01/2020',
      '02/01/2020',
      '03/01/2020',
      '04/01/2020',
      '05/01/2020',
      '06/01/2020',
      '07/01/2020',
      '08/01/2020',
      '09/01/2020',
      '10/01/2020',
      '11/01/2020',
      '12/01/2020',
      '01/01/2021',
      '02/01/2021',
      '03/01/2021',
    ],
    xaxis: { type: 'category', labels: { rotate: -90} },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} Patients`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title="Total Data Chart" subheader="(+43%) than last year" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
