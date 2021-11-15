import React from "react";
import UserItem from "components/UserItem";
import styles from "./Home.module.css";
import { useState } from "react/cjs/react.development";

export default ({ data }) => {
  const [input, setInput] = useState("");
  const searchData = data.filter((user) => {
    if (input === "") {
      return user;
    } else if (user.name.toLowerCase().includes(input)) {
      return user;
    }
  });

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
              placeholder="search name.."
            />
          </div>
          <div className={styles.userContainer}>
            {searchData.length === 0 ? (
              <li className={styles.noResult}>No Result</li>
            ) : (
              searchData.map((user) => <UserItem data={user} key={user.id} />)
            )}
          </div>
        </article>
      </section>
    </>
  );
};
