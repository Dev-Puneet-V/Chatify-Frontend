import {
    Box,
    Typography
} from '@mui/material';

import {
    Image
} from '../../atoms';

import {
    ImageType,
    StatusState,
    ImageStatus
} from '../../../utils';

import {
    ParentContainer,
    NameComponent,
    TimeIdentifier,
    MessageIdentifier,
    UserIndentifier,
    ChildrenContainer,
    MainTextHolderContainer,
    HeadingTextHolderContainer
} from './index.style';

const Component = (props) => {

    const {
        data,
        profile_url,
        name,
        lastMessageInfo, // user name, phone number, time, message,
        onClick
    } = props;

    return (
        <ParentContainer display="flex" justifyContent="space-end" onClick={onClick}>
            <Image
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                alt="Image not found"
                type={ImageType.PROFILE}
                statusState={StatusState.UNSEEN}
                status={ImageStatus.STATUS}
            />
            <ChildrenContainer>
                <HeadingTextHolderContainer>
                    <NameComponent>
                        Designers Corner
                    </NameComponent>
                    <TimeIdentifier>
                        3:11 pm
                    </TimeIdentifier>
                </HeadingTextHolderContainer>
                <MainTextHolderContainer>
                    <UserIndentifier>
                        +2348128225157:
                    </UserIndentifier>
                    <MessageIdentifier status={true}>
                        That’s a great news....
                    </MessageIdentifier>
                </MainTextHolderContainer>
            </ChildrenContainer>
            
        </ParentContainer>
    )
}

export default Component;