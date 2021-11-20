import { useState } from "react"
//모달 사용하기 위한 hooks (close, open control)
const useModal =() => {
    const [open,onOpenModal]= useState(false);
    const [close,onCloseModal]= useState(false);
    const openModal =() => {
        onOpenModal(true);
    }
    const closeModal =() => {
        onCloseModal(true)
        onOpenModal(false);
    }
    return {open,close,openModal,closeModal}
}

export default useModal;
