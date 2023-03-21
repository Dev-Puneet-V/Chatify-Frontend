import { styled } from '@mui/material/styles';
import {
    Box
} from '@mui/material';
import { MessageVariantType } from '../../../utils';

const ParentContainer = styled(Box)(({ theme, variant }) => {

    return {
        backgroundColor: theme.palette.customColors.grey,
        // width: '100%',
        height: '88vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'auto',
        boxSizing: 'border-box',
    }
});


export {
    ParentContainer
}