import React from 'react';
import styled from 'styled-components';
import { theme } from '../constants';
import { Avatar } from './Avatar';

export interface TweetProps {
  fullname: string;
  username: string;
  avatar: string;
  body?: string;
}

export const Tweet = ({ fullname, username, avatar, body }: TweetProps) => (
  <div>
    <Avatar src={avatar}/>
    {fullname}
    {username}
    {body}
  </div>
)