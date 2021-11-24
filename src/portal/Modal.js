import styled from "styled-components";
import Portal from "./Portal";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router";
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
  display: flex;
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
  fontSize: `26px`,
};
const Album = styled.div`
  width: 70%;
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
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-top: 1.5rem;
  }
`;
export const Modal = ({ children, onClose, goHome, type }) => {
  const navigator = useNavigate();
  const closeModal = () => {
    onClose();
  };
  const closeToHome = () => {
    navigator("/");
    window.localStorage.clear();
    onClose();
  };
  return (
    <Portal>
      <ModalContainer>
        {type === "alert" ? (
          <Alert>
            <GrClose
              style={iconStyle}
              onClick={goHome ? closeToHome : closeModal}
            />
            <p>{children}</p>
          </Alert>
        ) : (
          <Album>
            <GrClose
              style={iconStyle}
              onClick={goHome ? closeToHome : closeModal}
            />
            <div className="imgContainer">{children}</div>
          </Album>
        )}
      </ModalContainer>
    </Portal>
  );
};
