import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Rolling 7 day total positive cases',
    type: 'column',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 9999),
      },
      { x: Date.now(), y: Math.floor(Math.random() * 9999) },
    ],
  },
  {
    name: 'Rolling 7 day total tests',
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
    colors: ['#037ffc', '#2fe'],
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
    stroke: { width: [0, 4], curve: 'straight' },

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
      size: [3, 3],
      colors: ['#000', '#2fe'],
      fillOpacity: 1,
      strokeWidth: 1,
      strokeColor: '#037ffc',
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0, 1],
      offsetX: 0,
      horizontal: true,
      style: { fontSize: '10px', colors: ['#8e8e8e'] },
      background: { padding: 1 },
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
  });

  return (
    <Card>
      <CardHeader
        title="7 Days Rolling Total Tests and Positive Cases "
        subheader=""
      />
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
