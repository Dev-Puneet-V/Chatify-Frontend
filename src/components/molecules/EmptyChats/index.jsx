import {
    Typography,
    Box
} from '@mui/material';
import {HttpsOutlined} from '@mui/icons-material';
import { Image } from '../../atoms';
import { ParentContainer } from './index.style';
import {
    rootTheme
} from '../../../themes';

const Component = (props) => {
    return (
        <ParentContainer
            display="flex"
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            height='100vh'
            width='100%'
        >
            
            <Image 
                src='https://res.cloudinary.com/dpv6poha8/image/upload/v1678960926/logo-no-background_difojv.svg'
                height='20vh'
                width='20vh'
            />
            <Box
                display='flex'
                flexDirection='row'
                alignItems='end'
                justifyContent='space-between'
            >
                <HttpsOutlined />
                <Typography>
                    All chats are end to end encrypted
                </Typography>
            </Box>
        </ParentContainer>
    )
}

export default Component;