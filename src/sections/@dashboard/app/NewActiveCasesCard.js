// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
//
import Iconify from '../../../components/Iconify';
// import COVIDPOSITIVE from '../../../_mocks_/covidpositive';

import { useSelector } from 'react-redux';
import { fDateMonth } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter,
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
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.info.dark,
    0
  )} 0%, ${alpha(theme.palette.info.dark, 0.24)} 100%)`,
}));

// ----------------------------------------------------------------------


export default function NewActiveCasesCard() {
 
  const NewCaseArray = useSelector((state) => state.NumberOfActiveCase.value);
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify
          icon="arcticons:synology-active-insight"
          width={24}
          height={24}
        />
      </IconWrapperStyle>
      {NewCaseArray.map((item) =>
        item.data
          .filter(
            (item) => item.x === fDateMonth(Date.now() - 1000 * 60 * 60 * 24)
          )
          .map((item, index) => {
            return (
              <Typography variant="h4" key={index}>
                {item.y}
              </Typography>
            );
          })
      )}

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        New Active <br /> Cases
      </Typography>
    </RootStyle>
  );
}
