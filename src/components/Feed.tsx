import React from 'react';
import { RoundedBox } from './RoundedBox';
import { Tweet, TweetProps } from './Tweet';

const tweets: TweetProps[] = [
  {
    fullname: 'Gerrymi Bernardo',
    username: 'gerrymi',
    avatar: 'https://i.pravatar.cc/300',
    body: 'So bored. 🙃'
  },
  {
    fullname: 'Gerrymi Bernardo',
    username: 'gerrymi',
    avatar: 'https://i.pravatar.cc/300',
  },
];

export const Feed = () => {
  return (
    <RoundedBox>
      {tweets.map(t => <Tweet {...t}/>)}
    </RoundedBox>
  )
}
