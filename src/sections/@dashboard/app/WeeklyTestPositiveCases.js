import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Antigen test and positive cases',
    type: 'column',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      { x: Date.now(), y: Math.floor(Math.random() * 9999) + 9999 },
    ],
  },
  {
    name: 'Positivity Rate',
    type: 'line',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 100),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 100),
      },
      { x: Date.now(), y: Math.floor(Math.random() * 100) },
    ],
  },
  {
    name: 'Total Positive',
    type: 'line',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      { x: Date.now(), y: Math.floor(Math.random() * 9999) + 9999 },
    ],
  },
];

export default function WeeklyTestPositiveCases() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      type: 'bar',
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
      toolbar: {
        show: true,
      },
    },
    colors: ['#0088FE', '#FFBB28', '#FF8042'],
    stroke: { width: [0, 4, 4] },
    plotOptions: {
      bar: {
        columnWidth: '10%',
        borderRadius: 0,
        dataLabels: {
          orientation: 'vertical',
          position: 'top',
          offsetY: -10,
        },
      },
    },
    fill: { type: ['solid', 'solid', 'solid'] },
    xaxis: { type: 'datetime', title: { text: 'Week' } },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}`;
          }
          return y;
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'No of tests and positive cases',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Positivity Rate',
        },
        // min: 0,
        // max: 100
      },
    ],
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 3,
      colors: ['#0088FE', '#FFBB28', '#FF8042'],
      strokeColor: '#fff',
      strokeWidth: 1,
    },
  });

  return (
    <Card>
      <CardHeader title="Weekly Test, Positive Cases and Positivity Rate" subheader="(PCR + Antigen)" />
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
