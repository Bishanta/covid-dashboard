// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
//
import Iconify from '../../../components/Iconify';
import COVIDPOSITIVE from '../../../_mocks_/covidpositive';

import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.warning.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
    theme.palette.warning.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------



export default function AppItemOrders() {
  const [newPositiveNumber, setNewPositiveNumber] = useState();

  useEffect(() => {
    setNewPositiveNumber(COVIDPOSITIVE.length);
  }, []);

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify
          icon="healthicons:chart-infected-increasing-negative"
          width={24}
          height={24}
        />
      </IconWrapperStyle>
      <Typography variant="h4">{fShortenNumber(newPositiveNumber)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Patients <br/> Infected
      </Typography>
    </RootStyle>
  );
}