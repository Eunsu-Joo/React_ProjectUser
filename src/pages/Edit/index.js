import styles from "./Edit.module.css";
import { ReviseBtn } from "components/Btn";
import { useParams } from "react-router";
import { useInput } from "hooks/useInput";
import { useContext, useState } from "react";
import { matchUser } from "common/common";
import { Modal } from "portal/Modal";
import { UserContext } from "context/UserContext";
import useModal from "hooks/useModal";
import validator from "common/validator";
const axios = require("axios").default;
export default () => {
  const [error, setError] = useState(null);
  const [apiError, setApiError] = useState(null);
  const { open, onOpenModal, closeModal } = useModal();
  const {
    state: { data: users },
  } = useContext(UserContext);
  const { id } = useParams();
  const { username: currentUser } = matchUser(users, id);
  const [data, onChange] = useInput({
    name: "",
    username: currentUser,
    phone: "",
    website: "",
    email: "",
  });
  const { formValid, errors } = validator(data);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(errors);
    if (formValid) {
      await axios
        .put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
        .then(() => {
          onOpenModal(true);
        })
        .catch((error) => {
          onOpenModal(true);
          setApiError(error);
        });
    }
  };
  return (
    <section className="container">
      <form action="" autoComplete="off" onSubmit={handleSubmit}>
        <div className={styles.imgBox}>
          <img src={process.env.PUBLIC_URL + `/images/user${id}.jpg`} alt="" />
        </div>
        <article className={styles.article}>
          <div className={styles.desc}>
            <h2>Contact</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <span>You can subscribe us</span>
          </div>
          <h3>Enroll / Revise</h3>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={onChange}
            />
            {error ? <p>{errors.name}</p> : null}
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              disabled={true}
              name="username"
              placeholder={currentUser}
            />

            <button className="btn" disabled={true}>
              CHECK ID
            </button>
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={onChange}
            />
            {error ? <p>{errors.phone}</p> : null}
          </div>{" "}
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={onChange}
            />
            {error ? <p>{errors.email}</p> : null}
          </div>{" "}
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Website"
              name="website"
              onChange={onChange}
            />
            {error ? <p>{errors.website}</p> : null}
          </div>
          <div className={styles.btns}>
            <ReviseBtn />
          </div>
        </article>
      </form>
      {open && (
        <Modal onClose={closeModal} goHome={true} type="alert">
          {apiError
            ? "Find Error! Check your console"
            : "Success Update Your Information!"}
        </Modal>
      )}
    </section>
  );
};
