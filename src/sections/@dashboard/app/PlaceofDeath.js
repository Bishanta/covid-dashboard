import axios from "axios";
import React, { useEffect, useState } from "react";
import { read, utils } from 'xlsx';
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';


export default function App() {
  const [chartData, setChartData] = useState([
    {
      name: 'Affected',
      type: 'column',
      data: [
        { x: `Deferal Hospital`, y: 39.6 },
        { x: `Provincial Hospital`, y: 13.0 },
        { x: `Private Hospital`, y: 40.5 },
        { x: `Institutional isolation/HP/PHCC`, y: 0.9 },
        { x: `Home Isolation`, y: 4.5 },
        { x: `On the way to hospital`, y: 0.6 },
        { x: `Missing Information`, y: 1.0 },
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
        text: '',
      },
      labels: {
        show: true,
        rotate: 0,
        hideOverlappingLabels: false,
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
          return val;
        },
      },
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y} %`;
          }
          return y;
        },
      },
    },
  });

  const fetchFile = async () => {
    const arrayBuffer = await (await fetch('http://localhost:3000/xls/covid_data/DeathPlaceWise.xls')).arrayBuffer();
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
    // console.log(json, "Printing data in json format in place of death component");
    extractData(json)
  };

  const extractData = async (data) => {
    data.forEach((row) => {
      if (row.daily === 'Total') {
        // console.log('Printing row with total value', row)
        const keys = Object.keys(row)
        const data = []
        const total = row.Total
        keys.forEach(key => {
          if (key !== 'daily' && key !== 'Total') {
            data.push({ x: key, y: ((row[key] / total) * 100).toFixed(2) })
          }
        })
        // console.log(data, 'printing data')
        setChartData([
          {
            name: 'Affected',
            type: 'column',
            data: data
          },
        ])
      }
    })
  }

  useEffect(() => {
    fetchFile()
  }, []);

  return (
    <Card>
      <CardHeader title="COVID-19 Deaths:Place of Death" subheader="(N=11,938)" />
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