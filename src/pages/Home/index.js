import React, { useContext, useState } from "react";
import UserItem from "components/UserItem";
import styles from "./Home.module.css";
import useStore from "store/default";
import shallow from 'zustand/shallow'
export default () => {
  const  data  = useStore(state => state.data,shallow);
  const [input, setInput] = useState("");


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
    
{              data.map(user => <UserItem user={user} key={user.id} />)
}          
          </div>
        </article>
      </section>
    </>
  );
};
