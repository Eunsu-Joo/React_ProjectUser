import styles from "./Edit.module.css";
import { ReviseBtn } from "components/Common/Btn";
import { useParams } from "react-router";
import useInput from "hooks/useInput";
import { useState, useRef, useEffect } from "react";
import useModal from "hooks/useModal";
import validator from "common/validator";
import useStore from "store/default";
import UpdateModal from "portal/UpdateModal";

export default () => {
  const { open, onOpenModal, closeModal } = useModal();
  const { data: users } = useStore((state) => state);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { username: currentUser } = users.find(
    (user) => user.id === parseInt(id)
  );

  const [data, onChange] = useInput({
    name: "",
    username: currentUser,
    phone: "",
    website: "",
    email: "",
  });
  const { formValid, errors } = validator(data);
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(errors);
    if (formValid) {
      onOpenModal(!open);
    }
  };
  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState(
    process.env.PUBLIC_URL + `/images/user${id > 10 ? id - 10 : id}.jpg`
  );
  const fileRef = useRef();
  const handleFileOnChange = (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = (e) => {
      setFile(file);
      setPreviewURL(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };
  const handleFileClick = (event) => {
    event.preventDefault();
    fileRef.current.click();
  };
  return (
    <section className="container">
      <form action="" autoComplete="off" onSubmit={handleSubmit}>
        <div className={styles.imgBox}>
          <img src={previewURL} alt="" />
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
          <div className="fileBox">
            <div className="previewImg">
              <img src={previewURL} />
              <button onClick={handleFileClick}>Edit</button>
            </div>
            <input
              type="file"
              hidden={true}
              ref={fileRef}
              onChange={handleFileOnChange}
            />
          </div>
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
        <UpdateModal onClose={closeModal} id={id} data={data}>
          Are you shall update your information?
        </UpdateModal>
      )}
    </section>
  );
};
