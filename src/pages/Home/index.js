import React, { useState, useEffect } from "react";
import UserItem from "components/Home/UserItem";
import styles from "./Home.module.css";
import useStore from "store/default";
import shallow from "zustand/shallow";
import Pagination from "components/Home/Pagination";
import usePagination from "hooks/usePagination";

export default () => {
  const data = useStore((state) => state.data, shallow);
  const [input, setInput] = useState("");
  const [pageArray, handlePagination, currentPage, pageNumber] = usePagination(
    6,
    data
  );
  const pages = { handlePagination, currentPage, pageNumber };
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
              searchData.map((user) => <UserItem user={user} key={user.id} />)
            )}
          </div>
          <Pagination {...pages} />
        </article>
      </section>
    </>
  );
};
