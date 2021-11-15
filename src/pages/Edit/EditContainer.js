import { updateApi } from "api";
import Error from "components/Error";
import { UpdateModal } from "components/Modal";
import { useState } from "react";
import { useParams } from "react-router";

import EditPresenter from "./EditPresenter";

export default ({ data }) => {
  const [isError, setIsError] = useState(null);
  const [result, setResult] = useState(false);
  const { id } = useParams();
  const onUpdate = async (data) => {
    try {
      await updateApi(id, data);
      setResult(true);
    } catch (error) {
      setIsError(error);
    }
  };

  return (
    <>
      <EditPresenter onUpdate={onUpdate} data={data} />
      {result && <UpdateModal type={id ? "revise" : "update"} />}
      {isError && <Error />}
      {}
    </>
  );
};
