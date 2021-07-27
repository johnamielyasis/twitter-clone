import React, { useState } from "react";
import { useInterval } from "beautiful-react-hooks";
import axios from "axios";
import { useRecoilState } from "recoil";
import { tweetsAtom } from "../atoms";
import styled from "styled-components";
import { RoundedBox } from "./RoundedBox";
import { Avatar } from "./Avatar";
import { Flex } from "./Flex";
import { theme } from "../constants";
import { Tweet } from "../types";

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
    background-color: ${theme.colors.primaryLight};
  }
`;

export const TweetBox = () => {
  const [value, setValue] = useState("");
  const [tweets, setTweets] = useRecoilState(tweetsAtom);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const addTweet = (newTweet: Tweet) => {
    setTweets([...tweets, newTweet]);
  };

  const sendTweet = () => {
    const newTweet = {
      fullname: "John Yasis",
      username: "yasisdev",
      avatar: "https://i.pravatar.cc/300?img=6",
      body: value,
    };
    addTweet(newTweet);
    setValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value) {
      sendTweet();
    }
  };

  const getUser = async () => {
    const n = Math.random();
    if (n > 0.5) return;

    const {
      data: { results },
    } = await axios.get("https://randomuser.me/api/");
    const user = results[0];
    const fullname = `${user.name.first} ${user.name.last}`;

    addTweet({
      fullname,
      username: user.login.username,
      avatar: user.picture.thumbnail,
      body: `Hello, my name is ${fullname}`,
    });
  };

  useInterval(getUser, 1000);

  return (
    <RoundedBox>
      <Flex margin="0 0 16px">
        <Avatar src="https://i.pravatar.cc/300?img=6" />
        <TweetInput
          value={value}
          onChange={onInputChange}
          onKeyPress={handleKeyPress}
          placeholder="I need a jerb."
        ></TweetInput>
      </Flex>
      <Flex justifyContent="flex-end">
        <TweetButton onClick={sendTweet}>Tweet</TweetButton>
      </Flex>
    </RoundedBox>
  );
};
