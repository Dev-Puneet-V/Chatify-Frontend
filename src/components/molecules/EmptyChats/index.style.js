import {
    Box,
    styled
} from '@mui/material';

const ParentContainer = styled(Box)(({ theme }) => {
    return {
        backgroundColor: theme.palette.customColors.grey
    }
});

export {
    ParentContainer
}