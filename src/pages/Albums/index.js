import AlbumItem from "components/AlbumItem";
import Loading from "components/Loading";
import styles from "./Albums.module.css";
import Error from "components/Error";
import { useFetch } from "hooks/useAsync";
import { useParams } from "react-router";
export default () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  );
  return (
    <>
      {error && <Error />}
      {isLoading ? (
        <Loading />
      ) : (
        <section className={styles.container}>
          <h2>Albums</h2>
          <article className={styles.albumsContainer}>
            {data.map((album) => (
              <AlbumItem data={album} key={album.id} />
            ))}
          </article>
        </section>
      )}
    </>
  );
};
