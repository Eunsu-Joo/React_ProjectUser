import styled from "styled-components";
import Portal from "./Portal";
import { GrClose } from "react-icons/gr";
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
  display:flex;
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
export const Modal =({onClose,children}) => {
    return (
        <Portal>
            <ModalContainer>
            <Alert>
          <GrClose style={iconStyle} onClick={onClose} />
          <p>
            {children}
          </p>
        </Alert>
            </ModalContainer>
        </Portal>
    )
}
