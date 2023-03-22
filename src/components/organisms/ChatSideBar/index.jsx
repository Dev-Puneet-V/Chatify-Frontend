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
        onChatItemClick,
        setProfileVisibility
    } = props;
    return (
        <Stack
            direction='column'
            // spacing={1}
            justifyContent='space-between'
            alignItems='center'
            height='96vh'
        >
        <ChatListHeader setProfileVisibility={setProfileVisibility}/>
          <ProfileSearchHeader />
            <ChatSideBarBody onChatItemClick={onChatItemClick}/>
        </Stack>       
    )
}

export default Component;