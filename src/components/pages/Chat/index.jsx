import * as React from "react";
import {  
} from "@mui/material";
import { 
} from "@mui/icons-material";

import { ThemeProvider } from '@mui/material/styles';
import {
    rootTheme
} from '../../../themes'

import {
    ChatPageHeader
} from '../../organisms';


const Component = (props) => {
    return (
        <ThemeProvider theme={rootTheme}>
            <ChatPageHeader />
        </ThemeProvider>
    )
}

export default Component;
