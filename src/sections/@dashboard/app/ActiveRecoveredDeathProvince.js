import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Active',
    data: [44, 55, 41, 37, 22, 43, 21,35],
  },
  {
    name: 'Recovered',
    data: [53, 32, 33, 52, 13, 43, 32,65],
  },
  {
    name: 'Death',
    data: [12, 17, 11, 9, 15, 11, 20,15],
  },
];

export default function ActiveRecoveredDeathProvince() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%',
    },
    colors: ['#ff0000', '#92d050', '#a5a5a5'],
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'center', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => {
        return val.toFixed(1) + '%';
      },
      offsetY: 0,
      style: {
        fontSize: '9px',
        colors: ['#304758'],
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
    title: {
      text: '',
    },
    xaxis: {
      categories: [
        'Province 1',
        'Madhesh',
        'Bagmati',
        'Gandaki',
        'Lumbini',
        'Karnali',
        'Sudurpaschim',
        'National',
      ],
    },
    yaxis: {
      show:true,
      min:0,
      max:100,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' Cases';
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
  });

  return (
    <Card>
      <CardHeader
        title="Active, Recovered and Death Cases"
        subheader="by Province"                       
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
