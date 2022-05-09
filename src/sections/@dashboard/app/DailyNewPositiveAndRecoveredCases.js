import { useEffect } from 'react';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';
import { useDispatch, useSelector } from 'react-redux';
import { setDailyNewAndRecoveredSlice } from '../../../features/DailyNewAndRecoveredSlice';
import { fDateMonth } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'New Positive',
    type: 'line',
    data: [
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 30),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 29),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 28),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 27),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 26),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 25),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 24),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 23),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 22),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 21),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 20),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 19),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 18),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 17),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 16),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 15),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 14),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 13),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 12),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 11),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 10),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 9),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 8),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 7),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 6),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 5),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 4),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 3),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 2),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 1),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
    ],
  },
  {
    name: 'New Recoveries',
    type: 'line',
    data: [
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 30),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 29),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 28),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 27),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 26),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 25),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 24),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 23),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 22),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 21),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 20),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 19),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 18),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 17),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 16),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 15),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 14),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 13),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 12),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 11),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 10),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 9),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 8),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 7),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 6),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 5),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 4),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 3),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 2),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: fDateMonth(Date.now() - 1000 * 60 * 60 * 24 * 1),
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      
    ],
  },
];

export default function DailyNewPositiveAndRecoveredCases() {
 
  const chartOptions = merge(BaseOptionChart(), {
    colors: ['#d4152b', '#1dc220'],
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
    stroke: { width: [4, 4], curve: 'smooth' },

    fill: { type: ['solid', 'solid'] },
    xaxis: {
      type: 'category',
      title: {
        text: '',
      },
      labels: {
        rotate: 0,
      },
    },
    markers: { size: [3, 3], colors: ['#000'], fillOpacity: 1, strokeWidth: 1 },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0],
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
    yaxis: {
      title: {
        text: '',
      },
      min: 0,
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDailyNewAndRecoveredSlice(CHART_DATA));
  }, [dispatch]);
  const chartData = useSelector(
    (state) => state.DailyNewAndRecoveredSlice.value
  );

  return (
    <Card>
      <CardHeader
        title="Daily New Positive and Recovered Cases"
        subheader="(RT-PCR + Antigen)"
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={chartData}
          options={chartOptions}
          height={400}
        />
      </Box>
    </Card>
  );
}
