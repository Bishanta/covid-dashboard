import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'RT-PCR Tests',
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
  {
    name: 'Positivity Rate',
    type: 'column',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 60),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 60),
      },
      { x: Date.now(), y: Math.floor(Math.random() * 60) },
    ],
  },
  {
    name: 'Antigen Tests',
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
  {
    name: 'Total Tests',
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

export default function RollingDaysTotal() {
  const chartOptions = merge(BaseOptionChart(), {
    colors: ['#fc5203', '#ad61c2', '#0362fc', '#0a8028'],
    plotOptions: {
      // Bar
      bar: {
        columnWidth: '50%',
        borderRadius: 2,
        dataLabels: {
          orientation: 'vertical',
          position: 'top',
        },
      },
    },
    chart: {
      type: 'line',
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
      toolbar: {
        show: true,
      },
    },
    stroke: { width: [1, 0, 1, 1], curve: 'smooth' },

    fill: { type: ['solid', 'solid'] },
    xaxis: {
      type: 'datetime',
      min: Date.now() - 1000 * 60 * 60 * 24 * 30, // 30 days ago
      max: Date.now(), // Today
      title: {
        text: 'Days',
      },
    },
    markers: {
      size: [0, 0],
      colors: ['#fc5203', '#fc1403', '#0362fc', '#0a8028'],
      fillOpacity: 1,
      strokeWidth: 1,
      strokeColor: '#fff',
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
      offsetX: 0,
      horizontal: true,
      style: { fontSize: '10px', colors: ['#8e8e8e'] },
      background: { padding: 2, borderRadius: 2 },
    },
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
    legend: {
      show: true,
      position: 'top',
      labels: {
        useSeriesColors: false,
      },
    },
    yaxis: [
      {
        title: {
          text: '# of Tests Daily',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Positivity Rate',
        },
         min: 0,
         max: 100
      },
    ],
  });

  return (
    <Card>
      <CardHeader title="Daily Tests and Positivity Rate" subheader="" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA}
          options={chartOptions}
          height={550}
        />
      </Box>
    </Card>
  );
}
