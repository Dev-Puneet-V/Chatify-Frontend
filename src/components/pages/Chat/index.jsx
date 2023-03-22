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
    ChatSideBar,
    ContactInfo,
    Profile
} from '../../organisms';
import { EmptyChats } from "../../molecules";
const Component = (props) => {
    const [selectedChat, setSelectedChat] = useState();
    const [profileVisibility, setProfileVisibility] = useState(false);
    const [contactVisibility, setContactVisibility] = useState(false);
    const handleChatItemClick = (item) => {
        setSelectedChat(item);
    }
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <ThemeProvider theme={rootTheme}>
            <Grid container>
                {
                    (selectedChat === undefined || !isMobileView) && 
                    <Grid item xs={12} md={5} lg={3}>
                        {!profileVisibility && <ChatSideBar onChatItemClick={handleChatItemClick} setProfileVisibility={setProfileVisibility} /> }
                        { profileVisibility && <Profile collapsed={profileVisibility} setCollapsed={setProfileVisibility}/> }
                    </Grid>
                }
                <Grid item xs={12} md={7} lg={9}>
                    {selectedChat !== undefined && 
                        <ChatBox chat={selectedChat} onChatItemClick={handleChatItemClick} setContactVisibility={setContactVisibility}/>
                    }
                    {
                        selectedChat === undefined && !isMobileView &&
                        <EmptyChats />
                    }
                    <ContactInfo open={contactVisibility} onClose={setContactVisibility}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Component;
