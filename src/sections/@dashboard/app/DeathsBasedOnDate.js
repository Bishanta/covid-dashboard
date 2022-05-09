import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';
import { fDateMonth} from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const chart_data = [
  {
    name: 'Deaths',
    data: [
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 30),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 29),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 28),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 27),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 26),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 25),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 24),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 23),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 22),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 21),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 20),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 19),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 18),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 17),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 16),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 15),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 14),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 13),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 12),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 11),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 10),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 9),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 8),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 7),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 6),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 5),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 4),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 3),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 2),
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 1),
        y: Math.floor(Math.random() * 9999),
      },
    ],
  },
];
export default function DeathsBasedOnDate() {
  
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      height: 400,
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: true,
      },
    },
    colors: ['#4472c4'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth',
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: [0],
      colors: ['#4472c4'],
      fillOpacity: 1,
      strokeWidth: 0,
    },
    xaxis: {
      type: 'category', // this needed to enable x data labels, 'datetime' is the default, 'category' is used for typed values
      title: {
        text: 'Days',
      },
      labels: {
        show: true,
        rotate: 0,
      },
    },
    yaxis: {
      title: {
        text: 'Number of Deaths',
      },
    },
  });

  return (
    <Card>
      <CardHeader
        title="Number of COVID-19 Deaths based on Date of Death"
        subheader="(Data revceived from 16 poush 2078 onwards)"
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={chart_data}
          options={chartOptions}
          height={400}
        />
      </Box>
    </Card>
  );
}
