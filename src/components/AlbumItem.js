import { useState } from "react";
import { Modal } from "portal/Modal";
import styled from "styled-components";
import axios from "axios";
import useModal from "hooks/useModal";
import PhotoItem from "./PhotoItem";
const AlbumItem = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover {
    .desc {
      bottom: 0;
    }
  }
  .imgBox {
    width: 420px;
    height: 420px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .desc {
    width: 100%;
    background-color: rgba(44, 62, 80, 0.75);
    color: #fff;
    position: absolute;
    left: 0;
    bottom: -200px;
    padding: 1em 0.7em;
    transition: bottom 0.2s ease;
    h3 {
      font-family: "Playfair Display", serif;
      letter-spacing: 2px;
      margin-bottom: 0.5em;
      span {
        font-size: 1.5rem;
      }
    }
    h4 {
      letter-spacing: 1px;
    }
  }
`;
export default ({ data }) => {
  const { userId, title, id } = data;
  const [photoData, setPhotoData] = useState(null);
  const [isSend, setIsSend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { open, onOpenModal, closeModal } = useModal();
  const handleClick = () => {
    onOpenModal(!open);
    if (isSend) return false;
    sandRequest();
  };
  const sandRequest = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((res) => setPhotoData(res.data))
      .then(() => {
        setIsSend(true);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  };
  return (
    <>
      <AlbumItem onClick={handleClick}>
        <div className="imgBox">
          <img
            src={process.env.PUBLIC_URL + `/images/user${userId}.jpg`}
            alt=""
          />
        </div>
        <div className="desc">
          <h3>
            UserID :<span>{userId}</span>
          </h3>
          <h4>{title}</h4>
        </div>
      </AlbumItem>
      {open && (
        <Modal onClose={closeModal}>
          {isLoading ? (
            <p>Loading..</p>
          ) : (
            photoData.map((photo) => <PhotoItem photo={photo} key={photo.id} />)
          )}
        </Modal>
      )}
      {error && (
        <Modal type="alert" onClose={closeModal}>
          Find Error! Check your console
        </Modal>
      )}
    </>
  );
};
