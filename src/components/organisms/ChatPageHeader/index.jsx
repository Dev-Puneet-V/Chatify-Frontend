import * as React from "react";
import {  
} from "@mui/material";
import { 
} from "@mui/icons-material";
import {
    ChatHeader,
    ChatListHeader
} from '../../molecules';

import {
    ParentContainer
} from './index.style'

const Component = (props) => {
    return (
        <ParentContainer>
            <ChatListHeader />
            <ChatHeader />
        </ParentContainer>
    )
}

export default Component;
