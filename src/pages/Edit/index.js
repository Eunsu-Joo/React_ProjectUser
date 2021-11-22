import styles from "./Edit.module.css";
import { ReviseBtn } from "components/Btn";
import { useParams } from "react-router";
import { useInput } from "hooks/useInput";
import { useContext, useState } from "react";
import { matchUser } from "common/common";
import { Modal } from "portal/Modal";
import { UserContext } from "context/UserContext";
import useModal from "hooks/useModal";
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
  const { name, email, phone, website } = data;
  const validator = () => {
    let formValid = true;
    let errors = {};
    //name
    if (name === "") {
      formValid = false;
      errors["name"] = "Cannot be empty";
    }
    if (name !== "") {
      if (!name.match(/^[가-힣]+$/)) {
        formValid = false;
        errors["name"] = "Only Write Korean";
        if (name.length > 10) {
          formValid = false;
          errors["name"] = "Less than 10 characters";
        }
      }
    }
    //phone
    if (phone === "") {
      formValid = false;
      errors["phone"] = "Cannot be empty";
    }
    if (phone !== "") {
      if (!phone.match(/^010-?([0-9]{3,4})-?([0-9]{4})$/)) {
        formValid = false;
        errors["phone"] = "Input phone Form";
        if (phone.length > 11) {
          formValid = false;
          errors["phone"] = "Less than 11 characters";
        }
      }
    }
    //email
    if (email === "") {
      formValid = false;
      errors["email"] = "Cannot be empty";
    }
    if (email !== "") {
      if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
        formValid = false;
        errors["email"] = "Input email form";
        if (email.length > 50) {
          formValid = false;
          errors["email"] = "Less than 50 characters";
        }
      }
    }
    //website
    if (website === "") {
      formValid = false;
      errors["website"] = "Cannot be empty";
    }
    if (website !== "") {
      if (
        !website.match(
          /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        )
      ) {
        formValid = false;
        errors["website"] = "Input website form";
      }
    }
    setError({ errors });
    return formValid;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validator()) {
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
            {error !== null ? <p>{error.errors.name}</p> : null}
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
            {error !== null ? <p>{error.errors.phone}</p> : null}
          </div>{" "}
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={onChange}
            />
            {error !== null ? <p>{error.errors.email}</p> : null}
          </div>{" "}
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Website"
              name="website"
              onChange={onChange}
            />
            {error !== null ? <p>{error.errors.website}</p> : null}
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
