import styled from "styled-components";

import { createPortal } from "react-dom";
import useLockBodyScroll from "hooks/useLockBodyScroll";
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
const Portal = ({ children }) => {
  let modalRoot = document.getElementById("modal");
  return createPortal(children, modalRoot);
};
export const Modal = ({ children }) => {
  useLockBodyScroll();
  return (
    <Portal>
      <ModalContainer>
        {/* {type === "alert" ? (
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
        )} */}
        {children}
      </ModalContainer>
    </Portal>
  );
};
