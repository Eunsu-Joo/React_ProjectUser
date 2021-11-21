import { DeleteBtn, ReviseBtn } from "components/Btn";
import styles from "./User.module.css";
import { useNavigate, useParams } from "react-router";
import Loading from "components/Loading";
import Error from "components/Error";
import {useFetch } from "hooks/useAsync";
import useModal from "hooks/useModal";
import { Modal } from "portal/Modal";
export default () => {
  const navigator = useNavigate();
  const { id } = useParams();
  const { data:user, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

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
              <DeleteBtn id={id} />
              <ReviseBtn url={true} id={id}/>
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
