/* 
    props are : src, alt, sx, statusState, 
    status, type, onClick
*/

import { useMemo } from 'react';
import {
    Box
} from '@mui/material';
import {
    ProfileImage
} from './index.style.js';

import {
    ImageType
} from '../../../utils';

const Component = (props) => {

    const memoizedImageProps = useMemo(() => ({ ...props }), [props]);

    return (
        <>
            { props.type === ImageType.PROFILE &&
                    <ProfileImage
                        component="img"
                        {...memoizedImageProps}
                        
                />
            }
            {
                props.type !== ImageType.PROFILE && 
                    <Box
                        component='img'
                        {...memoizedImageProps}
                    />
            }
        </>
    )
}

export default Component;