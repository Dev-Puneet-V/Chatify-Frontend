import { styled } from '@mui/material/styles';
import {
    Box
} from '@mui/material';

const StyledIcon = styled(Box)(({ theme, button }) => {

    return {
       '& svg': {
            color: theme.palette.customColors.lightDarkGrey,
            cursor: button && 'pointer',
            padding: theme.spacing(1),
            margin: theme.spacing(1),
            '&: hover': {
                backgroundColor: button && theme.palette.customColors.white,
                borderRadius: button && '50%',
            }
        }
    }
});


export {
    StyledIcon
}