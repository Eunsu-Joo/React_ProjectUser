import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import { userApi } from "api";
import { AlbumModal } from "./Modal";
import Error from "./Error";
import { useCallback } from "react";
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
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
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
  const [isVisible, setIsVisible] = useState(false);
  const [photoData, setPhotoData] = useState(null);
  const [isSend, setIsSend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const sendRequest = useCallback(async () => {
    setIsVisible(true);
    if (isSend) return;
    setIsSend(true);
    try {
      const { data } = await userApi.photos(id);
      setPhotoData(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error);
    }
  }, [photoData]);

  return (
    <>
      <AlbumItem onClick={sendRequest}>
        <div className="imgBox">
          <img
            src={process.env.PUBLIC_URL + `/images/photo${userId}.png`}
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
      {isSend && (
        <AlbumModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          data={photoData}
          isLoading={isLoading}
        />
      )}
      {isError && <Error />}
    </>
  );
};
