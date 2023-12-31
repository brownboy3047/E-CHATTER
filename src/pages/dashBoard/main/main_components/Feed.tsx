import { useState } from "react";

//firebase
import { db, auth } from "../../../../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

//React icon

import { BsEmojiSmile } from "react-icons/bs";
import { LuPencil } from "react-icons/lu";

//component
import PublishPost from "../../../../components/PublishPost";

import UploadFile from "./UploadFile";

import "./Feed.css";

const Feed = () => {
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const createPost = async () => {
    const postRef = collection(db, "post");

    await addDoc(postRef, {
      postContent,
      image,
      name: auth.currentUser?.email,
      uid: auth.currentUser?.uid,
      timeStamp: serverTimestamp(),
    });
    setPostContent("");
    setImage(null);
  };

  return (
    <main className="feed">
      <h2>FEED</h2>
      <div className="feed_post">
        <textarea
          name=""
          id=""
          placeholder="What is happening?!"
          className="feed_post_text"
          onChange={(e) => setPostContent(e.target.value)}
          value={postContent}
        ></textarea>

        <p className="feed_post_border"></p>

        <div className="feed_post_create">
          <div className="feed_post_icon">
            <UploadFile setImage={setImage} image={image} />

            <BsEmojiSmile className="feed_icon_two" title="emoji" />
          </div>

          <button
            className="feed_post_btn"
            onClick={createPost}
            disabled={postContent.length === 0}
          >
            <LuPencil />
            <span>Post a content</span>
          </button>
        </div>
      </div>

      <div className="feed_post_publish">
        <PublishPost />
      </div>
    </main>
  );
};

export default Feed;
