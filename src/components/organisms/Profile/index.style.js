import { styled } from '@mui/material/styles';
import {
    Box, Typography, Collapse
} from '@mui/material';
import {
    KeyboardBackspaceOutlined
} from '@mui/icons-material';

const ParentContainer = styled(Box)(({ theme }) => {

    return {

        width: '100%',
        // maxWidth: theme.spacing(100),
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.customColors.lightGrey,
        boxSizing: 'border-box',
    }
});

// profile header

const Header = styled(Box)(({ theme }) => {
    return {
        width:'100%',
        height: '15vh',
        backgroundColor: 'darkGreen',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    }
})


const BackIcon = styled(KeyboardBackspaceOutlined)(({ theme }) => {
    return {
        color: theme.palette.customColors.white,
        fontSize: theme.spacing(10),
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(2),
        cursor: 'pointer'
    }
});

const ImageContainer = styled(Box)(({ theme }) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`
    }
})

const InfoContainer = styled(Box)(({ theme }) => {
    return {
        height: '7vh',
        backgroundColor: theme.palette.customColors.white,
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'space-between',
        padding: `${theme.spacing(3)} ${theme.spacing(3)}`
    }
})

const WarningContainer = styled(Typography)(({ theme }) => {
    return {
        height: '8vh',
        width: '90%',
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
        color: theme.palette.customColors.grey,
        display: 'flex',
        alignItems: 'center'
    }
});

const StyledCollapse = styled(Collapse)(({ theme, collapsed}) => {
    return {
        overflow: 'hidden',
        transition: 'width 0.5s ease-out',
        width: collapsed ? '0' : '100%'
    }
});


export {
    ParentContainer,
    Header,
    BackIcon,
    ImageContainer,
    InfoContainer,
    WarningContainer,
    StyledCollapse
}