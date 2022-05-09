
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Grid } from '@mui/material';
//
import { BaseOptionChart } from '../../../components/charts';

// ----------------------------------------------------------------------

const CHART_DATA_ICU = [
  {
    name: 'No. of Patients in ICU',
    type: 'column',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 9999),
      },
      { x: Date.now(), y: Math.floor(Math.random() * 9999) },
    ],
  },
  {
    name: '3 Day Average',
    type: 'line',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      { x: Date.now(), y: Math.floor(Math.random() * 9999) + 9999 },
    ],
  },
  {
    name: '7 Day Average',
    type: 'line',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      { x: Date.now(), y: Math.floor(Math.random() * 9999) + 9999 },
    ],
  },
];
const CHART_DATA_VENT = [
  {
    name: 'No. of Patients in Ventilator',
    type: 'column',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 9999),
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 9999),
      },
      { x: Date.now(), y: Math.floor(Math.random() * 9999) },
    ],
  },
  {
    name: '3 Day Average',
    type: 'line',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      { x: Date.now(), y: Math.floor(Math.random() * 9999) + 9999 },
    ],
  },
  {
    name: '7 Day Average',
    type: 'line',
    data: [
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 30,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 29,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 28,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 27,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 26,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 25,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 24,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 23,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 22,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 21,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 20,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 19,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 18,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 17,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 16,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 15,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 14,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 13,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 12,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 11,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 10,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 9,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 8,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 7,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 6,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 5,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 4,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 3,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 2,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      {
        x: Date.now() - 1000 * 60 * 60 * 24 * 1,
        y: Math.floor(Math.random() * 9999) + 9999,
      },
      { x: Date.now(), y: Math.floor(Math.random() * 9999) + 9999 },
    ],
  },
];

export default function DailyCriticalCases() {
  const chartOptions = merge(BaseOptionChart(), {
    colors: ['#4472c4', '#ed7d31', '#ffc000'],
    plotOptions: {
      // Bar
      bar: {
        columnWidth: '25%',
        borderRadius: 2,
        dataLabels: {
          orientation: 'vertical',
          position: 'top',
        },
      },
    },
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
    stroke: { width: [0, 2, 2], curve: 'smooth' },

    fill: { type: ['solid', 'solid'] },
    xaxis: {
      type: 'datetime',
      min: Date.now() - 1000 * 60 * 60 * 24 * 30, // 30 days ago
      max: Date.now(), // Today
      title: {
        text: 'Days',
      },
    },
    markers: { size: [0, 0] },
    dataLabels: {
      enabled: false,
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
      position: 'bottom',
      labels: {
        useSeriesColors: false,
      },
    },
    yaxis: {
      title: {
        text: '',
      },
    },
  });

  return (
     <Card>
      <CardHeader
        title="Daily Management of Critical Cases"
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <CardHeader
              titleTypographyProps={{
                variant: 'subtitle2',
              }}
              title="COVID-19 cases in ICU"
            />
            <ReactApexChart
              type="line"
              series={CHART_DATA_ICU}
              options={chartOptions}
              height={400}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <CardHeader
              titleTypographyProps={{
                variant: 'subtitle2',
              }}
              title="COVID-19 cases in Ventilator"
            />
            <ReactApexChart
              type="line"
              series={CHART_DATA_VENT}
              options={chartOptions}
              height={400}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
