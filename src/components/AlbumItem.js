import { useState, useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import { userApi } from "api";
import { useCallback } from "react";
import { useParams } from "react-router";
import { Modal } from "./Modal";
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
  const { userId, title } = data;
  const [isCheck, setIsCheck] = useState(true);
  const [photoData, setPhotoData] = useState(null);
  const [isSend, setIsSend] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const sendRequest = useCallback(async () => {
    if (isSend) return;
    setIsSend(true);
    const { data } = await userApi.photos(id);
    setPhotoData(data);
    setIsLoading(false);
  });
  useEffect(() => {
    return sendRequest;
  }, []);
  return (
    <>
      <AlbumItem onClick={sendRequest}>
        <div className="imgBox">
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/photo${Math.ceil(Math.random() * 10)}.png`
            }
            alt=""
          />
        </div>
        <div className="desc">
          <h3>
            UserID : <span>{userId}</span>{" "}
          </h3>
          <h4>{title}</h4>
        </div>
      </AlbumItem>
      {isSend && (
        <Modal visible={isCheck} data={photoData} isLoading={isLoading} />
      )}
    </>
  );
};
