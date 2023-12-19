import React from 'react';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from './utils/avatarFromName';

interface Props {
  name: string;
  srcImage: string;
}

export const CustomAvatar = (props: Props) => {
  const { name, srcImage } = props;

  return <Avatar alt={name} src={srcImage} {...stringAvatar(name)} />;
};
