import { deleteApi } from "api";
import { useEffect, useState } from "react";

export const DeleteBtn = ({ id }) => {
  const style = {
    marginRight: "24px",
  };

  return (
    <>
      <button className="btn" style={style}>
        DELETE
      </button>
    </>
  );
};
