import { useNavigate } from "react-router";
import styled from "styled-components";
import { DeleteBtn, ReviseBtn } from "./Btn";

const User = styled.div`
  width: 100%;
  margin: 0 1rem 2rem 0;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: 0.1s;
  overflow: hidden;
  h3 {
    font-size: 1.5rem;
    font-family: "Playfair Display", serif;
    margin: 0.5em 0 0.3em;
  }
  p {
    line-height: 1.2;
  }
  h4 {
    margin: 0.7em 0 0.3em;
    font-weight: 700;
  }
  .imgBox {
    width: 100%;
    height: 320px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(1);
      transition: 0.1s;
      transform: scale(1);
    }
  }
  .btns {
    margin: 1.5rem 0;
  }
  &:hover {
    background: #f9f9f9;
    color: #333;
    img {
      transform: scale(1.1);
      filter: grayscale(0.3);
    }
  }
`;

export default ({ data }) => {
  const { name, username, email, company, website, phone, id } = data;
  const navigator = useNavigate();
  const handleClick = () => {
    navigator(`/user/${id}`);
    window.localStorage.setItem(`user`, JSON.stringify(data));
  };

  return (
    <User>
      <div className="imgBox" onClick={handleClick}>
        <img src={process.env.PUBLIC_URL + `/images/user${id}.jpg`} alt="" />
      </div>
      <h3>
        {name} / {username}
      </h3>
      <p> Email : {email}</p>
      <p>Company : {company.name}</p>
      <h4>Contact Me</h4>
      <p>Phone : {phone}</p>
      <p>Website : {website}</p>
      <div className="btns">
        <DeleteBtn id={id} />
        <ReviseBtn url={true} id={id} />
      </div>
    </User>
  );
};
