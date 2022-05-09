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
    name: 'Affected',
    data: [
      { x: `0-17`, y: 2.5 },
      { x: `18-59`, y: 13.5 },
      { x: `60+`, y: 11.2 },
    ],
  },
];

const Chart_data_chaitra_mangsir = [
  {
    name: 'Affected',
    data: [
      { x: `0-17`, y: 5.1 },
      { x: `18-59`, y: 29.2 },
      { x: `60+`, y: 31.3 },
    ],
  },
];
const Chart_data_mangsir_onwards = [
  {
    name: 'Affected',
    data: [
      { x: `0-17`, y: 7.3 },
      { x: `18-59`, y: 52.4 },
      { x: `60+`, y: 51 },
    ],
  },
];
const Total_affected = [
  {
    name: 'Affected',
    data: [
      { x: `0-17`, y: 7 },
      { x: `18-59`, y: 52 },
      { x: `60+`, y: 51 },
    ],
  },
];
export default function AgeSpecificPrevalence() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      type: 'bar',
    },
    colors: ['#ffc000', '#7030a0', '#00b050'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
        endingShape: 'rounded',
        distributed: true,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: '10px',
        colors: ['#304758'],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      title: {
        text: 'Age Group (Years)',
      },
    },
    yaxis: {
      title: {
        text: 'Per 1000 Population',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: true,
      x: {
        formatter: function (val) {
          return val + ' ' + 'Years';
        },
      },
      y: {
        formatter: function (val) {
          return val + ' thousands';
        },
      },
      fixed: {
        enabled: true,
        position: 'topRight',
        offsetX: 0,
        offsetY: 0,
      },
    },
    legend: {
      show: false,
    },
  });
  return (
    <Card>
      <CardHeader
        title="Age (Years) Specific Prevalence of COVID-19 (Per 1,000 Population)"
        subheader=""
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
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
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
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
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
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
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <CardHeader
              titleTypographyProps={{
                variant: 'subtitle2',
              }}
              title="Total"
              subtitle=''
            />
            <ReactApexChart
              type="bar"
              series={Total_affected}
              options={chartOptions}
              height={500}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
