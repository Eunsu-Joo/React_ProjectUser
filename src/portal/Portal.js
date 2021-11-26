import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  let modalRoot = document.getElementById("modal");

  return createPortal(children, modalRoot);
};
export default Portal;
