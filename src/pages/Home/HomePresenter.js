import React from "react";
import UserItem from "components/UserItem";
import styles from "./Home.module.css";
export default ({ data }) => {
  return (
    <>
      <section className={styles.container}>
        <article className={styles.article}>
          <h2 className={styles.title}>
            <span>Hello</span>
            <span className={styles.user}>Users</span>
          </h2>

          <div className={styles.userContainer}>
            {data.map((user) => (
              <UserItem data={user} key={user.id} />
            ))}
          </div>
        </article>
      </section>
    </>
  );
};
