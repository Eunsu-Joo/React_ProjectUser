import { useState } from "react";

//모달 사용하기 위한 hooks (close, open control)
const useModal = () => {
  const [open, onOpenModal] = useState(false);
  const [close, onCloseModal] = useState(false);

  const closeModal = () => {
    onCloseModal(true);
    onOpenModal(false);
  };
  return { open, closeModal, onOpenModal };
};

export default useModal;
