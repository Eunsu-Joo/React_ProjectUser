import { userApi } from "api";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

const PostItem = styled.div`
  margin-bottom: 1rem;
  background-color: #e9e9e9;
  display: flex;
  position: relative;
  h3 {
    width: 30%;
    height: 100%;
    background-color: #636e72;
    color: #fff;
    text-align: left;
    font-size: 1.3rem;
    font-family: "Playfair Display", serif;
    margin-top: 2rem;
    span {
      font-size: 7rem;
    }
  }
  .inputBox {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    input {
      background-color: inherit;
      border-bottom: 1px solid #636e72;
      border-radius: 0;
      padding: 0;
      width: 20%;
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
  const [data, setData] = useState([]);
  const [isSend, setIsSend] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const useInput = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const onChange = (event) => {
      const { name, value } = event.target;
      setValues({ ...values, [name]: value });
    };
    const onReset = () => setValues(initialValues);
    return [values, onChange, onReset];
  };
  const [comments, onChange, onReset] = useInput({
    name: "",
    email: "",
    body: "",
  });
  const sendRequest = useCallback(async () => {
    setIsCheck(!isCheck);
    if (isSend) return;
    setIsSend(true);
    await userApi.comments(id).then((res) => setData(res.data));
    setIsLoading(false);
  });
  const onUpdate = () => {
    setData([...data, { ...comments, key: comments.name }]);
    onReset();
  };
  useEffect(() => {
    return sendRequest;
  }, []);
  return (
    <PostItem>
      <h3>
        Post Number / <span>{id}</span>{" "}
      </h3>
      <div className="contents">
        <h4>{title}</h4>
        <p>{body}</p>
        <div className="inputBox">
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={onChange}
            value={comments.name}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={onChange}
            value={comments.email}
          />
          <input
            type="text"
            placeholder="comment"
            name="body"
            onChange={onChange}
            value={comments.body}
          />
          <button className="btn" onClick={onUpdate}>
            Comment
          </button>
        </div>
        <span className="comment" onClick={sendRequest}>
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
    </PostItem>
  );
};

/** 1. useRef(true) => 랜더링에 안걸리게 하려고
 *  2. useEffect 로 isMount false로 바꿈.
 *  3.
 */
