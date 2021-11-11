import { userApi } from "api";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import Loading from "./Loading";
const PostItem = styled.div`
  margin-bottom: 1rem;
  background-color: #e9e9e9;
  display: flex;
  h3 {
    width: 30%;
    border: 1px solid black;
    height: 100%;
    background-color: #636e72;
    color: #fff;
    text-align: left;
    font-size: 1.3rem;
    font-family: "Playfair Display", serif;
    position: relative;
    align-self: center;
    span {
      font-size: 7rem;
    }
  }
  .contents {
    width: 70%;
    padding: 2rem 0rem 2rem 2rem;
    h4 {
      margin: 1rem 0;
      font-size: 1.2rem;
      font-weight: 700;
    }
    .comment {
      font-weight: 700;
      display: inline-block;
      margin: 1rem 0;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default ({ post }) => {
  const { id, title, body } = post;
  const [data, setData] = useState(null);
  const [isSend, setIsSend] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(true);
  const sendRequest = useCallback(async () => {
    if (isSend) setIsCheck(!isCheck);
    setIsSend(true);
    await userApi.comments(id).then((res) => setData(res.data));
    setIsLoading(false);
    if (isMounted.current) setIsSend(false);
  });
  useEffect(() => (isMounted.current = false), []);
  return (
    <PostItem>
      <h3>
        Post Number / <span>{id}</span>{" "}
      </h3>
      <div className="contents">
        <h4>{title}</h4>
        <p>{body}</p>
        <span className="comment" onClick={sendRequest} disabled={isSend}>
          Show Comments
        </span>
        {isLoading
          ? null
          : data.map((comment) => (
              <CommentItem
                comment={comment}
                key={comment.id}
                isCheck={isCheck}
              />
            ))}
      </div>

      {/* {isLoading
        ? data.map((comment) => (
            <CommentItem comment={comment} key={comment.id} isCheck={isCheck} />
          ))
        : false} */}
      {/* <div className="inputBox">
        <input type="text" />
      </div> */}
    </PostItem>
  );
};
