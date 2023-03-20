import {
    ChatHeader
} from '../../molecules';

const Component = (props) => {
    const {
        onChatItemClick
    } = props;
    return (
        <>
            <ChatHeader onChatItemClick={onChatItemClick}/> 
        </> 
    )
}

export default Component;