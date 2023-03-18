import * as React from "react";
import {  
    Box
} from "@mui/material";
import {
    PeopleAlt,
    MoreVert,
    Message
 } from '@mui/icons-material';

import {
    Image,
    Icon
} from '../../atoms';
import {
    ParentContainer,
    StyledIcon,
    GreenDot,
    StyledStatusIcon
} from './index.style'
import {
    StatusState,
    ImageStatus,
    ImageType
} from '../../../utils';

const Component = (props) => {
    return (
        <ParentContainer>
        <Box>
            <Image
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt="Image not found"
                type={ImageType.PROFILE}
                statusState={StatusState.UNSEEN}
                status={ImageStatus.STATUS}
            />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <StyledIcon>
                <Icon  button={true} icon={<PeopleAlt />} />
            </StyledIcon>
            <StyledIcon>
                <Icon 
                    icon={
                        <>
                            <StyledStatusIcon />
                            <GreenDot />
                        </>
                    } 
                />
            </StyledIcon>
            <StyledIcon>
                <Icon icon={<Message />} />
            </StyledIcon>
            <StyledIcon>
                <Icon icon={<MoreVert />} />
            </StyledIcon>
        </Box>
    </ParentContainer>
    )
}

export default Component;