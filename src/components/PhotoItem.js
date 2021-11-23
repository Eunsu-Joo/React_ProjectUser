import styled from "styled-components";
const PhotoItem = styled.div`
  width: 100%;
  .imgBox {
    width: 400px;
    height: 400px;
    border: 1px solid black;
    img {
      width: 100%;
    }
  }
  h4 {
    margin: 1em 0 0.5em;
    font-size: 0.8rem;
    text-align: center;
  }
`;

export default ({ photo }) => {
  const { title, url } = photo;
  return (
    <PhotoItem>
      <div className="imgBox">
        <img src={url} alt="" />
      </div>
      <h4>{title}</h4>
    </PhotoItem>
  );
};
