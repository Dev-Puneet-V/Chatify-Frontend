import { styled } from '@mui/material/styles';
import {
    Box
} from '@mui/material';

const ParentContainer = styled(Box)(({ theme }) => {

    return {
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'no-wrap'
    }
});
export {
    ParentContainer
}