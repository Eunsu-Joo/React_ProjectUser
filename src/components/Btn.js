import { deleteApi } from "api";
import { useEffect, useState } from "react";

export const DeleteBtn = ({ id }) => {
  const [result, setResult] = useState(null);
  const style = {
    marginRight: "24px",
  };
  async function deleteUser() {
    try {
      await deleteApi(id).then((res) => setResult(res));
    } catch (error) {
      setResult(error);
    }
    return result;
  }
  const handleClick = () => {
    console.log(111);
  };
  useEffect(() => deleteUser(), []);
  return (
    <>
      <button className="btn" onClick={() => handleClick()} style={style}>
        DELETE
      </button>
    </>
  );
};
