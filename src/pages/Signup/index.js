import { matchUser } from "common/common";
import { CheckIdBtn } from "components/Btn";
import { useParams } from "react-router";
import styles from "./Edit.module.css";
import { useForm } from "react-hook-form";
import { useUser } from "context/UserState";
import useModal from "hooks/useModal";

export default ({ data, onUpdate }) => {
  // const { id } = useParams();
  // const [userState, userDispatch] = useUser();
  // const {
  //   data: { username: currentUsername },
  // } = userState;
  
  console.log({
    where: 'Signup/index',
    // userState,
  });
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      username: "",
      phone: "",
      email: "",
      website: "",
    },
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: true,
  });
  const regExp = {
    korean: /^[가-힣]+$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    phone: /^010-?([0-9]{3,4})-?([0-9]{4})$/,
    engNumber: /^[a-zA-Z0-9]*$/,
    url: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
  };
  const validator = {
    name: {
      ...register("name", {
        // required: {
        //   value: true,
        //   message: "Please write your name",
        // },
        // pattern: {
        //   value: regExp.korean,
        //   message: "Input Korean Form",
        // },
        // maxLength: {
        //   value: 10,
        //   message: "Less than 10 characters",
        // },
      }),
    },
    username: {
      ...register("username", {
        // required: {
        //   value: true,
        //   message: "Please write username",
        // },
        // pattern: {
        //   value: regExp.engNumber,
        //   message: "Input English & Number Form",
        // },
        // maxLength: {
        //   value: 20,
        //   message: "Less than 20 characters",
        // },
      }),
    },
    phone: {
      ...register("phone", {
        // required: {
        //   value: true,
        //   message: "Please write phone number",
        // },
        // pattern: {
        //   value: regExp.phone,
        //   message: "Input phone Form",
        // },
      }),
      maxLength: {
        value: 12,
        message: "Less than 12 characters",
      },
    },
    email: {
      ...register("email", {
        // required: {
        //   value: true,
        //   message: "Please write email address",
        // },
        // pattern: {
        //   value: regExp.email,
        //   message: "Input email form",
        // },
        // maxLength: {
        //   value: 50,
        //   message: "Less than 20 characters",
        // },
      }),
    },
    website: {
      ...register("website", {
        // required: {
        //   value: true,
        //   message: "Please write your website",
        // },
        // pattern: {
        //   value: regExp.url,
        //   message: "Input Url form",
        // },
      }),
    },
  };
  const { name, username, phone, email, website } = validator;
  const onSubmit = (data) => {
    console.log({
      'where': 'onSubmit()',
      onUpdate,
      data,
    });
    onUpdate(data);
    reset();
  };

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
            <button className="btn">{"Enroll"}</button>
          </div>
        </article>
      </form>
    </section>
  );
};
