import { useState } from "react";
const useFileImage = (fileRef, imgUrl) => {
  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState(imgUrl);

  const handleFileOnChange = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      setFile(file);
      setPreviewURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleFileClick = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };
  return { previewURL, handleFileClick, handleFileOnChange };
};

export default useFileImage;
