import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import React, { useEffect, useState } from "react";
import { read, utils } from 'xlsx';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';
// import { Datatype } from '@faker-js/faker/datatype';

// ----------------------------------------------------------------------

const chart_data = [
  {
    name: 'Districts',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 75),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 75),
      },
      { x: Date.now() - 1000 * 60 * 60 * 24 * 8, y: 30 },
      { x: Date.now() - 1000 * 60 * 60 * 24 * 7, y: 52 },
      { x: Date.now() - 1000 * 60 * 60 * 24 * 6, y: 25 },
      { x: Date.now() - 1000 * 60 * 60 * 24 * 5, y: 36 },
      { x: Date.now() - 1000 * 60 * 60 * 24 * 4, y: 75 },
      { x: Date.now() - 1000 * 60 * 60 * 24 * 3, y: 33 },
      { x: Date.now() - 1000 * 60 * 60 * 24 * 2, y: 21 },
      { x: Date.now() - 1000 * 60 * 60 * 24 * 1, y: 10 },
      { x: Date.now(), y: 60 },
    ],
  },
];
export default function DistrictsReportingNewCases() {
  const [chartData, setChartData] = useState([
    {
      name: 'Infected',
      type: 'column',
      data: [],
    },
  ])

  const [chartOptions, setChartOptions] = useState({})
  const chartOptionsTest = merge(BaseOptionChart(), {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      zoom: {
        enabled: true,
        type: 'x',
        autoScaleYaxis: true,
      },
      toolbar: {
        show: true,
      },
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'straight',
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      type: 'datetime',
      min: Date.now() - 1000 * 60 * 60 * 24 * 365, // 30 days ago
      max: Date.now(), // Today
      title: {
        text: 'Days',
      },
    },
    yaxis: {
      title: {
        text: 'Districts',
      },
      min: 0,
      max: 75,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5,
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
    // console.log(data, "Hehe")
    // const chart_data = [
    //   {
    //     name: 'Districts',
    //     data: [
    //       {
    //         x: Date.now() - 1000 * 60 * 60 * 24 * 30,
    //         y: Math.floor(Math.random() * 75),
    //       },
    let date = []
    let districts = []
    let extracted_data = []
    data.forEach(item => {
      const index = date.findIndex(function (x) {
        return x.valueOf() === item.date.valueOf();
      });
      // const findDate = date.find(
      //   date => date.getTime() === item.date.getTime(),
      // );
      // console.log(index, 'Printing index lol ')
      if (index === -1) {
        date.push(item.date)
        districts.push([item.district])
        if (date.length > 1) {
          // console.log(date[date.length - 2], "Printing dates")
          extracted_data.push({
            x: date[date.length - 2].getTime(),
            y: districts[date.length - 2].length
          })
        }
      }
      else {
        // console.log(districts[index], item.district, "For index " + index)
        if (districts[index] && districts[index].indexOf(item.district) === -1) {
          districts[index].push(item.district)
        }
      }
    })
    extracted_data.push({
      x: date[date.length - 1].getTime(),
      y: districts[date.length - 1].length
    })
    chartData[0].data = extracted_data
    // console.log(chart_data[0].data, extracted_data, "Printing both yes!")
    // console.log(extracted_data, "Printing data lol")
  }

  useEffect(() => {
    fetchFile()
  }, []);

  return (
    <Card>
      <CardHeader
        title="Number of districts reporting new cases"
        subheader="(1 January 2022 onwards)(PCR+ Antigen)"
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={chartData}
          options={chartOptionsTest}
          height={364}
        />
      </Box>
    </Card>
  );
}
