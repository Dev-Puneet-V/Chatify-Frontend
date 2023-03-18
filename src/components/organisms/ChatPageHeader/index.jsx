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
    Box, 
    styled 
} from "@mui/system";

const Component = (props) => {
    return (
        <>
            <ChatHeader />
            <ChatListHeader />   
        </>
    )
}

export default Component;
