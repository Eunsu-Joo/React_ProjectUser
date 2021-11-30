import { useState } from "react/cjs/react.development";

const usePagination = (number, data) => {
  const [page, setPage] = useState({ pageNumber: number, currentPage: 1 });
  const { pageNumber, currentPage } = page;
  const paginate = (data, currentPage, pageNumber) => {
    const startIndex = (currentPage - 1) * pageNumber;
    const endIndex = currentPage * pageNumber;
    return data.slice(startIndex, endIndex);
  };
  const pageArray = paginate(data, currentPage, pageNumber);
  const handlePagination = (num) =>
    setPage({
      ...page,
      currentPage: num,
    });
  return [pageArray, handlePagination, currentPage, pageNumber];
};

export default usePagination;
