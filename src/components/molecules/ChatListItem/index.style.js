import { styled } from '@mui/material/styles';
import {
    Box, Typography
} from '@mui/material';

const ParentContainer = styled(Box)(({ theme, button }) => {
    return {
        width: '100%',
        maxWidth: theme.spacing(150),
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
        boxSizing: 'border-box',
        cursor: 'pointer',
        '&: hover': {
            backgroundColor: theme.palette.customColors.lightGrey
        }
    }
});

const NameComponent = styled(Typography)(({ theme }) => {
    return {
        color: theme.palette.customColors.darkGrey,
        fontWeight: 'semi-bold',
        fontSize: theme.spacing(4.5)
    }
});

const UserIndentifier = styled(Typography)(({ theme }) => {
    return {
        color: theme.palette.customColors.darkGrey,
        fontSize: theme.spacing(4)
    }
});

const MessageIdentifier = styled(Typography)(({ theme, status }) => {
    return {
        color: !status ? theme.palette.customColors.darkGrey : theme.palette.customColors.violet,
        fontSize: theme.spacing(3),
        marginLeft: theme.spacing(2),
        fontWeight: status && 'bold',
    }
});

const TimeIdentifier = styled(Typography)(({ theme }) => {
    return {
        color: theme.palette.customColors.darkGrey,
        fontWeight: 'semi-bold',
        fontSize: '4'
    }
});



const ChildrenContainer = styled(Box)(({ theme, status }) => {
    return {
        borderBottom: '1px solid lightgrey',
        padding: status && theme.spacing(2),
        paddingBottom : theme.spacing(8),
        height: '43%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginLeft: theme.spacing(2),
        backgroundColor: status && theme.palette.customColors.lightGreen,
    }
});

const MainTextHolderContainer = styled(Box)(({ theme }) => {
    return {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    }
})

const HeadingTextHolderContainer = styled(Box)(({ theme }) => {
    return {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export {
    ParentContainer,
    NameComponent,
    UserIndentifier,
    MessageIdentifier,
    TimeIdentifier,
    ChildrenContainer,
    MainTextHolderContainer,
    HeadingTextHolderContainer
}