
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Grid } from '@mui/material';
//
import { makeStyles } from '@mui/styles';
import { BaseOptionChart } from '../../../components/charts';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// ----------------------------------------------------------------------

const CHART_DATA = [
 {
  name: "Female",
  data:[0.5, 0.1, 0.0, 0.1, 0.1, 0.2, 0.3, 0.4, 0.6, 0.9, 1.1, 1.6, 2.2, 3.0, 4.6, 5.0, 7.1, 8.9]
 },
 {
   name: "Male",
   data:[0.3, 0.0, 0.1, 0.1, 0.2, 0.3, 0.5, 0.8, 0.9, 1.2, 1.7, 2.3, 3.4, 4.4, 6.3, 7.7, 9.3, 12.4]
 },
{
  name: "Total",
  data:[0.4, 0.1, 0.0, 0.1, 0.1, 0.2, 0.3, 0.4, 0.7, 1.1, 1.4, 2.0, 2.9, 3.8, 5.5, 6.5, 8.3, 10.9]
}
];
function createData(age, RTPCR, deaths, fatalityRate) {
  return { age, RTPCR, deaths, fatalityRate };
}
const rows = [
  createData(`0-4`,`10,359`, `39`, `0.38`),
  createData(`5-9`,`16,072`, `9`, `0.06`),
  createData(`10-14`,`22,895`, `7`, `0.05`),
  createData(`15-19`,`29,719`, `6`, `0.04`),
  createData(`20-24`,`36,542`, `5`, `0.03`),
  createData(`25-29`,`43,366`, `4`, `0.02`),
  createData(`30-34`,`50,190`, `3`, `0.02`),
  createData(`35-39`,`56,914`, `2`, `0.01`),
  createData(`40-44`,`63,738`, `1`, `0.01`),
  createData(`45-49`,`70,562`, `0`, `0.00`),
  createData(`50-54`,`77,386`, `0`, `0.00`),
  createData(`55-59`,`84,210`, `0`, `0.00`),
  createData(`60-64`,`91,034`, `0`, `2.89`),
  createData(`65-69`,`97,858`, `0`, `3.78`),
  createData(`70-74`,`104,682`, `0`, `5.53`),
  createData(`75-79`,`111,506`, `0`, `6.52`),
  createData(`80-84`,`118,330`, `0`, `8.35`),
  createData(`85+`,`125,154`, `0`, `10.87`),
  createData(`NA`, `5,141`, `27`, `0.53`),
];


export default function AgeSpecificCase() {
  const chartOptions = merge(BaseOptionChart(), {
    colors: ['#4472c4', '#ed7d31', '#a5a5a5'],
    chart: {
      type: 'bar',
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        vertical: true,
        columnWidth: '65%',
        borderRadius: 0,
        dataLabels: {
          orientation: 'vertical',
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 0,
      offsetY: 2,
      style: {
        fontSize: '10px',
        colors: ['#777'],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff'],
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          return y;
        },
      },
    },
    xaxis: {
      type: 'category',
      categories: [`0-4`, `5-9`, `10-14`, `15-19`, `20-24`, `25-29`, `30-34`, `35-39`, `40-44`, `45-49`, `50-54`, `55-59`, `60-64`, `65-69`, `70-74`, `75-79`, `80-84`, `85+`],
      labels: {
        show: true,
        rotate: -90,
        rotateAlways: false,
      },
    },
  });
  const useStyles = makeStyles({
    table: {
      '& .MuiTableCell-root': {
        border: '1px solid #ed7d31',
      },
    },
  });
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title="Age-Specific Case Fertility Rate * COVID-19" />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            {/* <CardHeader
              titleTypographyProps={{
                variant: 'subtitle2',
              }}
              title="COVID-19 cases in ICU"
            /> */}
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table" className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Age group</TableCell>
                    <TableCell align="right">RTPCR+Antigen Positive Cases</TableCell>
                    <TableCell align="right">Deaths</TableCell>
                    <TableCell align="right">Age Specific Case Fatality Rate(%)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row,index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {row.age}
                      </TableCell>
                      <TableCell align="right">{row.RTPCR}</TableCell>
                      <TableCell align="right">{row.deaths}</TableCell>
                      <TableCell align="right">{row.fatalityRate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6}>
            <CardHeader
              titleTypographyProps={{
                variant: 'subtitle2',
              }}
              title="Age-Specific case fatality rate by sex"
            />
            <ReactApexChart
              type="bar"
              series={CHART_DATA}
              options={chartOptions}
              height={650}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
