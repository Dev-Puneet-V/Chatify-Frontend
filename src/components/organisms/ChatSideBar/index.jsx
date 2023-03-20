import {
    ProfileSearchHeader,
    ChatSideBarBody,
    ChatListHeader
} from '../../molecules';

import {
    Box,
    Stack
} from '@mui/material';

const Component = (props) => {
    const {
        onChatItemClick
    } = props;
    return (
        <Stack
            direction='column'
            // spacing={1}
            justifyContent='space-between'
            alignItems='center'
            height='96vh'
        >
        <ChatListHeader />
          <ProfileSearchHeader />
            <ChatSideBarBody onChatItemClick={onChatItemClick}/>
        </Stack>       
    )
}

export default Component;