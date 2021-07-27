import { useRecoilValue } from "recoil";
import { RoundedBox } from "./RoundedBox";
import { Flex } from "./Flex";
import { Tweet } from "./Tweet";
import { tweetsAtom } from "../atoms";

export const Feed = () => {
  const tweets = useRecoilValue(tweetsAtom);
  return (
    <RoundedBox>
      <Flex flexDirection="column-reverse">
        {tweets.map((t, index) => (
          <Tweet key={`tweet-${index}`} {...t} />
        ))}
      </Flex>
    </RoundedBox>
  );
};
