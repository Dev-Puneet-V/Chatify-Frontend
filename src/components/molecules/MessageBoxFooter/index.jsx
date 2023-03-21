import {useState} from 'react';
import {
    ParentContainer,
    EmojiContainer,
    StyledIcon
} from './index.style';
import {
    Icon
} from '../../atoms';
import {
    ChatInput
} from '../../molecules';
import {
    EmojiEmotionsOutlined,
    CloseOutlined
} from '@mui/icons-material';

import EmojiPicker from 'emoji-picker-react';
const Component = (props) => {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const handleEmojiClick = () => {
        console.log('clicked')
        setShowEmojiPicker(!showEmojiPicker);
    }

    return (
        <ParentContainer>
            {showEmojiPicker && 
                <EmojiContainer>
                    <EmojiPicker width='100%' />
                </EmojiContainer>
            }
            <StyledIcon onClick={handleEmojiClick}>
                {showEmojiPicker ? (
                    <Icon icon={<CloseOutlined  />}   />
                ) : (
                    <Icon icon={<EmojiEmotionsOutlined />} />
                )}
            </StyledIcon>

            <ChatInput />
        </ParentContainer>
    )
}

export default Component;