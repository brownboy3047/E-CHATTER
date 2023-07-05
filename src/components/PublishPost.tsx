import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { db, auth } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

//Avatar
import avatar from "../assets/avatar.png";

//React icon
import { BsTrash3 } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { SiSimpleanalytics } from "react-icons/si";

//style
import "./PublishPost.css";
import { useAuthContext } from "../hooks/useAuthContext";

const PublishPost = () => {
  const { documents: publishPost } = useCollection("post");
  const { user } = useAuthContext();
  const [showContent, setShowContent] = useState(true);
  const [showFeatured, setShowFeatured] = useState(false);

  const handleFeatured = () => {
    setShowFeatured(!showFeatured);
    setShowContent(false);
  };

  const deletePublishPost = async (id: string) => {
    const publishPostRef = doc(db, "post", id);

    await deleteDoc(publishPostRef);
  };

  return (
    <div className="publish_post">
      <div className="publish_post_section_one">
        <h2 onClick={() => setShowContent(!showContent)}>For you</h2>

        <h2 onClick={handleFeatured}>Featured</h2>

        <h2>Recent</h2>
      </div>

      <div className="publish_post_section_two">
        {showContent && (
          <ul>
            {publishPost &&
              publishPost.map((post) => (
                <li key={post.id}>
                  <div className="publish_post_content">
                    <div className="publish_post_img">
                      <img src={avatar} alt="avatar" />
                      {user && post.uid === auth.currentUser?.uid && (
                        <p onClick={() => deletePublishPost(post.id)}>
                          <BsTrash3 />
                        </p>
                      )}
                    </div>

                    <h3>{post.name}</h3>
                    <p>{post.postContent}</p>
                  </div>

                  <div className="publish_post_comment">
                    <div className="comment" title="comment">
                      <FaRegComment />
                    </div>
                    <div className="like" title="like">
                      <FcLike />
                    </div>
                    <div className="analytics" title="analytics">
                      <SiSimpleanalytics />
                    </div>
                  </div>

                  <p className="publish_post_border"></p>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PublishPost;