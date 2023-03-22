import { styled } from '@mui/material/styles';
import {
    Collapse,
    Stack
} from '@mui/material';

const StyledCollapse = styled(Collapse)(({ theme, collapsed}) => {
    return {
        overflow: 'hidden',
        transition: 'width 0.5s ease-out',
        width: collapsed ? '0' : '100%'
    }
});

const ParentContainer = styled(Stack)(({ theme }) => {

    return {
        overflowY: 'scroll',
        height: `70vh`
    }
});

export {
    ParentContainer,
    StyledCollapse
}