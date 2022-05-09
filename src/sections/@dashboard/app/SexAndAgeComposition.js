/* eslint-disable no-useless-concat */
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Grid } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const Chart_data_magh_chaitra = [
  {
    name: 'Males',
    data: [
      0.88, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
      4.5, 3.9, 3.5, 3,
    ],
  },
  {
    name: 'Females',
    data: [
      -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
      -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
    ],
  },
];

const Chart_data_chaitra_mangsir = [
  {
    name: 'Males',
    data: [
      0.78, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
      4.5, 3.9, 3.5,
    ],
  },
  {
    name: 'Females',
    data: [
      -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
      -4.4, -4.1, -4, -4.1, -3.4, -3.1,
    ],
  },
];
const Chart_data_mangsir_onwards = [
  {
    name: 'Males',
    data: [
      0.98, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
      4.5, 3.9, 3.5,
    ],
  },
  {
    name: 'Females',
    data: [
      -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
      -4.4, -4.1, -4, -4.1, -3.4, -3.1,
    ],
  },
];
export default function SexAndAgeComposition() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      type: 'bar',
      stacked: true,
    },
    colors: ['#4472c4', '#ed7d31'],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '65%',
        borderRadius: 2,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return Math.abs(val) + '%';
      },
      style: {
        fontSize: '8px',
        colors: ['#999'],
        fontWeight: 'bold',
      },
      offsetX: 22,
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },

    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      min: -5,
      max: 5,
      title: {
        text: 'Age Group',
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val + ' ' + 'Years';
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + '%';
        },
      },
    },
    title: {
      text: 'Population Pyramid (%) of COVID-19 Cases',
      style: {
        fontSize: '10px',
        fontWeight: 'bold',
      },
    },
    xaxis: {
      categories: [
        '75+',
        '70-74',
        '65-69',
        '60-64',
        '55-59',
        '50-54',
        '45-49',
        '40-44',
        '35-39',
        '30-34',
        '25-29',
        '20-24',
        '15-19',
        '10-14',
        '5-9',
        '0-4',
      ],
      title: {
        text: 'Percent',
      },
      labels: {
        formatter: function (val) {
          return Math.abs(val) + '%';
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader
        title="Age and Sex Comopsition of COVID cases in different time frame"
        subheader=""
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <CardHeader
              titleTypographyProps={{
                variant: 'subtitle2',
              }}
              title="2076 Magh 9 - 2077 Chaitra 1"
            />
            <ReactApexChart
              type="bar"
              series={Chart_data_magh_chaitra}
              options={chartOptions}
              height={500}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <CardHeader
              titleTypographyProps={{
                variant: 'subtitle2',
              }}
              title="2077 Chaitra 2 - 2078 Mangsir 12"
            />
            <ReactApexChart
              type="bar"
              series={Chart_data_chaitra_mangsir}
              options={chartOptions}
              height={500}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} xl={4}>
            <CardHeader
              titleTypographyProps={{
                variant: 'subtitle2',
              }}
              title="2078 Mangsir 13 onwards"
            />
            <ReactApexChart
              type="bar"
              series={Chart_data_mangsir_onwards}
              options={chartOptions}
              height={500}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
