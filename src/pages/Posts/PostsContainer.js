import { userApi } from "api";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PostsPresenter from "./PostsPresenter";

export default () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    async function fetchUrl() {
      try {
        const { data } = await userApi.posts(id);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
      }
    }
    fetchUrl();
  }, []);
  return <PostsPresenter data={data} isLoading={isLoading} isError={isError} />;
};
