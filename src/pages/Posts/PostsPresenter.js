import Loading from "components/Loading";
import PostItem from "components/PostItem";
import styles from "./Posts.module.css";

export default ({ data, isLoading, isError }) => {
  return (
    <>
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
