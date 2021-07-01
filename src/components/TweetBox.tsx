import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tweetsAtom } from '../atoms';
import styled from 'styled-components';
import { RoundedBox } from './RoundedBox'
import { Avatar } from './Avatar';
import { Flex } from './Flex';
import { theme } from '../constants';

const TweetInput = styled.input`
  border: none;
  color: ${theme.colors.textLight};
  font-size: 24px;
  margin-left: 8px;
  width: 100%;
  &:active,
  &:focus {
    outline: none;
  }
`;

const TweetButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 8px 16px;
  background-color: ${theme.colors.primary};
  border-radius: 20px;
  color: ${theme.colors.surfaceLight};
  &:hover {
    background-color: ${theme.colors.primaryLight}
  }
`;

export const TweetBox = () => {
  const [value, setValue] = useState('');
  const [tweets, setTweets] = useRecoilState(tweetsAtom);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const addTweet = () => {
    const newTweet = {
      fullname: 'John Yasis',
      username: 'yasisdev',
      avatar: 'https://i.pravatar.cc/300?img=6',
      body: value,
    }
    setTweets([...tweets, newTweet]);
    setValue('');
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value) {
      addTweet();
    }
  }

  return (
  <RoundedBox>
    <Flex margin="0 0 16px">
      <Avatar src="https://i.pravatar.cc/300?img=6" />
      <TweetInput value={value} onChange={onInputChange} onKeyPress={handleKeyPress} placeholder="I need a jerb."></TweetInput>
    </Flex>
    <Flex justifyContent="flex-end">
      <TweetButton onClick={addTweet}>Tweet</TweetButton>
    </Flex>
  </RoundedBox>
)
}
