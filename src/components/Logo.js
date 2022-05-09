import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return (
    <RouterLink to="/">
      <Typography variant="h6" sx={{ fontWeight: 'bold', ...sx }}>
        Dashboard
      </Typography>
    </RouterLink>
  );
}
