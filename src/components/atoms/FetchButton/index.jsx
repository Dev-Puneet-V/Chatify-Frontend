import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { Check, Clear } from '@mui/icons-material';

const Component = ({ onClick, isLoading, isError, handleFailed, ...props }) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = () => {
    setIsFetching(true);
    onClick()
      .then(() => setIsFetching(false))
      .catch(() => {
        setIsFetching(false);
        handleFailed();
      });
  };

  const handleRetry = () => {
    setIsFetching(true);
    handleFailed()
      .finally(() => setIsFetching(false));
  };

  return (
    <Button
      {...props}
      variant="contained"
      color={isError ? 'error' : 'primary'}
      disabled={isLoading || isFetching}
      onClick={isError ? handleRetry : handleClick}
      startIcon={
        isFetching ? (
          <CircularProgress color="inherit" size={20} />
        ) : !isError ? (
          <></>
        ) : (
          <Check />
        )
      }
    >
      {isLoading ? 'Loading...' : isError ? 'Retry' : props.children}
    </Button>
  );
}

export default Component;
