import Loading from "components/Loading";
import Error from "components/Error";
import { useState } from "react";
import styles from "./Todos.module.css";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import TodoItem from "components/TodoItem";
import { useParams } from "react-router";
import {useFetch} from "hooks/useAsync";
export default () => {
  const [isCheck, setIsCheck] = useState(false);
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  );
  return (
    <>
      {error && <Error />}
      {isLoading ? (
        <Loading />
      ) : (
        <section className={styles.container}>
          <article className={styles.article}>
            <h2>Todos</h2>
            <div className={styles.imgBox}>
              <img src={process.env.PUBLIC_URL + "/images/user1.jpg"} />
            </div>
            <div className={styles.contents}>
              <div className={styles.contentsContainer}>
                <p
                  className={styles.check}
                  onClick={() => setIsCheck(!isCheck)}
                >
                  {isCheck ? (
                    <>
                      {" "}
                      <AiFillCheckCircle />
                      <span> Show All</span>
                    </>
                  ) : (
                    <>
                      {" "}
                      <AiOutlineCheckCircle />
                      <span> Show Completed</span>
                    </>
                  )}
                </p>
                {isCheck
                  ? data
                      .filter((todo) => todo.completed === true)
                      .map((todo) => <TodoItem todo={todo} key={todo.id} />)
                  : data.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
};
