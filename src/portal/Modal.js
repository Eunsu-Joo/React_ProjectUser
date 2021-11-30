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

const Portal = ({ children }) => {
  let modalRoot = document.getElementById("modal");
  return createPortal(children, modalRoot);
};
const Modal = ({ children }) => {
  useLockBodyScroll();
  return (
    <Portal>
      <ModalContainer>{children}</ModalContainer>
    </Portal>
  );
};

export default Modal;
