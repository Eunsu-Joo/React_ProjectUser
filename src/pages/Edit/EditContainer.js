import { updateApi } from "api";
import { useEffect, useState } from "react";

import EditPresenter from "./EditPresenter";

export default ({ data }) => {
  const [userData, setUserData] = useState({
    data: null,
    id: null,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const onUpdate = (data) => setUserData(data);

  return <EditPresenter onUpdate={onUpdate} data={data} />;
};
