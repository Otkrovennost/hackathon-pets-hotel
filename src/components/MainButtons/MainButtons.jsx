import React from 'react';

import { Box } from '@material-ui/core';

import { Button } from '@material-ui/core';

const SuccessButton = ({
    disabled,
    onClick,
    label,
}) => {
    return (
        <Button
            size="large"
            variant="contained"
            color="secondary"
            style={{textTransform: 'none', minWidth: '200px'}}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </Button>
    )
};

const MainButtons = ({
    successDisabled,
    successOnClick,
    successLabel,
}) => {
  return (
    <Box style={{display: 'flex'}}>
      <SuccessButton
        disabled={successDisabled}
        onClick={successOnClick}
        label={successLabel}
      />
    </Box>
  )
};

export default MainButtons;