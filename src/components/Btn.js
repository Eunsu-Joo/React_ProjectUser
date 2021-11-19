import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Error from "./Error";

import { DeleteModal } from "./Modal";
const style = {
  marginRight: "24px",
};

export const DeleteBtn = ({ id }) => {
  const [result, setResult] = useState(false);
  const [isError, setIsError] = useState(null);
  const sandRequest = async () => {
    try {
      await deleteApi(id).then(() => {
        setResult(true);
      });
    } catch (e) {
      setIsError(e);
    }
  };

  return (
    <>
      <button className="btn" onClick={sandRequest} style={style}>
        DELETE
      </button>
      {isError && <Error />} {result && <DeleteModal />}
    </>
  );
};

export const CheckIdBtn = ({ disabled, data, value }) => {
  const [isCheck, setIsCheck] = useState(true);
  const handleCheck = () => {
    if (isCheck) {
      data.some((username) => (username = value))
        ? console.log("correct")
        : console.log("incorrect");
    }
  };
  return (
    <>
      <button className="btn" disabled={disabled} onClick={handleCheck}>
        CHECK ID
      </button>
    </>
  );
};
