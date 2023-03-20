import { Stack } from '@mui/material';
import { useRef, useState } from 'react';
import {
    ChatListItem
} from '../../molecules';
import {
    ParentContainer
} from './index.style';
const Component = (props) => {
    
    const {
        onChatItemClick
    } = props;

    const stackRef = useRef(null);
    const [lastScrollPosition, setLastScrollPosition] = useState(0);
    const chatList = [{
        'name': 1
    }, {
        'name': 2
    }, {
        'name': 3
    }, {
        'name': 4
    }, {
        'name': 5
    }, {
        'name': 6
    },{
        'name': 7
    }, {
        'name': 1
    }, {
        'name': 2
    }, {
        'name': 3
    }, {
        'name': 4
    }, {
        'name': 5
    }, {
        'name': 6
    },{
        'name': 7
    }, {
        'name': 1
    }, {
        'name': 2
    }, {
        'name': 3
    }, {
        'name': 4
    }, {
        'name': 5
    }, {
        'name': 6
    },{
        'name': 7
    }, {
        'name': 1
    }, {
        'name': 2
    }, {
        'name': 3
    }, {
        'name': 4
    }, {
        'name': 5
    }, {
        'name': 6
    },{
        'name': 7
    }, {
        'name': 1
    }, {
        'name': 2
    }, {
        'name': 3
    }, {
        'name': 4
    }, {
        'name': 5
    }, {
        'name': 6
    },{
        'name': 7
    }, {
        'name': 1
    }, {
        'name': 2
    }, {
        'name': 3
    }, {
        'name': 4
    }, {
        'name': 5
    }, {
        'name': 6
    },{
        'name': 7
    }]

    return (
        <ParentContainer
            direction='column'
            // spacing={1}
            justifyContent='flex-start'
            alignItems='center'
            height='83vh'
            width='100%'
        >
            {
                chatList?.map((currData, index) => {
                                        return (
                        <ChatListItem data={currData} onClick={() => {
                                onChatItemClick(index);
                                console.log(index)
                            }
                        }
                        />
                    )
                })
            }
        </ParentContainer>       
    )
}

export default Component;