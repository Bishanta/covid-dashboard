import { filter } from 'lodash';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import {
  UserListHead,
  UserListToolbar,
  UserMoreMenu,
} from '../sections/@dashboard/patient';
import { useSelector, useDispatch } from 'react-redux';
//
 import COVIDPOSITIVE from '../_mocks_/covidpositive';
import { setCovidPositive } from 'src/features/covidPositiveSlice';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'sn', label: 'SN.', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'age', label: 'Age', alignRight: false },
  { id: 'sex', label: 'Sex', alignRight: false },
  { id: 'province', label: 'Province', alignRight: false },
  { id: 'district', label: 'District', alignRight: false },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_patient) =>
        _patient.province.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _patient.district.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        _patient.sn.toLowerCase().indexOf(query.toLowerCase()) !== -1 
        || _patient.date.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function CovidPositive() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('district');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(30);
  // const [covidPositive, setCovidPositive] = useState([]);
  const dispatch = useDispatch();
  const covidPositive = useSelector((state) => state.covidPositiveSlice.value);
  //Raw_COVID19RTPCRPositiveDatabase.json
  //api.jsonstorage.net/v1/json/21cbbd27-2a8b-4fe4-ab0d-086108e05ac4/6ec92eaa-9aca-4464-9ceb-71cf44b753b6?apiKey=415319d7-d3ad-4f2a-bd34-bb5bf64d5f93
  // useEffect(() => {
  //   axios
  //     .get(
  //       'http://api.jsonstorage.net/v1/json/21cbbd27-2a8b-4fe4-ab0d-086108e05ac4/6ec92eaa-9aca-4464-9ceb-71cf44b753b6?apiKey=415319d7-d3ad-4f2a-bd34-bb5bf64d5f93'
  //     )
  //     .then((res) => {
  //       const result = res.data;
  //       dispatch(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [covidPositive]);
  console.log(covidPositive);
  useEffect(() => {
    dispatch(setCovidPositive(COVIDPOSITIVE));
  }, [dispatch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = covidPositive.map((n) => n.sn);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  //pass the unique id,(sn) AS A STRING
  const handleClick = (event, sn) => {
    const selectedIndex = selected.indexOf(sn);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, sn);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - covidPositive.length) : 0;

  const filteredDistricts = applySortFilter(
    covidPositive,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filteredDistricts.length === 0;

  return (
    <Page title="COVID Positive Raw Data | Nepal">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            COVID POSITIVE Raw Data
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Patient
          </Button>
        </Stack>

        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table size="small" stickyHeader>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={covidPositive.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredDistricts
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { sn, date, age, sex, province, district } = row;
                      const isItemSelected = selected.indexOf(sn) !== -1;
                      return (
                        <TableRow
                          hover
                          key={sn}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, sn)}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            {sn}
                          </TableCell>
                          <TableCell align="left">{date}</TableCell>
                          <TableCell align="left">{age}</TableCell>
                          <TableCell align="left">{sex}</TableCell>
                          <TableCell align="left">{province}</TableCell>
                          <TableCell>{district}</TableCell>
                          <TableCell align="right">
                            <UserMoreMenu />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[30, 60, 90]}
            component="div"
            count={covidPositive.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
