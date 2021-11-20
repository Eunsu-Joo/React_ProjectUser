import { CheckIdBtn } from "components/Btn";
import styles from "./Signup.module.css";
import { useForm } from "react-hook-form";
import useModal from "hooks/useModal";
import { Modal } from "portal/Modal";
import { useState } from "react";
import Validator from "common/Validator";
const axios = require('axios').default;

export default () => {
  console.log(Validator())
  const {open, onOpenModal,closeModal} = useModal(); 
  const [error,setError]= useState(false);
const {inputValidator:{name,username,email,website,phone},handleSubmit,reset,errors}= Validator('');
  const onSubmit = async(data) =>{
      await axios.post('https://jsonplaceholder.typicode.com/users',data)
      .then(() => {onOpenModal(!open);reset();})
    .catch(error =>{setError(true);onOpenModal(!open);console.log(error)})
    
  }
  return (
    <section className="container">
      <form action="" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.imgBox}>
          <img
            src={process.env.PUBLIC_URL + `/images/user2.jpg`}
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
            <span>You can subscribe us</span>
          </div>
          <h3>Enroll / Revise</h3>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Name" {...name} />{" "}
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder={"user Name"}
              {...username}
            />
            <CheckIdBtn /> {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Phone" {...phone} />{" "}
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>{" "}
          <div className={styles.inputBox}>
            <input type="text" placeholder="Email" {...email} />{" "}
            {errors.email && <p>{errors.email.message}</p>}
          </div>{" "}
          <div className={styles.inputBox}>
            <input type="text" placeholder="Website" {...website} />{" "}
            {errors.website && <p>{errors.website.message}</p>}
          </div>
          <div className={styles.btns}>
            <button className="btn">Enroll</button>
          </div>
        </article>
        {open && <Modal onClose={closeModal}>{error? 'Find Error! Check your console' : 'Success Delete! Thank you'}</Modal> }
      </form>
    </section>
  );
};
