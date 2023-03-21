import { styled } from '@mui/material/styles';
import {
    Box, Typography
} from '@mui/material';

const ParentContainer = styled(Box)(({ theme }) => {

    return {

        width: '100%',
        // maxWidth: theme.spacing(150),
        height: '11vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.palette.customColors.lightGrey,
        padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
        boxSizing: 'border-box',
    }
});

const StyledIcon = styled(Box)(({ theme }) => {
    return {
        margin: theme.spacing(2),
        position: 'relative',
        cursor: 'pointer'
    }
})

const StyledStatusIcon = styled(Box)(({ theme }) => {
    return {
        borderRadius: '50%',
        height: theme.spacing(3.5),
        width: theme.spacing(3.5),
        marginBottom: theme.spacing(1),
        borderColor: theme.palette.customColors.lightDarkGrey,
        borderStyle: 'dashed',
        cursor: 'pointer'
    }
})

const GreenDot = styled(Box)(({ theme }) => {
    return {
      position: 'absolute',
      top: '-2px', 
      right: '1px',
      backgroundColor: theme.palette.customColors.darkLightGreen, 
      width: '9px',
      height: '9px',
      borderRadius: '50%',
    };
  });

  const StyledProfileContainer = styled(Box)(({ theme }) => {
    
    return {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: theme.spacing(55),
        color: theme.palette.customColors.lightDarkGrey
    }
})

const StyledName = styled(Typography)(({ theme }) => {

    return {
        fontWeight: 'bold',
        color: theme.palette.customColors.darkGrey,
        marginLeft: theme.spacing(2),
        opacity: '0.75'
    }
})

export {
    ParentContainer,
    StyledIcon,
    GreenDot,
    StyledStatusIcon,
    StyledProfileContainer,
    StyledName
}