import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Estimated',
    data: [91090, 405919, 74383, 7509, 23353],
  },
  {
    name: 'Reported',
    data: [24720, 164341, 6579, 789, 5983],
  },
];

export default function EstimatedAndReported() {
  const chartOptions = merge(BaseOptionChart(), {
    colors: ['#0070C0', '#00B050'],
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
          orientation: 'vertical',
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#222'],
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
    },
    xaxis: {
      categories: [
        'poush 2078',
        'magh 2078',
        'falgun 2078',
        'chaitra 2078',
        'baisakh 2079',
      ],
    },
  });

  return (
    <Card>
      <CardHeader
        title="Estimated and reported COVID-19 cases"
        subheader="(As of 17 Falgun 2078)"
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
