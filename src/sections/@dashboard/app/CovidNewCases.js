import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';
import { merge } from 'lodash';
// ----------------------------------------------------------------------

const CHART_DATA = [
  {
   name: "New Cases",
    data: Array.from({length: 75}, () => Math.floor(Math.random() * 9999)),
  }
];

export default function CovidNewCases() {
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
    stroke: { show: true, width: 1, colors: ['#fff'] },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '100%',
      },
    },
    legend: {
      show: true,
    },
    // fill: {
    //   colors: '#2d0707',
    //   type: 'gradient',
    //   gradient: {
    //     shade: 'dark',
    //     type: 'vertical',
    //     shadeIntensity: 0.5,
    //     opacityFrom: 0.9,
    //     opacityTo: 0.3,
    //   },
    // },
    xaxis: {
      type: 'category',
      categories: [
        'achham',
        'arghakhanchi',
        'baglung',
        'baitadi',
        'bajhang',
        'bajura',
        'banke',
        'bara',
        'bardiya',
        'bhaktapur',
        'bhojpur',
        'chitwan',
        'dadeldhura',
        'dailekh',
        'dang deukhuri',
        'darchula',
        'dhading',
        'dhankuta',
        'dhanusa',
        'dholkha',
        'dolpa',
        'doti',
        'gorkha',
        'gulmi',
        'humla',
        'ilam',
        'jajarkot',
        'jhapa',
        'jumla',
        'kailali',
        'kalikot',
        'kanchanpur',
        'kapilvastu',
        'kaski',
        'kathmandu',
        'kavrepalanchok',
        'khotang',
        'lalitpur',
        'lamjung',
        'mahottari',
        'makwanpur',
        'manang',
        'morang',
        'mugu',
        'mustang',
        'myagdi',
        'nawalparasi',
        'nuwakot',
        'okhaldhunga',
        'palpa',
        'panchthar',
        'parbat',
        'parsa',
        'pyuthan',
        'ramechhap',
        'rasuwa',
        'rautahat',
        'rolpa',
        'rukum',
        'rupandehi',
        'salyan',
        'sankhuwasabha',
        'saptari',
        'sarlahi',
        'sindhuli',
        'sindhupalchok',
        'siraha',
        'solukhumbu',
        'sunsari',
        'surkhet',
        'syangja',
        'tanahu',
        'taplejung',
        'terhathum',
        'udayapur',
      ],
      position: 'top',
      labels: {
        show: true,
        rotate: -90,
        fontSize: 16,
      },
    },
    annotations: {
      xaxis: [
        {
          xaxis: 0,
          borderColor: '#FEB019',
        },
      ],
    },
    tooltip: {
      shared: true,
      intersect: false,
      fillSeriesColor: false,
      followCursor: true,
      marker: {
        show: true,
      },
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)}`;
          }
          return y;
        },
      },
    },
    yaxis: {
      showForNullSeries: false,
    },
  });

  return (
    <Card>
      <CardHeader title="COVID-19 New Cases (PCR+ Antigen)" subheader="Reported on 2078 Falgun 17, by Districts" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions}
          height={1000}
        />
      </Box>
    </Card>
  );
}
