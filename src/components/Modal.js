import styled from "styled-components";
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
  display: none;
`;
const Alert = styled.div`
  width: 500px;
  height: 200px;
  padding: 0 40px;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
const iconStyle = {
  color: `#555`,
  position: `absolute`,
  top: `1rem`,
  right: `1rem`,
  cursor: `pointer`,
};
export default function Modal(visible) {
  return (
    <ModalContainer visible={visible}>
      <Alert>
        <GrClose style={iconStyle} />
        <p>수정이 완료되었습니다.</p>
      </Alert>
    </ModalContainer>
  );
}
