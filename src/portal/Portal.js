import { createPortal } from "react-dom";
import { useEffect } from "react";
const Portal = ({ children }) => {
    let modalRoot = document.getElementById("modal");


    const modalElement = document.createElement("div");

    useEffect(() => {
        modalRoot.appendChild(modalElement);
        return () => modalRoot.removeChild(modalElement);
    });

    return createPortal(children, modalElement);
};

export default Portal
