import styled from "styled-components";

const TodoItem = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dcdde1;
  span {
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

export default ({ todo }) => {
  const { userId, title } = todo;
  return (
    <TodoItem>
      <span>{userId}</span>
      <p>{title}</p>
    </TodoItem>
  );
};
