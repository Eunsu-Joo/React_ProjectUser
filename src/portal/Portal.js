import { createPortal } from "react-dom";
import { useEffect } from "react";
const Portal = ({ children }) => {
  let modalRoot = document.getElementById("modal");

  return createPortal(children, modalRoot);
};
export default Portal;
