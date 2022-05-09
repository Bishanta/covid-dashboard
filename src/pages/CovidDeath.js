import { filter } from 'lodash';
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
//
import COVIDDEATH from '../_mocks_/coviddeath';
import{useSelector,useDispatch} from 'react-redux';
import { setCovidDeath } from '../features/covidDeathSlice';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'casenum', label: 'Case No.', alignRight: false },
  { id: 'date_death', label: 'Death Date', alignRight: false },
  { id: 'date_positive', label: 'Positive Date', alignRight: false },
  { id: 'age', label: 'Age', alignRight: false },
  { id: 'sex', label: 'Sex', alignRight: false },
  { id: 'province', label: 'Province', alignRight: false },
  { id: 'district', label: 'District', alignRight: false },
  { id: 'address', label: 'Address', alignRight: false },
  { id: 'death_place', label: 'Death Place', alignRight: false },
  { id: 'commorbidity', label: 'Commorbidity', alignRight: false },
  { id: 'remarks', label: 'Remarks', alignRight: false },
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
        _patient.casenum.toLowerCase().indexOf(query.toLowerCase()) !== -1 
        || _patient.date_death.toLowerCase().indexOf(query.toLowerCase()) !== -1
        || _patient.date_positive.toLowerCase().indexOf(query.toLowerCase()) !== -1
        || _patient.address.toLowerCase().indexOf(query.toLowerCase()) !== -1
        
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function CovidDeath() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('district');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(30);
  const dispatch = useDispatch();
  const covidDeathData = useSelector((state) => state.covidDeathSlice.value);

  useEffect(() => {
    dispatch(setCovidDeath(COVIDDEATH));
  }, [dispatch]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = covidDeathData.map((n) => n.casenum);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  //pass the unique id,(case) AS A STRING
  const handleClick = (event, casenum) => {
    const selectedIndex = selected.indexOf(casenum);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, casenum);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - covidDeathData.length) : 0;

  const filteredDistricts = applySortFilter(
    covidDeathData,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filteredDistricts.length === 0;

  return (
    <Page title="COVID Death Raw Data | Nepal">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            COVID DEATH Raw Data
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
              <Table
                stickyHeader
                size="small"
                aria-label="sticky table"
              >
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={covidDeathData.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredDistricts
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        casenum,
                        date_death,
                        date_positive,
                        age,
                        sex,
                        province,
                        district,
                        address,
                        death_place,
                        commorbidity,
                        remarks,
                      } = row;
                      const isItemSelected = selected.indexOf(casenum) !== -1;
                      return (
                        <TableRow
                          hover
                          key={casenum}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, casenum)}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            {casenum}
                          </TableCell>
                          <TableCell align="left">{date_death}</TableCell>
                          <TableCell align="left">{date_positive}</TableCell>
                          <TableCell align="left">{age}</TableCell>
                          <TableCell align="left">{sex}</TableCell>
                          <TableCell align="left">{province}</TableCell>
                          <TableCell>{district}</TableCell>
                          <TableCell>{address}</TableCell>
                          <TableCell>{death_place}</TableCell>
                          <TableCell>{commorbidity}</TableCell>
                          <TableCell>{remarks}</TableCell>
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
            count={covidDeathData.length}
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
