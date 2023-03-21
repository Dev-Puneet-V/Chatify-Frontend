import {
    Box,
    styled,
    Typography
} from '@mui/material';
import {
    DoneAllOutlined
} from '@mui/icons-material';
import { MessageVariantType, MessageStatus } from '../../../utils';

const ParentContainer = styled(Box)(({ theme, variant }) => ({
    backgroundColor: variant === MessageVariantType.SENDER ? theme.palette.customColors.lightGreen : theme.palette.customColors.white,
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    // width: 'auto',
    maxWidth: '300px',
    margin: theme.spacing(1.5),
    height: 'auto',
    alignSelf: variant === MessageVariantType.SENDER ? 'flex-end' : 'flex-start',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
}));

const FooterContainer = styled(Box)(({ theme, variant }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
}));

const Time = styled(Typography)(({ theme }) => ({
    fontSize: theme.spacing(2.5),
    // position: 'absolute',
    // bottom: theme.spacing(0),
    // right: theme.spacing(0.8)
}));

const MessageStatusContainer = styled(DoneAllOutlined)(({theme, variant, messageStatus}) => ({
    color: messageStatus === MessageStatus.READ ? 'blue' : theme.palette.customColors.grey,
    display: variant === MessageVariantType.RECEIVER && 'none'
}));

export {
    ParentContainer,
    Time,
    FooterContainer,
    MessageStatusContainer
}