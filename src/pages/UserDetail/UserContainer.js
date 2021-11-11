import { userApi } from "api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UserPresenter from "./UserPresenter";
import Error from "components/Error";
export default () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    async function fetchUrl() {
      try {
        const { data } = await userApi.user(id);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
      } 
    }
    fetchUrl();
  }, []);
 
  return <> <UserPresenter data={data} isLoading={isLoading} isError={isError} /></>;
};
