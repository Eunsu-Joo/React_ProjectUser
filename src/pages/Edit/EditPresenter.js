import { matchUser } from "common/common";
import { DeleteBtn } from "components/Btn";
import { useParams } from "react-router";
import styles from "./Edit.module.css";

export default function EditPresenter({ data }) {
  const { id } = useParams();
  const { username } = matchUser(data, id);
  return (
    <section className="container">
      <form action="" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <div className={styles.imgBox}>
          <img
            src={process.env.PUBLIC_URL + `/images/user${id ? id : 2}.jpg`}
            alt=""
          />
        </div>
        <article className={styles.article}>
          <div className={styles.desc}>
            <h2>Contact</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <span>You can subscribe us </span>
          </div>
          <h3>Enroll / Revise</h3>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Name" />
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder={id ? username : "user Name"}
              disabled={id}
            />
            <button className="btn" disabled={id}>
              check Id
            </button>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Phone" />
          </div>{" "}
          <div className={styles.inputBox}>
            <input type="text" placeholder="Email" />
          </div>{" "}
          <div className={styles.inputBox}>
            <input type="text" placeholder="Address" />
          </div>{" "}
          <div className={styles.inputBox}>
            <input type="text" placeholder="Website" />
          </div>
          <div className={styles.btns}>
            <DeleteBtn />
            <button className="btn">Revise</button>
          </div>
        </article>
      </form>
    </section>
  );
}
