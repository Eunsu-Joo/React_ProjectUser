import Modal from "./Modal";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import useStore from "store/default";
import { useNavigate } from "react-router";
const iconStyle = {
  color: `#555`,
  position: `absolute`,
  top: `1rem`,
  right: `1rem`,
  cursor: `pointer`,
  fontSize: `26px`,
};
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
const DeleteModal = ({ onClose, children, id }) => {
  const { remove } = useStore();
  const navigator = useNavigate();
  const onDelete = () => {
    remove(id);
    navigator("/");
  };
  return (
    <Modal>
      <Alert>
        <GrClose style={iconStyle} onClick={onClose} />
        <p>{children}</p>
        <button className="btn" onClick={onDelete}>
          DELETE
        </button>
      </Alert>
    </Modal>
  );
};

export default DeleteModal;
