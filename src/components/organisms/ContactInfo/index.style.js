import { styled } from '@mui/material/styles';
import {
    Box
} from '@mui/material';
import { Close } from '@mui/icons-material';


const ParentContainer = styled(Box)(({theme}) => {
   return {
        backgroundColor: theme.palette.customColors.lightGrey,
   }
})

const HeaderContainer = styled(Box)(({theme}) => {
    return {
        backgroundColor: theme.palette.customColors.lightGrey,
        padding: '1.5vh 3vw'
    }
});

const MainContainer = styled(Box)(({theme}) => {
    return {
        backgroundColor: theme.palette.customColors.white,
        marginBottom: '1vh'
    }
});

const ItemContainer = styled(Box)(({theme}) => {
    return {
        backgroundColor: theme.palette.customColors.white,
        marginBottom: '1vh',
        padding: '1.5vh 3vw'
    }
})

const CloseIcon = styled(Close)(({theme}) => {
    return {
            color: theme.palette.customColors.grey,
            marginRight: '2vw',
            fontSize: theme.spacing(8),
            fontWeight: 'bold',
            cursor: 'pointer'
    }
});

export {
    CloseIcon,
    ParentContainer,
    HeaderContainer,
    MainContainer,
    ItemContainer
}