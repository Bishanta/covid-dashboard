import { merge } from 'lodash';
import React, { useEffect, useState } from "react";
import { read, utils } from 'xlsx';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../../components/charts';
import COVIDDEATH from '../../../_mocks_/coviddeath';
// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------
let AllProvinceOccurance = COVIDDEATH.map((item) => item.province);
let AllProvinceOccuranceCount = AllProvinceOccurance.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

const CHART_DATA = [
  AllProvinceOccuranceCount.Bagmati,
  AllProvinceOccuranceCount.Gandaki,
  AllProvinceOccuranceCount.Karnali,
  AllProvinceOccuranceCount.Madhesh,
  AllProvinceOccuranceCount.Province1,
  AllProvinceOccuranceCount.Lumbini,
  AllProvinceOccuranceCount.Sudurpaschim

];
export default function DataLocationDeath() {
  const theme = useTheme();
  const [chartData, setChartData] = useState([
    AllProvinceOccuranceCount.Bagmati,
    AllProvinceOccuranceCount.Gandaki,
    AllProvinceOccuranceCount.Karnali,
    AllProvinceOccuranceCount.Madhesh,
    AllProvinceOccuranceCount.Province1,
    AllProvinceOccuranceCount.Lumbini,
    AllProvinceOccuranceCount.Sudurpaschim,
    AllProvinceOccuranceCount.Lumbini
  ])

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.error.main,
      theme.palette.success.main,
      theme.palette.secondary.main,
      theme.palette.text.primary,
      theme.palette.secondary.main
    ],
    labels: [
      'Province 1',
      'Province 2',
      'Bagmati',
      'Gandaki',
      'Lumbini',
      'Karnali',
      'Sudurpaschim',
      'Other Country'
    ],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: {
      enabled: true,
      dropShadow: { enabled: false },
      style: { colors: ['#000'] },
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
    },
  });

  console.log(CHART_DATA, "pRINTING CHART DATA FORMATE")

  const extractData = async (data) => {
    data.forEach((row) => {
      if (row.daily === 'Total') {
        // console.log('Printing row with total value', row)
        const keys = Object.keys(row)
        const data = []
        const total = row.Total
        keys.forEach(key => {
          if (key !== 'daily' && key !== 'Total') {
            data.push(parseFloat(((row[key] / total) * 100).toFixed(2)))
          }
        })
        setChartData(data)
      }
    })
  }

  const fetchFile = async () => {
    const arrayBuffer = await (await fetch('http://localhost:3000/xls/covid_data/DeathProvinceWise.xls')).arrayBuffer();
    // console.log(arrayBuffer, 'fetched excel in array buffer from place of death component')

    /* convert data to binary string */
    var data = new Uint8Array(arrayBuffer);
    var arr = new Array();
    for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");

    // console.log(bstr, "Printing bstr")
    /* Call XLSX */
    var workbook = read(bstr, {
      type: "binary"
    });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = utils.sheet_to_json(worksheet);
    console.log(json, "Printing data in json format in place of death component");
    extractData(json)
  };

  useEffect(() => {
    fetchFile()
  }, []);

  return (
    <Card>
      <CardHeader title='Covid Deaths by Province' />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart
          type="pie"
          series={chartData}
          options={chartOptions}
          height={280}
        />
      </ChartWrapperStyle>
    </Card>
  );
}
