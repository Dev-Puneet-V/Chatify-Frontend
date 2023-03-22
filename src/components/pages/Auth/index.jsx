import React from 'react';
import { GoogleLoginButton, GithubLoginButton, TwitterLoginButton } from 'react-social-login-buttons';
import { Image } from '../../atoms';
import {
  StyledGrid
} from './index.style';
import {
  Grid
} from '@mui/material';
const Component = (props) => {

  const {
    setAuth
  } = props
  const handleGoogleAuth = () => {
    // Handle Google authentication
    setAuth()
  };

  const handleGithubAuth = () => {
    // Handle Github authentication
    setAuth()
  };

  const handleTwitterAuth = () => {
    // Handle Twitter authentication
    setAuth()
  };

  return (
    <StyledGrid container>
       <Image 
            src='https://res.cloudinary.com/dpv6poha8/image/upload/v1678960926/logo-no-background_difojv.svg'
            height='20vh'
            width='20vh'
        />
      <Grid item xs={12} sm={6} md={4}>
        <GoogleLoginButton onClick={handleGoogleAuth} />
        <GithubLoginButton onClick={handleGithubAuth}/>
        <TwitterLoginButton onClick={handleTwitterAuth} />
      </Grid>
    </StyledGrid>
  );
};

export default Component;