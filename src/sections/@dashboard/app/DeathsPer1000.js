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
    data: [0.9, 19.3, 162.6, 26.2],
  },
  {
    name: 'Male',
    data: [0.8, 43.5, 334.8, 53.1],
  },
  {
    name: 'Total',
    data: [0.8, 30.8, 245.3, 39.3]
  },
];

export default function DeathsPer100000() {
  const chartOptions = merge(BaseOptionChart(), {
    colors: ['#4472c4', '#ed7d31', '#a5a5a5'],
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
          return y;
        },
      },
    },
    xaxis: {
      categories: ['0-17', '18-59', '60+', 'Total'],
    },
  });

  return (
    <Card>
      <CardHeader
        title="COVID-19 Deaths per 100000 Population"
        subheader=""
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
