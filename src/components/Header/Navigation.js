import styled from "styled-components";
import { TiUserOutline } from "react-icons/ti";
import { useNavigate, useParams } from "react-router";

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

export default ({ id, pathname, username }) => {
  const navigator = useNavigate();
  return (
    <>
      <Gnb>
        {id <= 10 ? (
          <>
            <GnbItem
              path
              current={pathname.includes("posts")}
              onClick={() => navigator(`posts/${id}`)}
            >
              Posts
            </GnbItem>
            <GnbItem
              path
              current={pathname.includes("todos")}
              onClick={() => navigator(`todos/${id}`)}
            >
              Todos
            </GnbItem>
            <GnbItem
              path
              current={pathname.includes("albums")}
              onClick={() => navigator(`albums/${id}`)}
            >
              Albums
            </GnbItem>
          </>
        ) : null}
      </Gnb>
      <User>
        <TiUserOutline style={icon} />
        Welcome <span style={greeting}>{username}</span>
      </User>
    </>
  );
};
