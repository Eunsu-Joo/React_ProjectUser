import { DeleteBtn, ReviseBtn } from "components/Btn";
import React, { useState } from "react";
import styles from "./User.module.css";
import { useNavigate } from "react-router";
export default function UserPresenter({ data: user, isLoading, isError }) {
  const navigator = useNavigate();
  return (
    <section className={styles.container}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <article className={styles.userContainer}>
            <div className={styles.imgBox}>
              <img
                src={process.env.PUBLIC_URL + `/images/user${user.id}.jpg`}
                alt=""
              />
            </div>
            <div className={styles.descBox}>
              <h2>
                {user.name} <em>/</em> <span>{user.username}</span>{" "}
              </h2>
              <h3>Contact</h3>
              <p>Phone : {user.phone}</p>
              <p>Website : {user.website} </p>
              <p>email : {user.email} </p>
              <h3>Information</h3>
              <p>
                Address : {user.address.street} / {user.address.city}{" "}
              </p>
              <p>Company: {user.company.name} </p>
              <div className={styles.btns}>
                <DeleteBtn id={user.id} />
                <button
                  className="btn"
                  onClick={() => navigator(`/edit/${user.id}`)}
                >
                  REVISE
                </button>
              </div>
            </div>
            <div className={styles.text}>
              <p>
                Life is a tragedy when seen in close-up, but a comedy in long
                shot.
              </p>
            </div>
          </article>
        </>
      )}
      {isError && alert(isError)}
    </section>
  );
}
