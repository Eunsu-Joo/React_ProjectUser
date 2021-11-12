import AlbumItem from "components/AlbumItem";
import Loading from "components/Loading";
import styles from "./Albums.module.css";
import Error from "components/Error";
export default ({ data, isLoading, isError }) => {
  return (
    <>
      {isLoading ? (
        isError ? (
          <Error />
        ) : (
          <Loading />
        )
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
