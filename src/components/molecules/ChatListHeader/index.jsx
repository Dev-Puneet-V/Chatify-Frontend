import * as React from "react";
import {  
    Box
} from "@mui/material";
import { 
} from "@mui/icons-material";
import { 
    styled 
} from "@mui/system";

import {
    Image
} from '../../atoms';

import {
    StatusState,
    ImageStatus,
    ImageType
} from '../../../utils';

const Component = (props) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
            <Image
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt="Image not found"
                type={ImageType.PROFILE}
                statusState={StatusState.UNSEEN}
                status={ImageStatus.CHAT}
            />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        </Box>
    </Box>
    )
}

export default Component;