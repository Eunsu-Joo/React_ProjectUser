import { useState } from "react";
import { Modal } from "portal/Modal";
import { useNavigate } from "react-router";
import axios from "axios";
import useModal from "hooks/useModal";

const style = {
  marginRight: "24px",
};

export const DeleteBtn = ({ id, api, onDelete }) => {
  const { open, onOpenModal, closeModal } = useModal();
  const [error, setError] = useState(null);
  const onDeleteData = async () => {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => onOpenModal(!open))
      .catch((error) => {
        setError(error);
        onOpenModal(!open);
      });
  };
  const onDeleteCard = () => {
    onDelete(id);
  };
  return (
    <>
      <button
        className="btn"
        onClick={api ? onDeleteData : onDeleteCard}
        style={style}
      >
        DELETE
      </button>
      {open && (
        <Modal onClose={closeModal} goHome={true} type="alert">
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
