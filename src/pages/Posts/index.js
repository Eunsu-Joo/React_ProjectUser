import Error from "components/Error";
import Loading from "components/Loading";
import PostItem from "components/PostItem";
import {useFetch} from "hooks/useAsync";
import { useParams } from "react-router";
import styles from "./Posts.module.css";
export default () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  return (
    <>
      {error && <Error />}
      {isLoading ? (
        <Loading />
      ) : (
        <section className={styles.container}>
          <article className={styles.article}>
            <div className={styles.imgBox}>
              <img src={process.env.PUBLIC_URL + `/images/user5.jpg`} alt="" />
            </div>
            <h2>Posts</h2>
            <div className={styles.postsContainer}>
              {data.map((post) => (
                <PostItem post={post} key={post.id} />
              ))}
            </div>
          </article>
        </section>
      )}
    </>
  );
};
