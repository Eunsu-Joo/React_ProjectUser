import styles from "./Posts.module.css";
import { useLocation, useNavigate, useParams } from "react-router";
import Error from "components/Common/Error";
import Loading from "components/Common/Loading";
import PostItem from "./PostItem";
import postsStore from "store/posts";
import AddPosts from "./AddPosts";
import { useEffect } from "react";

export default () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const { posts: data, fetchPosts, isLoading, error } = postsStore();
  const handlePostPage = () => {
    navigator(`/posts/${id}/new`);
  };
  // newPost(업데이트된 게시물)가 있으면 newPost를 보여주고
  // newPost가 비어있으면 post를 보여줘라.
  useEffect(() => fetchPosts(id), []);
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
              {pathname.includes("new") ? null : (
                <span className={styles.link} onClick={handlePostPage}>
                  Write new Post
                </span>
              )}
              {pathname.includes("new") ? (
                <AddPosts id={id} />
              ) : (
                data.map((post) => <PostItem post={post} key={post.id} />)
              )}
            </div>
          </article>
        </section>
      )}
    </>
  );
};
