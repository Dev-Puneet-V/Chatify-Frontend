import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  IconButton,
  Divider,
  Modal,
  Typography,
  Drawer,
  useMediaQuery,
  theme
} from '@mui/material';
import {
    Image
} from '../../atoms';

import {
    ImageType,
    ImageStatus,
    StatusState
} from '../../../utils';
import {
    CloseIcon,
    ParentContainer,
    HeaderContainer,
    MainContainer,
    ItemContainer
} from './index.style';
import { useTheme } from '@emotion/react';

const ContactInfo = (props) => {
  const {
    profile_url="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    open,
    onClose
  } = props;
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Drawer
      anchor='right'
      open={open}
      onClose={onClose}
    >
        <ParentContainer
            display='flex'
            flexDirection='column'
            height='100vh'
            width={`${isMobileView ? '100vw' : '500px'}`}
        >
            <HeaderContainer
                display='flex'
                alignItems='center'
                height='11vh'
                width='100%'
            >
                <CloseIcon
                    onClick={() => onClose(false)}
                />
                <Typography color='grey' sx={{fontSize: '20px'}}>
                    Contact info
                </Typography>
            </HeaderContainer>
            <MainContainer
                height='35vh'
                width='100%'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
            >
                <Image
                    src={profile_url}
                    alt="Image not found"
                    type={ImageType.PROFILE}
                    statusState={StatusState.NO_STATUS}
                    status={ImageStatus.MAIN}
                />
                <Typography variant='h4'>
                    Ruseel Huck
                </Typography>
                <Typography color='grey'>
                    +91 9517613776
                </Typography>
            </MainContainer>

            <ItemContainer
                height='7vh'
                width='100%'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
            >
                <Typography color='lightGrey'>
                    About
                </Typography>
                <Typography color='grey'>
                    Student
                </Typography>
            </ItemContainer>

            <ItemContainer
                height='7vh'
                width='100%'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
            >
                <Typography color='lightGrey'>
                    Email Address
                </Typography>
                <Typography color='grey'>
                    chatify.product@gmail.com
                </Typography>
            </ItemContainer>

        </ParentContainer>
    </Drawer>
  );
};

export default ContactInfo;
