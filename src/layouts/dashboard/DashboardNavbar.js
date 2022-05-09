import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, FormControl, InputLabel, Select, MenuItem, TextField, OutlinedInput, ListItemText, Checkbox } from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
// components
import Iconify from '../../components/Iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
// import Scrollbar from 'src/components/Scrollbar';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;
export const FILTER_PROVINCE_OPTIONS = [
  'Province 1',
  'Madhesh',
  'Bagmati',
  'Gandaki',
  'Lumbini',
  'Karnali',
  'Sudurpaschim',
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  position: 'absolute',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
  formik: PropTypes.object,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  const formik = useFormik({
    initialValues: {
      date:'',
      province:[],  
  },
});

   const { values, getFieldProps, handleChange } = formik;
  
  const formatDate = (date) => {
    var d = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(
      -2
    )}-${('0' + date.getDate()).slice(-2)}`;
    formik.setFieldValue('date', d);
  };                       

  return (
    <RootStyle>
      <ToolbarStyle>
        <IconButton
          onClick={onOpenSidebar}
          sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        <Searchbar />
        <Box sx={{ flexGrow: 1 }}>
          <FormikProvider value={formik}>
            <Form autoComplete="off" noValidate>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-around"
              >
                <Stack>
                  <Box sx={{ minWidth: 500 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Province
                      </InputLabel>
                      <Select
                        {...getFieldProps('province')}
                        value={values.province}
                        onChange={handleChange}
                        multiple
                        input={<OutlinedInput label="Province" />}
                        renderValue={(selected) => selected.slice().join(', ')}
                        MenuProps={MenuProps}
                      >
                        {FILTER_PROVINCE_OPTIONS.map((item) => (
                          <MenuItem key={item} value={item}>
                            <Checkbox checked={values.province.indexOf(item) > -1} />
                            <ListItemText primary={item} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Stack>
                <Stack>
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
                </Stack>
              </Stack>
            </Form>
          </FormikProvider>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
