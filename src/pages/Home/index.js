import React, { useState, useEffect } from "react";
import UserItem from "components/UserItem";
import styles from "./Home.module.css";
import useStore from "store/default";
import shallow from "zustand/shallow";
import Pagination from "components/Pagination";

export default () => {
  const data = useStore((state) => state.data, shallow);
  const [input, setInput] = useState("");
  const [page, setPage] = useState({
    pageNumber: 6,
    currentPage: 1,
  });
  const { pageNumber, currentPage } = page;
  const paginate = (data, currentPage, pageNumber) => {
    const startIndex = (currentPage - 1) * pageNumber;
    const endIndex = currentPage * pageNumber;
    return data.slice(startIndex, endIndex);
  };
  const pageArray = paginate(data, currentPage, pageNumber);
  const handlePagination = (num) => setPage({ ...page, currentPage: num });
  const pages = { pageNumber, currentPage, handlePagination };
  const searchData = pageArray.filter((user) => {
    const name = user.name.toLowerCase();
    const username = user.username.toLowerCase();
    if (input === "") {
      return user;
    } else if (name.includes(input) || username.includes(input)) {
      return user;
    }
  });
  useEffect(() => window.localStorage.clear(), []);
  return (
    <>
      <section className={styles.container}>
        <article className={styles.article}>
          <h2 className={styles.title}>
            <span>Hello</span>
            <span className={styles.user}>Users</span>
          </h2>
          <div className={styles.searchBar}>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="search name / username.."
            />
          </div>
          <div className={styles.userContainer}>
            {searchData.length === 0 ? (
              <li className={styles.noResult}>No Result</li>
            ) : (
              searchData.map((user) => (
                <UserItem
                  user={user}
                  key={user.id}
                  num={Math.ceil(Math.random() * 9)}
                />
              ))
            )}
          </div>
          <Pagination {...pages} />
        </article>
      </section>
    </>
  );
};
