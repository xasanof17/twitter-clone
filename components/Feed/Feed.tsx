import FeedTop from "./FeedTop";
import TweetBox from "./TweetBox";

type FeedProps = {
  title: string;
};

const Feed = ({ title }: FeedProps) => {
  return (
    <div className="flex-1 flex-col">
      <FeedTop title={title} />
      <TweetBox />
    </div>
  );
};

export default Feed;
