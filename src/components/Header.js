import styled from "styled-components";
import { TiUserOutline } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { matchUser } from "common/common";
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
const Gnb = styled.ul`
  width: 400px;
  display: flex;
`;
const User = styled.span`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;
const GnbItem = styled.li`
  width: 33.3333%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: ${(props) => (props.current ? 700 : 400)};
  padding: 0.2em 0 0.5em 0;
  letter-spacing: 1px;
  font-family: "Playfair Display", serif;
  cursor: pointer;
  border-bottom: ${(props) => (props.current ? `2px solid #7f8c8d` : 0)};
`;
const icon = {
  marginRight: "0.5rem",
};
const greeting = {
  fontWeight: 600,
  marginLeft: "0.5em",
};

export default ({ data }) => {
  const { pathname } = useLocation();
  const navigator = useNavigate();
  const id = parseInt(pathname.slice(-1));
  const changeUrl = (item) => {
    return navigator(`${item}/${id}`, { replace: true });
  };
  const currentuser = matchUser(data, id);

  return (
    <MainHeader>
      <Nav className="container">
        <Logo onClick={() => navigator("/")}>
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
        </Logo>
        {id ? (
          <>
            <Gnb>
              <GnbItem
                path
                current={pathname.includes("posts")}
                onClick={() => changeUrl("posts")}
              >
                Posts
              </GnbItem>
              <GnbItem
                path
                current={pathname.includes("todos")}
                onClick={() => changeUrl("todos")}
              >
                Todos
              </GnbItem>
              <GnbItem
                path
                current={pathname.includes("albums")}
                onClick={() => changeUrl("albums")}
              >
                Albums
              </GnbItem>
            </Gnb>
            <User>
              <TiUserOutline style={icon} />
              Welcome <span style={greeting}>{currentuser.username}</span>
            </User>
          </>
        ) : (
          <button className="btn">
            <Link to="/edit">Enroll</Link>
          </button>
        )}
      </Nav>
    </MainHeader>
  );
};
