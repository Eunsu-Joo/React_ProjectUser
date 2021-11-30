import Modal from "./Modal";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
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
const iconStyle = {
  color: `#555`,
  position: `absolute`,
  top: `1rem`,
  right: `1rem`,
  cursor: `pointer`,
  fontSize: `26px`,
};
const AlbumModal = ({ children, onClose }) => {
  return (
    <Modal>
      <Album>
        <GrClose style={iconStyle} onClick={onClose} />
        <h3>Photos</h3>
        <div className="imgContainer">{children}</div>
      </Album>
    </Modal>
  );
};

export default AlbumModal;
