import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import AlbumsPresenter from "./AlbumsPresenter";
import { userApi } from "api";
export default () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    async function fetchUrl() {
      try {
        const { data } = await userApi.albums(id);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
      }
    }
    return fetchUrl();
  }, []);
  return (
    <AlbumsPresenter data={data} isLoading={isLoading} isError={isError} />
  );
};
