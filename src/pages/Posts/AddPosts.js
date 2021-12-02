import useInput from "hooks/useInput";
import { useNavigate } from "react-router";
import postsStore from "store/posts";
import styled from "styled-components";

const AddPosts = styled.div`
  padding: 2rem 0 0;
  width: 60%;
  margin: 0 auto;
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .inputBox {
    input {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
  .btns {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .btn {
      &:nth-child(1) {
        margin-right: 1rem;
      }
    }
  }
  textarea {
    background-color: #dfe6e9;
    width: 100%;
    height: 300px;
    border-radius: 4px;
    padding-left: 1rem;
    font-size: 1rem;
    font-family: "Lato", sans-serif;
    border: 0;
    padding-top: 1rem;
    &:focus {
      outline: 0;
    }
  }
  textarea:focus {
    background-color: #f1f6f7;
  }
`;

export default ({ id }) => {
  console.log(id);
  const navigator = useNavigate();
  const { updatePosts } = postsStore();
  const [values, onChange, onReset] = useInput({
    title: "",
    body: "",
  });
  const handleSubmit = () => {
    updatePosts(values, id);
    alert("등록완료!");
    navigator(-1);
  };
  return (
    <AddPosts>
      <h3>Add Posts</h3>
      <div className="postContainer">
        <div className="inputBox">
          <input
            type="text"
            placeholder="write here title"
            name="title"
            onChange={onChange}
            value={values.title}
          />
        </div>
        <textarea
          placeholder="write here contents"
          name="body"
          onChange={onChange}
          value={values.body}
        ></textarea>
      </div>
      <div className="btns">
        <button className="btn" onClick={() => navigator(-1)}>
          Back
        </button>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </AddPosts>
  );
};
