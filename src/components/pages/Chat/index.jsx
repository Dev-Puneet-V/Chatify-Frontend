import {
    useState
} from "react";
import {  
    Grid, useMediaQuery, useTheme
} from "@mui/material";
import { 
} from "@mui/icons-material";

import { ThemeProvider } from '@mui/material/styles';
import {
    rootTheme
} from '../../../themes'

import {
    ChatBox,
    ChatSideBar
} from '../../organisms';
import { EmptyChats } from "../../molecules";
const Component = (props) => {
    const [selectedChat, setSelectedChat] = useState();
    const handleChatItemClick = (item) => {
        console.log(item)
        setSelectedChat(item);
    }
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <ThemeProvider theme={rootTheme}>
            {/* <ParentContainer>
                <ChatSideBar />
                <ChatBox />
            </ParentContainer>  */}
            <Grid container>
                {
                    (selectedChat === undefined || !isMobileView) && 
                    <Grid item xs={12} md={5} lg={3}>
                        <ChatSideBar onChatItemClick={handleChatItemClick} />
                    </Grid>
                }
                <Grid item xs={12} md={7} lg={9}>
                    {selectedChat !== undefined && 
                        <ChatBox chat={selectedChat} onChatItemClick={handleChatItemClick}/>
                    }
                    {
                        selectedChat === undefined && !isMobileView &&
                        <EmptyChats />
                    }
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Component;
