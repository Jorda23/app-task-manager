import React from 'react';
import styled, { css } from 'styled-components';
import { IconButton, SvgIcon } from '@mui/material';
import { IconsTypes, types } from '../../shared/iconsTypes/icons';

const StyledButton = styled(IconButton)`
  /* Base styles */
  && {
    color: white;
    background-color: blue;
  }

  /* Hover styles */
  &&:hover {
    color: white;
    background-color: darkBlue;
  }

  /* Disabled styles */
  &.css-78trlr-MuiButtonBase-root-MuiIconButton-root.Mui-disabled {
    color: rgba(0, 0, 0, 0.26);
    background-color: lightGrey;
    cursor: not-allowed;
    pointer-events: auto;
  }
`;

interface Props {
  disabled?: boolean;
  handleAdd?: () => void;
  icon: types;
}

export const CustomIcoButton: React.FC<Props> = ({
  disabled,
  handleAdd,
  icon,
}) => {
  const iconSelected = IconsTypes.find((x) => x.type === icon);

  return (
    <StyledButton aria-label="AddTask" disabled={disabled} onClick={handleAdd}>
      {iconSelected && iconSelected.icon && (
        <SvgIcon component={iconSelected.icon} />
      )}
    </StyledButton>
  );
};
