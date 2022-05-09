// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
//redux
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import filterQuery from './features/filterQuery';
import covidPositiveSlice from './features/covidPositiveSlice';
import covidDeathSlice from './features/covidDeathSlice';
import covidNewCasesSlice from './features/CovidNewCasesSlice';
import DistrictsNewCases from './features/DistrictsNewCases';
import NumberOfActiveCase from './features/NumberofActiveCase';
import Rolling7daysSlice from './features/Rolling7daysSlice';
import DailyTestsAndPositivitySlice from './features/DailyTestsAndPositivitySlice';
import DailyPositiveCasesSlice from './features/DailyPositiveCasesSlice';
import DailyNewAndRecoveredSlice from './features/DailyNewAndRecoveredSlice';
import WeeklyTestPositiveCases from './features/WeeklyTestPositiveCases';
import EstimatedAndReported from './features/EstimatedAndReported';
import CovidByAgeSlice from './features/CovidByAgeSlice';
import AgeSpecificPrevalenceSlice from './features/AgeSpecificPrevalenceSlice';

// --------------------------------------------j--------------------------
const store = configureStore({
  reducer: {
    filterSidebar: filterQuery,
    covidPositiveSlice: covidPositiveSlice,
    covidDeathSlice: covidDeathSlice,
    covidNewCasesSlice: covidNewCasesSlice,
    DistrictsNewCases: DistrictsNewCases,
    NumberOfActiveCase: NumberOfActiveCase,
    Rolling7daysSlice: Rolling7daysSlice,
    DailyTestsAndPositivitySlice: DailyTestsAndPositivitySlice,
    DailyPositiveCasesSlice: DailyPositiveCasesSlice,
    DailyNewAndRecoveredSlice: DailyNewAndRecoveredSlice,
    WeeklyTestPositiveCases: WeeklyTestPositiveCases,
    EstimatedAndReported: EstimatedAndReported,
    CovidByAgeSlice: CovidByAgeSlice,
    AgeSpecificPrevalenceSlice: AgeSpecificPrevalenceSlice,
  },
  middleware: [...getDefaultMiddleware()],
});

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
