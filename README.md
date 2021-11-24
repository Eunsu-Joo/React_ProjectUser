# :gem: Users Project Using Placeholder Dummy data

## 🔸 Desciption

Placeholder 에서 제공하는 더미데이터를 이용하여, 데이터를 불러오고 전송하여 API를 처리하고, 각 페이지별로 컴포넌트를 나누어 만든 나의 첫 리액트 프로젝트이다.

## 🔸 Packages

```javascript
  "name": "react_project_users",
  "dependencies": {
    "axios": "^0.24.0",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.0.2",
    "styled-components": "^5.3.3",
    "styled-reset": "^4.3.4",
  },
```

🔹 react - router - dom

- version이 6.0으로 바뀌고, VS Code가 업그레이드 된건지 기존에 사용했던 switch, withRouter, history 등 몇가지 컴포넌트가 바뀌고, 사라졌다. V5 history는 &nbsp; `yarn add history`로 package를 다운받고, <br />
  `const history = createHistory()`로 사용하면 기존의 go, push 등의 메서드가 담긴 history를 사용할 수 있다.
- [V6 변경 참조 블로그] : https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC

🔹 styled-components 및 module.css

- styled-components 안에는 클래스네임을 넣으며 scss처럼 사용할 수 있다.
- `name.module.css`를 사용할때는 `styles`를 import 해서 사용해야 한다.

## 🔸 Config

### 🔹public

- `images`
- `index.html`

### 🔹src

- `common`
  - `ScrollToTop.js`
  - `validator.js`
- `components`
  - `AlbumItem.js`
  - `Btn.js`
  - `CommentItem.js`
  - `Error.js`
  - `Footer.js`
  - `GlobalStyles.js`
  - `Header.js`
  - `Loading.js`
  - `PhotoItem.js`
  - `PostItem.js`
  - `TodoItem.js`
  - `UserItem.js`
- `context`
  - `UserAction.js`
  - `UserContext.js`
  - `UserState.js`
- `hooks`
  - `useAsync.js`
  - `useInput.js`
  - `useModal.js`
- `pages`
  - `Home`
    - `directory name.module.css`
    - `index.js`
  - `Albums`
  - `Edit`
  - `Posts`
  - `Signup`
  - `Todos`
  - `UserDetail`
- `portal`
  - `Modal.js`
  - `Portal.js`
- `App.js`
- `index.js`

## 🔸 Api

### 🔹 Get Api Data

- Users / method : `GET`

### 🔹 Request Api Data

- Delete / method : `DELETE` / query : `false`
- Create / method : `PUT` / query : `true`
- Update / method : `POST` / query : `true`

## 🔸 Explanation

### 🔹 index.js

- 전역 State Provider 설정
- Route 감싸는 Router 설정

### 🔹 App.js

- useEffect로 mount 될 때 전체데이터 받아와서 전역 state에 담음.

### 🔹 Common

#### ◾ ScrollTop.js

- 페이지 이동이 있을 때마다 pathname만 바뀌고 스크롤은 그 위치에 있어서, scrollTop을 0으로 만들어주는 함수.

#### ◾ validator.js

- Edit.js / Signup.js 부분에 인풋 유효성에 필요한 유효성 함수.

### 🔹 components

#### ◾ GlobalStyles.js

- 전역에 사용할 CSS 컴포넌트 `by styled-reset`

#### ◾ Header.js / Footer.js

- 해더 / 푸터 컴포넌트

#### ◾ Loading.js / Error.js

- 로딩 / 애러일 때 보여주는 컴포넌트

#### ◾ Btn.js

- 공통으로 들어가는 DeleteBtn, ReviseBtn 각각 export 해줌.
- DeleteBtn : `param= id , api, onDelete` `api=true`이면 api전송, false면 onDelete 실행
- ReviseBtn : `param= id, url ` 이면 url 이동

#### ◾ UserItem.js

- Parent : `pages/UserDetail/index.js`
- Parameter : `user,onDelete`
- execute api : `false`

#### ◾ PostItem.js

- Parent : `pages/Post/index.js`
- Parameter : `post`
- execute api : `true`

#### ◾ CommentItem.js

- Parent : `./PostItem.js`
- Parameter : `isCheck, comment`
- execute api : `false`

#### ◾ TodoItem.js

- Parent : `pages/Todos/index.js`
- Parameter : `todo`
- execute api : `false`

#### ◾ AlbumItem.js

- Parent : `Albums/index.js`
- Parameter : `album`
- execute api : `true`

#### ◾ PhotoItem.js

- Parent : `./AlbumItem.js`
- Parameter : `photo`
- execute api : `false`

### 🔹 pages

#### ◾ Home

- 전역 state로 데이터 받아와서 뿌려줌.
- LocalStorage Clear
- 검색기능
- 유저카드 클릭하면 해당 유저카드 삭제

#### ◾ UserDetail

- LocalStorage에서 데이터 받아와서 뿌려줌.
- Delete,Revise Btn prop으로 id 전달

#### ◾ Edit / Signup

- useInput사용해서 state에 input값 저장.
- validator로 유효성 검사
- 유효성 성공하면 data전송
- Signup : params로 id 받아와서 find 함수로 데이터 매칭시켜 username default value로 설정

#### ◾ Posts / Todos / Albums

- useParams()로 id받아와서 api 전송해서 데이터 뿌리기.

### 🔹 hooks

#### ◾ useAsync.js

- data 전송, 성공/실패 여부 받아오는 custom hook

#### ◾ useInput.js

- input value, onChange 처리하는 input custom hook

#### ◾ useModal.js

- 모달 띄울때 사용하는 Boolean 사용하는 modal custom hook

### 🔹 portal

#### ◾ portal.js

- createPortal로 root외 다른 element 사용가능하게 하는 modal portal js

#### ◾ Modal.js

- Album / Alert 모달 컴포넌트

### 🔹 context

#### ◾ UserContext.js

- createContext설정
- reducer 함수

#### ◾ UserAction.js

- context state에 담는 action 함수

#### ◾ UserState.js

- initial data 설정
- useReducer 로 state, dispatch 불러와 Provider에게 전달.

### ➕ CSS

- page => `directoryName.module.css`
- component => `styled-components`

## 🔸 Weakness

🔹 **UseEffect, Mount/UnMount Component**

🔹 **Handling and Module Data**

🔹 **Event Handling**

## 🔸 Conclusion

프로젝트를 하면서 많이 배웠고, 무엇보다 리액트에 대한 컴포넌트 분리와 플로우에 대해서 조금은 안 것 같다. 하지만 아직 브라우저 최적화와 useEffect를 이용해 데이터 처리하는 부분이 미숙하다. event 처리 부분과 useEffect의 관계성에 대해서 공부를 해야 좀 더 효율적으로 리액트를 사용 할 수 있을 것 같다. 다음 프로젝트는 조금 더 성장하길! <br>
`Keep up the good work.`
