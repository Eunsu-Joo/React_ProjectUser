import styled from "styled-components";

const Error = styled.section`
  width: 100%;
  height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  p {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: -2px;
    color: #fff;
    text-shadow: 1px 1px 10px #8e44ad;
    span {
      color: #8e44ad;
    }
  }
`;
export default () => {
  return (
    <Error>
      <img src={process.env.PUBLIC_URL + "/images/error.png"} alt="d" />
      <p>
        Error Code : <span>404</span>
      </p>
      <p>Please Check your console!</p>
    </Error>
  );
};
