import {
    Typography
} from '@mui/material';
import { 
    ParentContainer,
    Time,
    FooterContainer,
    MessageStatusContainer
} from './index.style';
import {
    DoneOutlined
} from '@mui/icons-material';
import { MessageStatus, MessageVariantType } from '../../../utils';

const Component = (props) => {
    const {
        text,
        time,
        variant, // variants are of 2 two type receiver, sender
        messageStatus
    } = props;
    console.log(time)
    return (
        <ParentContainer
            variant={variant}
        >
            <Typography>
                {text}
            </Typography>
            <FooterContainer>
                {
                    messageStatus !== MessageStatus.UNDELIVERED && variant === MessageVariantType.SENDER &&
                    <MessageStatusContainer variant={variant} messageStatus={messageStatus}/>
                }
                {   messageStatus === MessageStatus.UNDELIVERED && variant === MessageVariantType.SENDER &&
                    <DoneOutlined />
                }
                <Time>
                    {
                        new Intl.DateTimeFormat('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        }).format(time).toLocaleLowerCase()
                    }
                </Time>
            </FooterContainer>
            
        </ParentContainer>
    )
}

export default Component;