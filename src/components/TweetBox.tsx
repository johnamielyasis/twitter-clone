import React from 'react';
import styled from 'styled-components';
import { RoundedBox } from './RoundedBox';
import { Avatar } from './Avatar';
import { theme } from '../constants';

const TweetInput = styled.input`
  &:active,
  &:focus {
    outline: none;
  }
  border: none;
  color: ${theme.colors.textLight};
  font-size: 24px;
  margin-left: 8px;
  width: 100%;
`;

const TweetButton = styled.button`
  border: none;
  padding: 8px 16px;
  background-color: ${theme.colors.primary};
  border-radius: 20px;
  color: ${theme.colors.surfaceLight};
`;

interface FlexProps {
  justifyContent?: string;
  margin?: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  ${(p) => p.justifyContent && `justify-content: ${p.justifyContent}`}
  ${(p) => p.margin && `margin: ${p.margin}`}
`;

export const TweetBox = () => {
  return (
    <RoundedBox>
      <Flex margin="0 0 16px">
        <Avatar src="https://i.pravatar.cc/300" />
        <TweetInput placeholder="I need a jerb."></TweetInput>
      </Flex>
      <Flex justifyContent="flex-end">
        <TweetButton>Tweet</TweetButton>
      </Flex>
    </RoundedBox>
  )
}
