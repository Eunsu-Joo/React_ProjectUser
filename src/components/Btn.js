import { useState } from "react";
import { Modal } from "portal/Modal";
import { useNavigate } from "react-router";
import axios from "axios";
import useModal from "hooks/useModal";
import useStore from "store/default";

const style = {
  marginRight: "24px",
};

export const DeleteBtn = ({ id, modal }) => {
  const { open, onOpenModal, closeModal } = useModal();
  const { remove } = useStore();
  const onDeleteCard = () => {
    remove(id);
  };
  return (
    <>
      <button
        className="btn"
        onClick={modal ? onOpenModal : onDeleteCard}
        style={style}
      >
        DELETE
      </button>
      {open && (
        <Modal goHome={true} type="alert">
          : "Thank you . Success Delete!"
        </Modal>
      )}
    </>
  );
};
export const ReviseBtn = ({ url, id, onCreateLocal }) => {
  const navigator = useNavigate();
  const changeUrl = () => {
    navigator(`/edit/${id}`);
    onCreateLocal();
  };
  return (
    <button className="btn" onClick={url && changeUrl}>
      REVISE
    </button>
  );
};
