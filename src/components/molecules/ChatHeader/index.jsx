import * as React from "react";
import {  
    Box
} from "@mui/material";
import {
    Phone,
    Search,
    MoreVert,
    VideoCall
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
        ...rem
    } = props;
    return (
        <ParentContainer {...rem}>
        <StyledProfileContainer>
            <Image
                src={profille_url}
                alt="Image not found"
                type={ImageType.PROFILE}
                statusState={StatusState.SEEN}
                status={ImageStatus.STATUS}
            />
            <StyledName>
                {name}
            </StyledName>
        </StyledProfileContainer>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <StyledIcon>
                <Icon  button={true} icon={<Phone />} />
            </StyledIcon>
            <StyledIcon>
                <Icon icon={<VideoCall />} />
            </StyledIcon>
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