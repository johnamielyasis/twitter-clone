import React from 'react';
import styled from 'styled-components';
import { theme } from '../constants';
import { Avatar } from './Avatar';
import { Flex } from './Flex';
import { Text } from './Text';

const Container = styled.div`
  padding: 8px 0;
  margin: 0 0 16px;
  border-bottom: 1px solid ${theme.colors.surface};
`
const StyledFlex = styled(Flex)`
  > * {
    display: block;
    margin: 0 8px 0 0;
  }
`
export interface TweetProps {
  fullname: string;
  username: string;
  avatar: string;
  body?: string;
}

export const Tweet = ({ fullname, username, avatar, body }: TweetProps) => (
  <Container>
    <StyledFlex alignItems="center" margin="0 0 16px">
      <Avatar src={avatar}/>
      <StyledFlex flexDirection="column">
        <Text variant="heading">{fullname}</Text>
        <Text variant="caption">@{username}</Text>
      </StyledFlex>
    </StyledFlex>
    <Text variant="body">{body}</Text>
  </Container>
)