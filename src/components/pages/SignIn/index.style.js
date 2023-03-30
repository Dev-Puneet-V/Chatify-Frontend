import {
    styled,
    Grid
} from '@mui/material';
const StyledGrid = styled(Grid)(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.customColors.grey,
  }));

export {
    StyledGrid
}