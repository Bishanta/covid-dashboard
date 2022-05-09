import PropTypes from 'prop-types';
import { Form, FormikProvider } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
// material
import {
  Box,
  Stack,
  Button,
  Drawer,
  Divider,
  IconButton,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
//
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';
import { setQuery, resetQuery } from '../../../features/filterQuery';
// ----------------------------------------------------------------------

// export const SORT_BY_OPTIONS = [
//   { value: 'featured', label: 'Featured' },
//   { value: 'newest', label: 'Newest' },
//   { value: 'priceDesc', label: 'Price: High-Low' },
//   { value: 'priceAsc', label: 'Price: Low-High' },
// ];
export const FILTER_PROVINCE_OPTIONS = [
  'Province 1',
  'Madhesh',
  'Bagmati',
  'Gandaki',
  'Province 5',
  'Karnali',
  'Sudurpaschim',
];
export const FILTER_DISTRICT_OPTIONS = [
  'achham',
  'arghakhanchi',
  'baglung',
  'baitadi',
  'bajhang',
  'bajura',
  'banke',
  'bara',
  'bardiya',
  'bhaktapur',
  'bhojpur',
  'chitwan',
  'dadeldhura',
  'dailekh',
  'dang deukhuri',
  'darchula',
  'dhading',
  'dhankuta',
  'dhanusa',
  'dholkha',
  'dolpa',
  'doti',
  'gorkha',
  'gulmi',
  'humla',
  'ilam',
  'jajarkot',
  'jhapa',
  'jumla',
  'kailali',
  'kalikot',
  'kanchanpur',
  'kapilvastu',
  'kaski',
  'kathmandu',
  'kavrepalanchok',
  'khotang',
  'lalitpur',
  'lamjung',
  'mahottari',
  'makwanpur',
  'manang',
  'morang',
  'mugu',
  'mustang',
  'myagdi',
  'nawalparasi',
  'nuwakot',
  'okhaldhunga',
  'palpa',
  'panchthar',
  'parbat',
  'parsa',
  'pyuthan',
  'ramechhap',
  'rasuwa',
  'rautahat',
  'rolpa',
  'rukum',
  'rupandehi',
  'salyan',
  'sankhuwasabha',
  'saptari',
  'sarlahi',
  'sindhuli',
  'sindhupalchok',
  'siraha',
  'solukhumbu',
  'sunsari',
  'surkhet',
  'syangja',
  'tanahu',
  'taplejung',
  'terhathum',
  'udayapur',
];
// ----------------------------------------------------------------------

FilterSidebar.propTypes = {
  isOpenFilter: PropTypes.bool,
  onResetFilter: PropTypes.func,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
  formik: PropTypes.object,
};

export default function FilterSidebar({
  isOpenFilter,
  onResetFilter,
  onOpenFilter,
  onCloseFilter,
  formik,
}) {
  const { values, getFieldProps, handleChange } = formik;
  const dispatch = useDispatch();
  const query = useSelector((state) => state.filterSidebar.query); // query from redux store
  const formatDate = (date) => {
    var d = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(
      -2
    )}-${('0' + date.getDate()).slice(-2)}`;
    formik.setFieldValue('date', d);}
    const resetForm = () => {
      formik.resetForm();
      dispatch(resetQuery());
    };
  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list" />}
        onClick={onOpenFilter}
      >
        Filters&nbsp;
      </Button>

      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate>
          <Drawer
            anchor="right"
            open={isOpenFilter}
            onClose={onCloseFilter}
            PaperProps={{
              sx: { width: 280, border: 'none', overflow: 'hidden' },
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ px: 1, py: 2 }}
            >
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                Filters
              </Typography>
              <IconButton onClick={onCloseFilter}>
                <Iconify icon="eva:close-fill" width={20} height={20} />
              </IconButton>
            </Stack>

            <Divider />

            <Scrollbar>
              <Stack spacing={3} sx={{ p: 3 }}>
                <div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Province
                      </InputLabel>
                      <Select
                        {...getFieldProps('province')}
                        value={values.province}
                        onChange={handleChange}
                      >
                        {FILTER_PROVINCE_OPTIONS.map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        District
                      </InputLabel>
                      <Select
                        {...getFieldProps('district')}
                        value={values.district}
                        onChange={handleChange}
                      >
                        {FILTER_DISTRICT_OPTIONS.map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div>
                  <Box sx={{ minWidth: 120 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <div>
                        <DatePicker
                          label="Date"
                          {...getFieldProps('date')}
                          value={values.date}
                          onChange={(value) => {
                            formatDate(value);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </div>
                    </LocalizationProvider>
                  </Box>
                </div>
                <div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <OutlinedInput
                      type="number"
                        placeholder="Age"
                        {...getFieldProps('age')}
                        value={values.age}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                </div>
              </Stack>
            </Scrollbar>
            <Box sx={{ p: 3 }}>
              <Button
                fullWidth
                size="large"
                type="submit"
                color="success"
                variant="outlined"
                onClick={() => {
                  dispatch(setQuery({ ...query, ...formik.values }));
                }}
              >
                Submit
              </Button>
            </Box>

            <Box sx={{ p: 1 }}>
              <Button
                fullWidth
                size="large"
                type="submit"
                color="inherit"
                variant="outlined"
                onClick={resetForm}
                startIcon={<Iconify icon="ic:round-clear-all" />}
              >
                Clear
              </Button>
            </Box>
          </Drawer>
        </Form>
      </FormikProvider>
    </>
  );
}
