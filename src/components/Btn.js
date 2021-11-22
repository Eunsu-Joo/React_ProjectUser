import { useRef, useState } from "react";
import axios from "axios";
import useModal from "hooks/useModal";
import { Modal } from "portal/Modal";
import { useNavigate } from "react-router";

const style = {
  marginRight: "24px",
};

export const DeleteBtn = ({ id }) => {
  const { open, onOpenModal, closeModal } = useModal();
  const [error, setError] = useState(null);
  const onDelete = async () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => onOpenModal(!open))
      .catch((error) => {
        setError(error);
        onOpenModal(!open);
      });
  };
  return (
    <>
      <button className="btn" onClick={onDelete} style={style}>
        DELETE
      </button>
      {open && (
        <Modal onClose={closeModal}>
          {error
            ? "Find Error! Check your console"
            : "Thank you . Success Delete!"}
        </Modal>
      )}
    </>
  );
};

export const ReviseBtn = ({ url, id }) => {
  const navigator = useNavigate();
  const changeUrl = () => {
    navigator(`/edit/${id}`);
  };
  return (
    <button className="btn" onClick={url && changeUrl}>
      REVISE
    </button>
  );
};
