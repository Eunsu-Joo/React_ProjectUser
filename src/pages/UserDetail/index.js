import { DeleteBtn } from "components/Btn";
import styles from "./User.module.css";
import { useNavigate, useParams } from "react-router";
import Loading from "components/Loading";
import Error from "components/Error";
import useFetch from "hooks/useAsync";
import { useEffect } from "react/cjs/react.development";
import { useUser } from "context/UserState";
import { clearUser, getUser } from "context/UserAction";
import { cleanup } from "@testing-library/react";
export default () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const [userState, userDispatch] = useUser();
  const { data: user, isLoading, error } = userState;

  useEffect(() => {
    const getUserInfoHandler = async () => {
      await getUser(userDispatch, id);
    };
    getUserInfoHandler();
    console.log("after");
    return () => cleanup();
  }, []);
  return (
    <section className={styles.container}>
      {isLoading ? (
        <Loading />
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
      {error && <Error />}
    </section>
  );
};
