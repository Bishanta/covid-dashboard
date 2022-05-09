/* eslint-disable no-useless-concat */
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: '2018',
    type: 'line',
    data: Array.from({ length: 52 }, (_, i) => ({
      x: `W` + String(i + 1).padStart(2, '0'),
      y: Math.floor(Math.random() * 100) + 50,
    })),
  },
  {
    name: '2019',
    type: 'line',
    data: Array.from({ length: 52 }, (_, i) => ({
      x: `W` + String(i + 1).padStart(2, '0'),
      y: Math.floor(Math.random() * 80) + 80,
    })),
  },
  {
    name: '2020',
    type: 'line',
    data: Array.from({ length: 52 }, (_, i) => ({
      x: `W` + String(i + 1).padStart(2, '0'),
      y: Math.floor(Math.random() * 100) + 150,
    })),
  },
  {
    name: '2021',
    type: 'line',
    data: Array.from({ length: 52 }, (_, i) => ({
      x: `W` + String(i + 1).padStart(2, '0'),
      y: Math.floor(Math.random() * 150) + 150,
    })),
  },
  {
    name: '2022',
    type: 'line',
    data: Array.from({ length: 52 }, (_, i) => ({
      x: `W` + String(i + 1).padStart(2, '0'),
      y: Math.floor(Math.random() * 150) + 50,
    })),
  },
];


export default function SARILines() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
      toolbar: {
        show: true,
      },
    },
    colors: ['#4472c4', '#ed7d31', '#7030a0', '#806000', '#00b050'],
    stroke: { width: [2, 2, 2, 2, 2] },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        borderRadius: 2,
      },
    },
    fill: { type: ['solid', 'solid', 'solid'] },
    xaxis: {
      type: 'category',
      title: { text: 'Weeks' },
      labels: {
        rotate: 0,
        style: {
          fontSize: '11px',
        }
      },
    },
    yaxis: {
      title: { text: 'Cases Reported' },
      min: 0,
    },
    tooltip: {
      shared:true,
      intersect: false,
      followCursor: false,
      x: {
        formatter: function (val) {
          return `Week ` + val;
        },
      },
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}` + ' SARI cases';
          }
          return y;
        },
      },
      marker: {
        show: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
  });

  return (
    <Card>
      <CardHeader title="Severe Acute Respiratory Illness (SARI) Case Reported" subheader="(2018, 2019, 2020, 2021 and 2022)" />
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
