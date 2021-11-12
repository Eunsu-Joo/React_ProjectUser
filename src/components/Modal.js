import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { Children } from "react";
import { useState } from "react/cjs/react.development";
import { useNavigate, useParams } from "react-router";
import PhotoItem from "./PhotoItem";
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isVisible ? `flex` : `none`)};
`;
const Alert = styled.div`
  width: 500px;
  height: 200px;
  padding: 0 40px;
  background-color: #fff;
  position: relative;
  display: flex;

  justify-content: center;
  flex-direction: column;
  p {
    font-size: 1.2rem;
    font-weight: 600;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;
const iconStyle = {
  color: `#555`,
  position: `absolute`,
  top: `1rem`,
  right: `1rem`,
  cursor: `pointer`,
};
const Album = styled.div`
  background-color: #fff;
  padding: 2rem 1rem;
  position: relative;
  height: 600px;
  overflow: auto;
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    letter-spacing: 3px;
  }
  .imgContainer {
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

export const Modal = ({ visible, type, data, isLoading }) => {
  const navigator = useNavigate();
  const [isVisible, setIsVisible] = useState(visible);
  const onCloseHome = () => {
    setIsVisible(!isVisible);
    navigator("/", { replace: true });
  };
  const onClose = () => {
    setIsVisible(!isVisible);
  };
  return (
    <ModalContainer isVisible={isVisible}>
      {type == "alert" ? (
        <Alert>
          <GrClose style={iconStyle} onClick={onClose} />
          <p>Thank you . Success Delete!</p>
        </Alert>
      ) : isLoading ? (
        <h1>Loading ... </h1>
      ) : (
        <Album>
          <GrClose style={iconStyle} onClick={onClose} />
          <h3>Photos</h3>
          <div className="imgContainer">
            {data.map((photo) => (
              <PhotoItem data={photo} key={photo.id} />
            ))}
          </div>
        </Album>
      )}
    </ModalContainer>
  );
};
