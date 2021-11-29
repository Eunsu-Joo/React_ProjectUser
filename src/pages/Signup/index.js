import styles from "./Signup.module.css";
import { useRef, useState } from "react";
import useModal from "hooks/useModal";
import { useInput } from "hooks/useInput";
import validator from "common/validator";
import useStore from "store/default";
import UpdateModal from "portal/UpdateModal";
export default () => {
  const { open, onOpenModal, closeModal } = useModal();
  const [error, setError] = useState(null);
  const [data, onChange] = useInput({
    name: "",
    username: "",
    phone: "",
    website: "",
    email: "",
  });
  let { formValid, errors } = validator(data);
  const { data: users } = useStore((state) => state);
  const usernames = users.map((user) => user.username);
  const ref = useRef();
  const onCheckUser = () => {
    const value = data.username;
    const upperCaseValue = value.replace(/\b[a-z]/, (letter) =>
      letter.toUpperCase()
    );
    if (usernames.includes(value)) {
      alert("다른아이디를 사용해주세요");
      ref.current = false;
    } else if (!value) {
      alert("값을 입력해주세요");
      ref.current = false;
    } else if (!value.match(/^[a-zA-Z0-9]*$/)) {
      alert("영문 혹은 영문+숫자만 가능합니다.");
      ref.current = false;
    } else if (usernames.includes(upperCaseValue)) {
      alert("다른아이디를 사용해주세요");
      ref.current = false;
    } else {
      alert("사용할 수 있는 아이디입니다.");
      ref.current = false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(errors);
    if (ref.current) {
      return alert("중복확인을 해주세요");
    }
    if (formValid) {
      return onOpenModal(!open);
    }
  };

  return (
    <section className="container">
      <form action="" autoComplete="off" onSubmit={handleSubmit}>
        <div className={styles.imgBox}>
          <img src={process.env.PUBLIC_URL + `/images/user2.jpg`} alt="" />
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
              name="username"
              placeholder={"user Name"}
              onChange={onChange}
            />
            <button className="btn" ref={ref} onClick={onCheckUser}>
              CHECK ID
            </button>
            {error ? <p>{errors.username}</p> : null}
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={onChange}
            />{" "}
            {error ? <p>{errors.phone}</p> : null}
          </div>{" "}
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={onChange}
            />{" "}
            {error ? <p>{errors.email}</p> : null}
          </div>{" "}
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Website"
              name="website"
              onChange={onChange}
            />{" "}
            {error ? <p>{errors.website}</p> : null}
          </div>
          <div className={styles.btns}>
            <button className="btn" type="submit">
              ENROLL
            </button>
          </div>
        </article>
        {open && (
          <UpdateModal onClose={closeModal} data={data} enroll={true}>
            Are you shall create your account?
          </UpdateModal>
        )}
      </form>
    </section>
  );
};
