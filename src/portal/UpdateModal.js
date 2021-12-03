import Modal from "./Modal";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import useStore from "store/default";
import { useNavigate } from "react-router";
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
const UpdateModal = ({ onClose, children, id, data, enroll, imgUrl }) => {
  const { create, update, updateImg } = useStore((state) => state);
  const navigator = useNavigate();
  const onUpdate = () => {
    if (enroll) {
      create(data, imgUrl);
    } else {
      update(data, id);
      updateImg(id, imgUrl);
    }

    window.localStorage.clear();
    navigator("/");
  };
  return (
    <Modal>
      <Alert>
        <GrClose style={iconStyle} onClick={onClose} />
        <p>{children}</p>
        <button className="btn" onClick={onUpdate}>
          {enroll ? `enroll` : `Revise`}
        </button>
      </Alert>
    </Modal>
  );
};
export default UpdateModal;
