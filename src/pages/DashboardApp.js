import { useEffect } from 'react';

// material
import { Box, Grid, Container, Typography } from '@mui/material';
import { read, utils } from 'xlsx';
// components
import Page from '../components/Page';
import {
  CovidDeaths,
  NewCovidPositive,
  CovidRecovered,
  DataLocationPositive,
  DataLocationDeath,
  TotalDataChart,
  CovidPositiveBar,
  CovidNewCases,
  DistrictsReportingNewCases,
  NumberofActiveCase,
  RollingDaysTotal,
  DailyTestsAndPositivityRate,
  DailyPositiveCases,
  DailyNewPositiveAndRecoveredCases,
  WeeklyTestPositiveCases,
  EstimatedAndReported,
  NewCasesCard,
  NewActiveCasesCard,
  PredictiveValues,
  CovidByAge,
  SexAndAgeComposition,
  AgeSpecificPrevalence,
  KTMValleyandOutsideValley,
  ActiveRecoveredDeathProvince,
  SARILines,
  DailyCriticalCases,
  DeathsBasedOnDate,
  DeathsBasedOnDateofReport,
  RollingDeathsDaysTotal,
  DeathsBySexProvince,
  DeathsPer100000,
  AgeSpecificCase,
  PlaceofDeath,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

// function ImportFile() {
//   var excelUrl = "sample.xls";

//   var oReq = new XMLHttpRequest();
//   oReq.open('get', excelUrl, true);
//   oReq.responseType = 'blob';
//   oReq.onload = function () {
//     var blob = oReq.response;
//     excelIO.open(blob, LoadSpread, function (message) {
//       console.log(message);
//     });
//   };
//   oReq.send(null);
// }

// function LoadSpread(json) {
//   jsonData = json;
//   console.log(jsonData, "Printing json from excel")
//   // workbook.fromJSON(json);

//   // workbook.setActiveSheet("Revenues (Sales)");
// }

export default function DashboardApp() {

  useEffect(() => {
    // fetchFile()
  });


  const fetchFile = async () => {
    console.log("Hello world")
    // fetch('http://localhost:3000/test.json', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   }
    // }).then(response => {
    //   console.log(response.json(), "Response from fetch")
    // })
    const arrayBuffer = await (await fetch('http://localhost:3000/xls/sample.xls')).arrayBuffer();
    console.log(arrayBuffer, 'fetched excel in array buffer format')

    /* convert data to binary string */
    var data = new Uint8Array(arrayBuffer);
    var arr = new Array();
    for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");

    console.log(bstr, "Printing bstr")
    /* Call XLSX */
    var workbook = read(bstr, {
      type: "binary"
    });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = utils.sheet_to_json(worksheet);
    console.log(json, "Printing data in json format");



  };


  return (
    <Page title="Dashboard | Covid Nepal">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">COVID-19 STATUS OF NEPAL</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={12} xl={12}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={2} md={2}>
                <CovidRecovered />
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <NewCovidPositive />
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <CovidDeaths />
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <NewCasesCard />
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <NewActiveCasesCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <CovidNewCases />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <DistrictsReportingNewCases />
            {/* <TotalDataChart /> */}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <NumberofActiveCase />
            <RollingDaysTotal />
            <DailyTestsAndPositivityRate />
            <DailyPositiveCases />
            <DailyNewPositiveAndRecoveredCases />
            <WeeklyTestPositiveCases />
            <EstimatedAndReported />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <CovidPositiveBar />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <PredictiveValues />
            <CovidByAge />
            <SexAndAgeComposition />
            <AgeSpecificPrevalence />
            <KTMValleyandOutsideValley />
            <ActiveRecoveredDeathProvince />
            <SARILines />
            <DailyCriticalCases />
            <DeathsBasedOnDate />
            <DeathsBasedOnDateofReport />
            <RollingDeathsDaysTotal />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <DataLocationDeath />
            <DeathsBySexProvince />
            <DeathsPer100000 />
            <AgeSpecificCase />
            <PlaceofDeath />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}



