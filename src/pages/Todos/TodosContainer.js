import { userApi } from "api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import TodosPresenter from "./TodosPresenter";
export default () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  async function fetchUrl() {
    try {
      const { data } = await userApi.todos(id);
      setData(data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchUrl();
  }, []);

  return <TodosPresenter data={data} isLoading={isLoading} isError={isError} />;
};
