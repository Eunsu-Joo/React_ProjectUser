import styled from "styled-components";

const Loading = styled.section`
  width: 100%;
  height: calc(100vh - 180px);
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    text-align: center;
    font-size: 3rem;
    transform: translateX(25px);
    letter-spacing: 5px;
    font-weight: 700;
    margin-top: -50px;
  }
`;
export default () => {
  return (
    <Loading>
      <p>Loading...</p>
    </Loading>
  );
};
