import * as React from "react";
import {  
    Box,
    useTheme,
    useMediaQuery
} from "@mui/material";
import {
    ArrowBack,
    Search,
    MoreVert
 } from '@mui/icons-material';

import {
    Image,
    Icon,
} from '../../atoms';
import {
    ParentContainer,
    StyledIcon,
    StyledProfileContainer,
    StyledName
} from './index.style'
import {
    StatusState,
    ImageStatus,
    ImageType
} from '../../../utils';

const Component = (props) => {
    const {
        profille_url = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        name = 'Puneet Verma',
        onChatItemClick,
        setContactVisibility,
        ...rem
    } = props;
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
    const backButtonHandler = () => {
        onChatItemClick(undefined);
    }
    return (
        <ParentContainer {...rem}>
        <StyledProfileContainer>
            <Image
                src={profille_url}
                alt="Image not found"
                type={ImageType.PROFILE}
                statusState={StatusState.SEEN}
                status={ImageStatus.STATUS}  
                onClick={() => setContactVisibility(true)}
            />
            <StyledName>
                {name}
            </StyledName>
        </StyledProfileContainer>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            
            {isMobileView && <StyledIcon>
                <Icon  button={true} icon={<ArrowBack />} onClick={backButtonHandler}/>
            </StyledIcon>
            }
            <StyledIcon>
                <Icon icon={<Search />} />
            </StyledIcon>
            <StyledIcon>
                <Icon icon={<MoreVert />} />
            </StyledIcon>
        </Box>
    </ParentContainer>
    )
}

export default Component;