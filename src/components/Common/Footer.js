import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 120px;

  background-color: #2f3640;
  color: #fff;
  z-index: 10;
  padding: 20px 0 60px 0;
  .text ul {
    display: flex;
  }
  .text li {
    font-size: 1.3rem;
    text-align: center;
    padding: 0 0.5em;
    letter-spacing: 1px;
  }
  .text p {
    margin-left: 1rem;
    font-weight: 400;
    padding: 1rem 0 0.5rem 0;
    letter-spacing: 5px;
    font-size: 1.1rem;
  }
`;
export default () => {
  return (
    <Footer>
      <div className="container">
        <div className="text">
          <ul>
            <li>Posts</li>
            <li>Commands</li>
            <li>Photos</li>
          </ul>
          <p>You can get some information in our sites</p>
        </div>
      </div>
    </Footer>
  );
};
