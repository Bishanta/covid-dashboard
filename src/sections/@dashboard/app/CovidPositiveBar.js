import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import React, { useEffect, useState } from "react";
import { read, utils } from 'xlsx';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

export default function CovidPositiveBar() {
  const [chartData, setChartData] = useState([
    {
      name: 'Infected',
      type: 'column',
      data: [],
    },
  ])

  const [chartOptions, setChartOptions] = useState({})

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
    const provinces = []
    const cases = []
    data.forEach(item => {
      const province = item.province.toString()
      const index = provinces.indexOf(province.toUpperCase().trim())
      if (index == -1) {
        provinces.push(province.toUpperCase().trim())
        cases.push(1)
      }
      else
        cases[index]++
    })

    console.log(provinces, cases, "Printing provinces and cases")
    setChartOptions({
      chart: {
        toolbar: {
          show: true,
        },
      },
      colors: ['#4a3232'],
      stroke: { width: [0, 2, 3] },
      plotOptions: { bar: { columnWidth: '40%', borderRadius: 2 } },
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
        categories: provinces,
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
              return `${y.toFixed(0)} Patients`;
            }
            return y;
          },
        },
      },
    })
    setChartData([
      {
        name: 'Infected',
        type: 'column',
        data: cases,
      },
    ])
  }

  useEffect(() => {
    fetchFile()
  }, []);

  // const chartOptions = merge(BaseOptionChart(), {
  //   chart: {
  //     toolbar: {
  //       show: true,
  //     },
  //   },
  //   colors: ['#4a3232'],
  //   stroke: { width: [0, 2, 3] },
  //   plotOptions: { bar: { columnWidth: '40%', borderRadius: 2 } },
  //   fill: {
  //     type: 'solid',
  //     gradient: {
  //       type: 'vertical',
  //       shadeIntensity: 0.5,
  //       opacityFrom: 0.9,
  //       opacityTo: 0.3,
  //     },
  //   },
  //   xaxis: {
  //     type: 'category',
  //     categories: [
  //       'Province 1',
  //       'Madhesh',
  //       'Bagmati',
  //       'Gandaki',
  //       'Lumbini',
  //       'Karnali',
  //       'Sudurpaschim',
  //     ],
  //   },
  //   tooltip: {
  //     shared: true,
  //     intersect: false,
  //     fillSeriesColor: false,
  //     followCursor: true,
  //     marker: {
  //       show: true,
  //     },
  //     y: {
  //       formatter: (y) => {
  //         if (typeof y !== 'undefined') {
  //           return `${y.toFixed(0)} Patients`;
  //         }
  //         return y;
  //       },
  //     },
  //   },
  // });

  return (
    <Card>
      <CardHeader title="COVID-19 Positive Cases (PCR+ Antigen)" subheader="by Province" />
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
