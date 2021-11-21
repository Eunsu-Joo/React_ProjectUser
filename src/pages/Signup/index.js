import { CheckIdBtn, EnrollBtn } from "components/Btn";
import styles from "./Signup.module.css";
import useModal from "hooks/useModal";
import { Modal } from "portal/Modal";
import { useEffect, useRef, useState } from "react";

import { useContext } from "react/cjs/react.development";
import { UserContext } from "context/UserContext"
import { useInput } from "hooks/useInput";
const axios = require('axios').default;
export default () => {
  const {open, onOpenModal,closeModal} = useModal(); 
  const [error,setError]= useState(null);
  const [apiError,setApiError]= useState(null)
  const [data,onChange]= useInput({
    name:'',
    username:'',
    phone:'',
    website:'',
    email:''
  })
  const {name,username,email,phone,website}= data;
  const {state:{data:users}}=useContext(UserContext);
  const usernames= users.map(user => user.username);
  const ref= useRef();
  const onCheckUser=() => {
    const value= data.username
    const upperCaseValue = value.replace(/\b[a-z]/, letter => letter.toUpperCase());
   if(usernames.includes(value)||usernames.includes(upperCaseValue)){
     alert('다른아이디를 사용해주세요')
   } else{
 
     alert('사용할 수 있는 아이디입니다.')
     ref.current= false;
   }
  }
  
  const validator= () => {
    let formValid= true;
    let errors={};
    //name
    if(name === ''){
      formValid = false;
      errors["name"] = "Cannot be empty";
    }
    if(name !== ''){
      if(!name.match(/^[가-힣]+$/)){
        formValid = false;
        errors["name"] = "Only Write Korean";
        if(name.length>10){
          formValid = false;
          errors["name"] ="Less than 10 characters"
        }
      }
    }
    //username
    if(username === ''){
      formValid = false;
      errors["username"] = "Cannot be empty";
    }
    if(username !== ''){
      if(!username.match(/^[a-zA-Z0-9]*$/)){
        formValid = false;
        errors["username"] = "Input English & Number Form";
        if(username.length>20){
          formValid = false;
          errors["username"] ="Less than 20 characters"
        }
      }
    }
    //phone
    if(phone === ''){
      formValid = false;
      errors["phone"] = "Cannot be empty";
    }
    if(phone !== ''){
      if(!phone.match(/^010-?([0-9]{3,4})-?([0-9]{4})$/)){
        formValid = false;
        errors["phone"] = "Input phone Form";
        if(phone.length>11){
          formValid = false;
          errors["phone"] ="Less than 11 characters"
        }
      }
    }
    //email
    if(email === ''){
      formValid = false;
      errors["email"] = "Cannot be empty";
    }
    if(email !== ''){
      if(!email.match( /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)){
        formValid = false;
        errors["email"] = "Input email form";
        if(email.length>50){
          formValid = false;
          errors["email"] ="Less than 50 characters"
        }
      }
    }
    //website
    if(website === ''){
      formValid = false;
      errors["website"] = "Cannot be empty";
    }
    if(website !== ''){
      if(!website.match(  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)){
        formValid = false;
        errors["website"] = "Input website form";

      }
    }
    setError({errors})
    return formValid;
  }
  const handleSubmit= async(event) => {
    event.preventDefault();
    if(ref.current){
     alert('중복확인을 해주세요');
    }
    if(validator()){
      await axios.post('https://jsonplaceholder.typicode.com/users',data)
      .then(() =>{onOpenModal(true)})
      .catch(error =>{onOpenModal(true);setApiError(error);})
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="container">
      <form action="" autoComplete="off" onSubmit={handleSubmit}>
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
            <input type="text" placeholder="Name" name="name" onChange={onChange}  />
            {error !== null ? <p>{error.errors.name}</p> : null}
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
      {error !== null ? <p>{error.errors.username}</p> : null}
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Phone" name="phone" onChange={onChange} />{" "}
            {error !== null ? <p>{error.errors.phone}</p> : null}
          </div>{" "}
          <div className={styles.inputBox}>
            <input type="text" placeholder="Email" name="email" onChange={onChange} />{" "}
            {error !== null ? <p>{error.errors.email}</p> : null}
          </div>{" "}
          <div className={styles.inputBox}>
            <input type="text" placeholder="Website" name="website" onChange={onChange} />{" "}
            {error !== null ? <p>{error.errors.website}</p> : null}
          </div>
          <div className={styles.btns}>
            <EnrollBtn />
          </div>
        </article>
        {open && <Modal onClose={closeModal}>{apiError ? 'Find Error! Check your console' : 'Success Create Account!'}</Modal> }
      </form>
    </section>
  );
};
