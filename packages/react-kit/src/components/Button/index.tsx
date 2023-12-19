import React from 'react';
import styled, { css } from 'styled-components';
import Button from '@mui/material/Button'; 

type ButtonType = 'success' | 'danger' | 'default'; // Include 'default' in ButtonType

const getButtonStyles = (type: ButtonType) => {
  switch (type) {
    case 'success':
      return css`
        color: white;

        background-color: green;
        &:hover {
          background-color: darkGreen;
        }
      `;
    case 'danger':
      return css`
        color: white;

        background-color: crimson;
        &:hover {
          background-color: darkRed;
        }
      `;
    default:
      return css`
        color: white;

        background-color: grey;
        &:hover {
          background-color: darkGrey;
        }
      `;
  }
};

const StyledButton = styled(Button)<{ type: ButtonType }>`
  && {
    ${({ type }) => getButtonStyles(type)}
  }

  /* Common styles for all button types */
  &:hover {
    color: white;
    cursor: pointer;
  }

  /* Disabled styles */
  ${({ disabled }) =>
    disabled &&
    css`
      color: grey;
      background-color: lightGrey;
      cursor: not-allowed;
      &:hover {
        background-color: lightGrey;
      }
    `}
`;

interface Props {
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
  label: string;
}

export const CustomButton: React.FC<Props> = ({
  type = 'default',
  disabled = false,
  onClick,
  label,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type}>
      {label}
    </StyledButton>
  );
};
