import styles from "./User.module.css";
import { DeleteBtn, ReviseBtn } from "components/Btn";
export default () => {
  const user = JSON.parse(window.localStorage.getItem(`user`));
  const { name, username, phone, email, website, id } = user;
  return (
    <section className={styles.container}>
      <article className={styles.userContainer}>
        <div className={styles.imgBox}>
          <img
            src={
              process.env.PUBLIC_URL +
              `/images/user${
                user.id > 10 ? Math.ceil(Math.random() * 9) : user.id
              }.jpg`
            }
            alt=""
          />
        </div>
        <div className={styles.descBox}>
          <h2>
            {name} <em>/</em> <span>{username}</span>{" "}
          </h2>
          <h3>Contact</h3>
          <p>Phone : {phone}</p>
          <p>Website : {website} </p>
          <p>email : {email} </p>
          <h3>Information</h3>
          <p>
            Address :{" "}
            {user.address
              ? `${user.address.street} / ${user.address.city}`
              : `Sinsa / Seoul`}{" "}
          </p>
          <p>Company: {user.company ? `${user.company.name}` : `1024`} </p>
          <div className={styles.btns}>
            <DeleteBtn id={id} />
            <ReviseBtn id={id} />
          </div>
        </div>
        <div className={styles.text}>
          <p>
            Life is a tragedy when seen in close-up, but a comedy in long shot.
          </p>
        </div>
      </article>
    </section>
  );
};
