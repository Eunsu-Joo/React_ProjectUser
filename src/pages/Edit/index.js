import {CheckIdBtn} from "components/Btn";
import {useParams} from "react-router";
import styles from "./Edit.module.css";
import Validator from "common/Validator";
import {useState} from "react";
import useModal from "hooks/useModal";
import {useContext} from "react";
import {UserContext} from "context/UserContext";
import {matchUser} from "common/common";
import {Modal} from "portal/Modal";
const axios = require('axios').default;
export default() => {
    const {id} = useParams();
    const {state: {
            data
        }} = useContext(UserContext);
    const {username: currentUser} = matchUser(data, id);
    const {open, onOpenModal, closeModal} = useModal();
    const [error, setError] = useState(false);
    const {
        inputValidator: {
            name,
            username,
            email,
            website,
            phone
        },
        handleSubmit,
        reset,
        errors
    } = Validator(currentUser);
    const onSubmit = async (data) => {
        await axios
            .put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
            .then(() => {
                onOpenModal(!open)
                reset()
            })
            .catch(error => {
                setError(error);
                onOpenModal(!open)
            })
        }
    return (
        <section className="container">
            <form action="" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.imgBox}>
                    <img src={process.env.PUBLIC_URL + `/images/user${id}.jpg`} alt=""/>
                </div>
                <article className={styles.article}>
                    <div className={styles.desc}>
                        <h2>Contact</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                        <span>You can subscribe us</span>
                    </div>
                    <h3>Enroll / Revise</h3>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder="Name" {...name}/>{" "}
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder={currentUser} disabled={true} {...username}/>
                        <button className="btn" disabled={true}>CHECK ID</button>
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>
                    <div className={styles.inputBox}>
                        <input type="text" placeholder="Phone" {...phone}/>{" "}
                        {errors.phone && <p>{errors.phone.message}</p>}
                    </div>{" "}
                    <div className={styles.inputBox}>
                        <input type="text" placeholder="Email" {...email}/>{" "}
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>{" "}
                    <div className={styles.inputBox}>
                        <input type="text" placeholder="Website" {...website}/>{" "}
                        {errors.website && <p>{errors.website.message}</p>}
                    </div>
                    <div className={styles.btns}>
                        <button className="btn">Revise</button>
                    </div>
                </article>
            </form>
            {
                open && <Modal close={closeModal}>{
                            error
                                ? 'Find Error! Check your console'
                                : 'Success Update Your Information!'
                        }</Modal>
            }
        </section>
    );
};
