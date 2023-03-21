import {
    Box
} from '@mui/material';

import {
    ChatHeader,
    ChatBoxBody
} from '../../molecules';

const Component = (props) => {
    const {
        onChatItemClick
    } = props;
    return (
        <Box
            display='flex'
            flexDirection='column'
        >
            <ChatHeader onChatItemClick={onChatItemClick}/> 
            <ChatBoxBody />
        </Box> 
    )
}

export default Component;