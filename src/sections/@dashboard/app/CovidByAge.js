import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import React, { useEffect, useState } from "react";
import { read, utils } from 'xlsx';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Affected',
    type: 'column',
    data: [
      { x: `0 - 4`, y: 0.9 },
      { x: `5 - 9`, y: 1.4 },
      { x: `10 - 14`, y: 2.3 },
      { x: `15 - 19`, y: 4.7 },
      { x: `20 - 24`, y: 10.8 },
      { x: `25 - 29`, y: 14.0 },
      { x: `30 - 34`, y: 13.4 },
      { x: `35 - 39`, y: 11.2 },
      { x: `40 - 44`, y: 9.3 },
      { x: `45 - 49`, y: 7.4 },
      { x: `50 - 54`, y: 7.0 },
      { x: `55 - 59`, y: 5.1 },
      { x: `60 - 64`, y: 4.1 },
      { x: `65 - 69`, y: 2.8 },
      { x: `70 - 74`, y: 2.1 },
      { x: `75 - 79`, y: 1.4 },
      { x: `80 - 84`, y: 0.9 },
      { x: `85+`, y: 0.7 },
    ],
  },
];

export default function CovidByAge() {
  const [chartData, setChartData] = useState([
    {
      name: 'Affected',
      type: 'column',
      data: [
        { x: `0 - 4`, y: 0.9 },
        { x: `5 - 9`, y: 1.4 },
        { x: `10 - 14`, y: 2.3 },
        { x: `15 - 19`, y: 4.7 },
        { x: `20 - 24`, y: 10.8 },
        { x: `25 - 29`, y: 14.0 },
        { x: `30 - 34`, y: 13.4 },
        { x: `35 - 39`, y: 11.2 },
        { x: `40 - 44`, y: 9.3 },
        { x: `45 - 49`, y: 7.4 },
        { x: `50 - 54`, y: 7.0 },
        { x: `55 - 59`, y: 5.1 },
        { x: `60 - 64`, y: 4.1 },
        { x: `65 - 69`, y: 2.8 },
        { x: `70 - 74`, y: 2.1 },
        { x: `75 - 79`, y: 1.4 },
        { x: `80 - 84`, y: 0.9 },
        { x: `85+`, y: 0.7 },
      ],
    },
  ])
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      toolbar: {
        show: true,
      },
    },
    colors: ['#3465a4'],
    stroke: { width: [2] },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        borderRadius: 1,
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    fill: {
      type: 'solid',
      gradient: {
        type: 'vertical',
        shadeIntensity: 0.5,
        opacityFrom: 0.9,
        opacityTo: 0.3,
      },
    },
    xaxis: {
      type: 'category',
      title: {
        text: 'Years',
      },
    },
    yaxis: {
      title: {
        text: 'Percentage',
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      fillSeriesColor: false,
      followCursor: true,
      marker: {
        show: true,
      },
      x: {
        formatter: function (val) {
          // eslint-disable-next-line no-useless-concat
          return val + ' ' + 'Years';
        },
      },
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return y + `%`;
          }
          return y;
        },
      },
    },
  });

  const fetchFile = async () => {
    const arrayBuffer = await (await fetch('http://localhost:3000/xls/covid_data/RT_PCR_PositiveDatabase.xlsx')).arrayBuffer();
    // console.log(arrayBuffer, 'fetched excel in array buffer from place of death component')

    /* convert data to binary string */
    var data = new Uint8Array(arrayBuffer);
    var arr = new Array();
    for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");

    // console.log(bstr, "Printing bstr")
    /* Call XLSX */
    var workbook = read(bstr, {
      type: "binary",
      cellDates: true
    });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = utils.sheet_to_json(worksheet);
    // console.log(json, "Printing data in json format in place of death component");
    extractData(json)
  };

  const extractData = async (data) => {
    console.log(data, "Hehe")
    const ageRange = {
      '0-4': 0,
      '5-9': 0,
      '10-14': 0,
      '16-19': 0,
      '20-24': 0,
      '25-29': 0,
      '30-34': 0,
      '35-39': 0,
      '40-44': 0,
      '45-49': 0,
      '50-54': 0,
      '55-59': 0,
      '60-64': 0,
      '65-69': 0,
      '70-74': 0,
      '75-79': 0,
      '80-84': 0,
      '85+': 0
    };

    data.forEach(item => {
      Object.keys(ageRange).forEach(key => {
        if (checkRange(item.age, key)) {
          ageRange[key]++
        }
      })
    })

    console.log(ageRange, "Printing ageRange object")
    const extracted_data = []
    Object.keys(ageRange).forEach(key => {
      // [
      //   { x: `0 - 4`, y: 0.9 },
      //   { x: `5 - 9`, y: 1.4 },
      extracted_data.push({
        x: key,
        y: ((ageRange[key] / data.length) * 100).toFixed(2)
      })
    })
    setChartData([
      {
        name: 'Affected',
        type: 'column',
        data: extracted_data,
      },
    ])
    console.log(extracted_data, "Pinting extracted?")
  }

  useEffect(() => {
    fetchFile()
  }, []);

  function checkRange(num, range) {
    if (range.indexOf('+') !== -1) {
      if (num >= 85) {
        return true
      }
    }
    if (range.indexOf('-') !== -1) {
      const rangeArr = range.split('-')
      if (num >= rangeArr[0] && num <= rangeArr[1]) {
        return true
      }
    }
    return false
  }

  console.log(checkRange(90, '85+'), "Checking range man")

  return (
    <Card>
      <CardHeader title="COVID-19 Cases" subheader="by Age Group" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={chartData}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
