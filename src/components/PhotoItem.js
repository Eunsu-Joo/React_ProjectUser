import styled from "styled-components";
const PhotoItem = styled.div`
  width: 100%;
  .imgBox {
    width: 300px;
    height: 300px;
    img {
      width: 100%;
    }
  }
  h4 {
    margin: 1em 0 0.5em;
    font-size: 0.8rem;
  }
`;

export default ({ data }) => {
  const { title, url } = data;
  return (
    <PhotoItem>
      <div className="imgBox">
        <img src={url} alt="" />
      </div>
      <h4>{title}</h4>
    </PhotoItem>
  );
};
