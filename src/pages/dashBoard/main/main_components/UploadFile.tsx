import { useState, useEffect } from "react";
import { storage } from "../../../../firebase/config";

// Import Firebase Storage
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  UploadTaskSnapshot,
} from "firebase/storage";

import { HiOutlinePhotograph } from "react-icons/hi";

interface ChildProps {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const UploadFile: React.FC<ChildProps> = ({ setImage }) => {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const uploadFile = () => {
      if (!file) return;

      //   const name = new Date().getTime() + file.name;

      const storageRef = ref(storage, "images/posts.jpg");

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot: UploadTaskSnapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImage(() => downloadURL);
          });
        }
      );
    };

    file && uploadFile();
  }, [file, setImage]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };

  return (
    <span className="upload_file">
      <label className="media">
        <HiOutlinePhotograph className="feed_icon_one" title="upload picture" />
        <input
          type="file"
          id="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </label>
    </span>
  );
};

export default UploadFile;
