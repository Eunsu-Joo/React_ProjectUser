import { useState } from "react";
import { Modal } from "portal/Modal";
import { useNavigate } from "react-router";
import axios from "axios";
import useModal from "hooks/useModal";
import useStore from "store/default";
import { DeleteModal } from "portal/DeleteModal";

const style = {
  marginRight: "24px",
};

export const DeleteBtn = ({ id }) => {
  const { open, onOpenModal, closeModal } = useModal();
  return (
    <>
      <button className="btn" onClick={() => onOpenModal(true)} style={style}>
        DELETE
      </button>
      {open && (
        <DeleteModal onClose={closeModal} id={id}>
          Are you shall Delete your information?
        </DeleteModal>
      )}
    </>
  );
};
export const ReviseBtn = ({ id, onCreateLocal }) => {
  const navigator = useNavigate();
  const changeUrl = () => {
    if (onCreateLocal) {
      onCreateLocal();
    }
    navigator(`/edit/${id}`);
  };
  return (
    <button className="btn" onClick={id && changeUrl}>
      REVISE
    </button>
  );
};
