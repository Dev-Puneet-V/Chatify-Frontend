import { styled } from '@mui/material/styles';
import {
    Typography
} from '@mui/material';

const StyledTypography = styled(Typography)(({ theme }) => {

    return {
        color: theme.palette.customColors.lightDarkGrey
    }
});


export {
    StyledTypography
}