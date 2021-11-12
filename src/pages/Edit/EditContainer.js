import { updateApi } from "api";
import axios from "axios";
import { Modal } from "components/Modal";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import EditPresenter from "./EditPresenter";

export default ({ data }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const [result, setResult] = useState(false);
  const { id } = useParams();
  const onUpdate = (data) => {
    setUserData(data);
    if (userData) {
      async function fetchUrl() {
        try {
          await updateApi(id, userData);
          setResult(true);
        } catch (error) {
          setIsError(error);
        }
      }
      return fetchUrl();
    }
  };

  return (
    <>
      <EditPresenter onUpdate={onUpdate} data={data} />
      {result && <Modal visible={result} type="alert" />}
    </>
  );
};
