/* eslint-disable no-useless-concat */
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------
let numArray = Array.from({ length: 201 }, () =>
  Math.floor(Math.random() * 9999)
);

let decArray = Array.from(
  { length: 201 },
  () => Math.floor(Math.random() * 100) / 100
);

const CHART_DATA_POS = [
  {
    name: 'cases',
    type: 'line',
    data: numArray.sort(function (a, b) {
      return a - b;
    }),
  },
  {
    name: 'Positive Predictive Value',
    type: 'area',

    data: decArray.sort(function (a, b) {
      return a - b;
    }),
  },
];

const CHART_DATA_NEG = [
  {
    name: 'cases',
    type: 'line',
    data: numArray.sort(function (a, b) {
      return a - b;
    }),
  },
  {
    name: 'Negetive Predictive Value',
    type: 'area',
    data: decArray.sort(function (a, b) {
      return a - b;
    }),
  },
];

export default function PredictiveValues() {
  const chartOptionsPos = merge(BaseOptionChart(), {
    colors: ['#2b40b5', '#e86664'],
    plotOptions: {
      // Bar
      bar: {
        columnWidth: '0',
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
    stroke: { width: [1, 1], curve: 'smooth' },

    fill: {
      type: ['solid', 'gradient'],
      gradient: {
        type: 'vertical',
        shadeIntensity: 0.5,
        opacityFrom: 0.9,
        opacityTo: 0.3,
      },
      colors: undefined,
    },
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 200, // Math.max.apply(Math, data.map(o => o.x)),
      title: {
        text: 'Days',
      },
    },
    markers: {
      size: [2, 2],
      colors: ['#2b40b5', '#e86664'],
      fillOpacity: 1,
      strokeWidth: 1,
      strokeColor: '#fff',
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1],
      offsetX: 0,
      horizontal: true,
      style: { fontSize: '10px', colors: ['#8e8e8e'] },
      background: { padding: 2, borderRadius: 2 },
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        formatter: function (val) {
          return val + ' ' + 'Days';
        },
      },
      y: {
        formatter: (y) => {
          if (y <= 1) {
            return `${y}` + '%';
          } else {
            return `${y}`;
          }
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
          text: 'Cases',
        },
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
      {
        opposite: true,
        title: {
          text: 'Positive Predictive Value',
        },
        min: 0,
        max: 1,
      },
    ],
    title: { text: 'Positive Predictive Value' },
  });
  const chartOptionsNeg = merge(BaseOptionChart(), {
    colors: ['#2b40b5', '#e86664'],
    plotOptions: {
      // Bar
      bar: {
        columnWidth: '0%',
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
    stroke: { width: [1, 1], curve: 'smooth' },

    fill: {
      type: ['solid', 'gradient'],
      gradient: {
        type: 'vertical',
        shadeIntensity: 0.5,
        opacityFrom: 0.9,
        opacityTo: 0.3,
      },
    },
    xaxis: {
      type: 'numeric',
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
      min: 0,
      max: 200, // Math.max.apply(Math, data.map(o => o.x)),
      title: {
        text: 'Days',
      },
    },
    markers: {
      size: [2, 2],
      colors: ['#2b40b5', '#e86664'],
      fillOpacity: 1,
      strokeWidth: 0.5,
      strokeColor: '#fff',
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1],
      offsetX: 0,
      horizontal: true,
      style: { fontSize: '10px', colors: ['#8e8e8e'] },
      background: { padding: 2, borderRadius: 2 },
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        formatter: function (val) {
          return val + ' ' + 'Days';
        },
      },
      y: {
        formatter: (y) => {
          if (y <= 1) {
            return `${y}` + '%';
          } else {
            return `${y}`;
          }
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
          text: 'Cases',
        },
        labels: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
      {
        opposite: true,
        title: {
          text: 'Negetive Predictive Value',
        },
        min: 0,
        max: 1,
      },
    ],
    title: { text: 'Negetive Predictive Value' },
  });

  return (
    <Card>
      <CardHeader
        title="Epidemic Volatility Index: Prediction of COVID-19"
        subheader=""
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA_POS}
          options={chartOptionsPos}
          height={600}
        />
      </Box>
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA_NEG}
          options={chartOptionsNeg}
          height={600}
        />
      </Box>
    </Card>
  );
}
