import {
    Box,
    styled
} from '@mui/material';
import {
    EmojiEmotionsOutlined,
    CloseOutlined
} from '@mui/icons-material';
const ParentContainer = styled(Box)(({ theme }) => {
    return {
        backgroundColor: theme.palette.customColors.lightGrey,
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        left: 0,
        bottom: 0,
        right: 0,
        padding: theme.spacing(2)
    }
});

  const StyledIcon = styled(Box)(({ theme }) => {
    return {
        margin: theme.spacing(2),
        position: 'relative',
        cursor: 'pointer'
    }
})
  
const EmojiContainer = styled(Box)(({ theme }) => {
    return {
        backgroundColor: theme.palette.customColors.lightGrey,
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        bottom: '105%',
        right: 0,
        padding: theme.spacing(2)
    }
});

export {
    ParentContainer,
    EmojiContainer,
    StyledIcon
}