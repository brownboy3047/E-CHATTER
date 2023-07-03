//React icon
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";

import "./Feed.css";

const Feed = () => {
  return (
    <main className="feed">
      <h1>FEED</h1>
      <div className="feed_post">
        <textarea
          name=""
          id=""
          placeholder="What is happening?!"
          className="feed_post_text"
        ></textarea>

        <p className="feed_post_border"></p>

        <div className="feed_post_btn">
          <div className="feed_post_icon">
            <HiOutlinePhotograph className="feed_icon_one" title="media" />
            <BsEmojiSmile className="feed_icon_two" title="emoji" />
          </div>

          <div className="feed_post_publish">
            <LuPencil />
            <span>Post a content</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
