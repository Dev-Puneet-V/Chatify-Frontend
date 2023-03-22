import {
    ParentContainer,
    Header,
    BackIcon,
    ImageContainer,
    InfoContainer,
    WarningContainer,
    StyledCollapse
} from './index.style';
import {
    Typography,
    Box,
    Collapse
} from '@mui/material';
import {
    Create
} from '@mui/icons-material';
import {
    Image
} from '../../atoms';
import {
    ImageType,
    ImageStatus
} from '../../../utils';

const Component = (props) => {
    const {
        profille_url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        collapsed=true,
        setCollapsed
    } = props;
    return (
        <StyledCollapse orientation="horizontal" in={collapsed} collapsedSize={'100%'}>
            <ParentContainer>
            <Header>
                <BackIcon onClick={() => setCollapsed(false)}/>
                <Typography color='white' variant='h4'>
                    Profile
                </Typography>
            </Header>
            <ImageContainer>
                <Image
                    src={profille_url}
                    alt="Image not found"
                    type={ImageType.PROFILE}
                    status={ImageStatus.MAIN}
                /> 
            </ImageContainer>
            <InfoContainer>
                <Typography color='green'>
                        Your name
                </Typography>
                <Box
                    display='flex'
                    justifyContent='space-between'
                    width='100%'
                >
                    <Typography>
                        Puneet Verna
                    </Typography>
                    <Create />
                </Box>
            </InfoContainer>
            <WarningContainer >
                This is not your username or pin. This name will be visible to your WhatsApp contacts.
            </WarningContainer>
            <InfoContainer>
                <Typography color='green'>
                        About
                </Typography>
                <Box
                    display='flex'
                    justifyContent='space-between'
                    width='100%'
                >
                    <Typography>
                        Puneet Verna
                    </Typography>
                    <Create/>
                </Box>
            </InfoContainer>
        </ParentContainer>
        </StyledCollapse>
    )
}

export default Component;