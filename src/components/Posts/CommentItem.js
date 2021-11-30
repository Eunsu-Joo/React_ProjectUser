import styled from "styled-components";

const CommentItem = styled.div`
  margin-bottom: 1rem;
  .title {
    font-weight: 700;
    margin-bottom: 0.5em;
  }
`;
export default ({ isCheck, comment }) => {
  const { name, email, body } = comment;
  return (
    <>
      {isCheck ? (
        <CommentItem>
          <p className="title">
            Name : {name} / <span>Email : {email}</span>{" "}
          </p>
          <p>{body}</p>
        </CommentItem>
      ) : null}
    </>
  );
};
