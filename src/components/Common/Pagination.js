import useStore from "store/default";
import styled from "styled-components";
import _, { range } from "lodash";
const Pagination = styled.div`
  width: 300px;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  span {
    cursor: pointer;
  }
  span.current {
    font-weight: 600;
    text-decoration: underline;
  }
`;
export default ({ ...pages }) => {
  const { pageNumber, handlePagination, currentPage } = pages;
  const { data } = useStore((state) => state);
  const paginationNumber = Math.ceil(data.length / pageNumber);
  const numbers = range(1, paginationNumber + 1);
  return (
    <Pagination>
      <span
        onClick={() =>
          currentPage === 1 ? false : handlePagination(currentPage - 1)
        }
      >
        ◀
      </span>
      {numbers.map((page) => (
        <span
          key={page}
          className={page === currentPage ? "current" : null}
          onClick={() => handlePagination(page)}
        >
          {page}
        </span>
      ))}
      <span
        onClick={() =>
          currentPage < numbers.length
            ? handlePagination(currentPage + 1)
            : false
        }
      >
        ▶
      </span>
    </Pagination>
  );
};
