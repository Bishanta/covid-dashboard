import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';
// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Female',
    data: [41090, 40591, 24383, 7509, 23353, 23544, 36464],
  },
  {
    name: 'Male',
    data: [24720, 16434, 6579, 789, 5983, 2154, 5983],
  },
];

export default function DeathsBySexProvince() {
  const chartOptions = merge(BaseOptionChart(), {
    colors: ['#4472c4', '#ed7d31'],
    chart: {
      type: 'bar',
      height: 430,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        vertical: true,
        columnWidth: '50%',
        dataLabels: {
          orientation: 'horizontal',
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      offsetY: -15,
      style: {
        fontSize: '9px',
        colors: ['#777'],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff'],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} Deaths`;
          }
          return y;
        },
      },
    },
    xaxis: {
      categories: [
        'Province 1',
        'Madhesh',
        'Bagmati',
        'Gandaki',
        'Lumbini',
        'Karnali',
        'Sudurpashchim',
      ],
    },
  });

  return (
    <Card>
      <CardHeader
        title="COVID-19 Deaths by Sex and Provinces"
        subheader="[N=11,938]"
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
