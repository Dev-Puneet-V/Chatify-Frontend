import { styled } from '@mui/material/styles';
import {
    Stack
} from '@mui/material';

const ParentContainer = styled(Stack)(({ theme }) => {

    return {
        overflowY: 'scroll',
        height: `80vh`,
    }
});

export {
    ParentContainer
}