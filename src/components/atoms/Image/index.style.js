import { styled } from '@mui/material/styles';
import {
    Box
} from '@mui/material';
import {
    ImageStatus,
    StatusState
} from '../../../utils';

const ProfileImage = styled(Box)(({ theme, statusState, status }) => {

    return {
        height: status === ImageStatus.MAIN ? theme.spacing(40) : theme.spacing(10),
        width: status === ImageStatus.MAIN ? theme.spacing(40) : theme.spacing(10),
        padding: theme.spacing(0.75),
        margin: theme.spacing(1),
        borderRadius: '50%',
        backgroundColor: theme.palette.customColors.white,
        borderColor: statusState === StatusState.UNSEEN ?  theme.palette.customColors.mediumGreen : 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: theme.spacing(0.50),
        cursor: 'pointer',
        borderStyle: (status === ImageStatus.STATUS && statusState === StatusState.UNSEEN && 'dashed') || (statusState === StatusState.UNSEEN && 'solid')
    }
});


export {
    ProfileImage
}