import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { useState } from "react/cjs/react.development";
import { useNavigate } from "react-router";
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

export const DeleteModal = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigator = useNavigate();
  const onClose = () => {
    setIsVisible(!isVisible);
    navigator("/", { replace: true });
  };
  return (
    <ModalContainer isVisible={isVisible}>
      <Alert>
        <GrClose style={iconStyle} onClick={onClose} />
        <p>Thank you . Success Delete!</p>
      </Alert>
    </ModalContainer>
  );
};

export const UpdateModal = (type) => {
  const [isVisible, setIsVisible] = useState(true);
  console.log(type);
  return (
    <ModalContainer isVisible={isVisible}>
      <Alert>
        <GrClose style={iconStyle} onClick={() => setIsVisible(!isVisible)} />
        <p>
          {type === "update"
            ? "Thank you! Success SIgn In!"
            : "Thank you! Success Revise your information"}
        </p>
      </Alert>
    </ModalContainer>
  );
};
export const AlbumModal = ({ data, isVisible, setIsVisible, isLoading }) => {
  return (
    <ModalContainer isVisible={isVisible}>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <Album>
          <GrClose style={iconStyle} onClick={() => setIsVisible(!isVisible)} />
          <h3>Photos</h3>{" "}
          <div className="imgContainer">
            {" "}
            {data.map((photo) => (
              <PhotoItem data={photo} key={photo.id} />
            ))}
          </div>
        </Album>
      )}
    </ModalContainer>
  );
};
