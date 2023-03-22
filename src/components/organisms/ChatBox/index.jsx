import {
    Box
} from '@mui/material';

import {
    ChatHeader,
    ChatBoxBody
} from '../../molecules';

const Component = (props) => {
    const {
        onChatItemClick,
        setContactVisibility
    } = props;
    return (
        <Box
            display='flex'
            flexDirection='column'
        >
            <ChatHeader onChatItemClick={onChatItemClick} setContactVisibility={setContactVisibility}/> 
            <ChatBoxBody />
        </Box> 
    )
}

export default Component;