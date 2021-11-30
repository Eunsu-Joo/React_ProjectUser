import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
const MainHeader = styled.header`
  width: 100%;
  height: 60px;
`;
const Nav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.h1`
  width: 130px;
  height: 60px;
  img {
    width: 100px;
    cursor: pointer;
  }
`;

export default () => {
  const { pathname } = useLocation();
  const navigator = useNavigate();
  const user = JSON.parse(window.localStorage.getItem(`user`));
  const onClear = () => {
    navigator("/");
    window.localStorage.clear();
  };
  return (
    <MainHeader>
      <Nav className="container">
        <Logo onClick={onClear}>
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
        </Logo>
        {user ? (
          <Navigation
            id={user.id}
            username={user.username}
            pathname={pathname}
          />
        ) : (
          <button className="btn">
            <Link to="/signup">Enroll</Link>
          </button>
        )}
      </Nav>
    </MainHeader>
  );
};
