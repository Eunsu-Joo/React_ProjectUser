# :gem: Users Project Using Placeholder Dummy data / 211203 수정

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
    "lodash": "^4.17.21",
    "zustand": "^3.6.5"
  },
```

🔹 react - router - dom

- version이 6.0으로 바뀌고, VS Code가 업그레이드 된건지 기존에 사용했던 switch, withRouter, history 등 몇가지 컴포넌트가 바뀌고, 사라졌다. V5 history는 &nbsp; `yarn add history`로 package를 다운받고, <br />
  `const history = createHistory()`로 사용하면 기존의 go, push 등의 메서드가 담긴 history를 사용할 수 있다.
- [V6 변경 참조 블로그] : https://velog.io/@ksmfou98/React-Router-v6-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EC%A0%95%EB%A6%AC

🔹 styled-components 및 module.css

- styled-components 안에는 클래스네임을 넣으며 scss처럼 사용할 수 있다.
- `name.module.css`를 사용할때는 `styles`를 import 해서 사용해야 한다.

🔹 zustand

- 전역 state 관리 라이브러리로 zustand 사용함.
- [zustand 공식 깃허브] : https://github.com/pmndrs/zustand

## 🔸 Config

### 🔹public

- `images`
- `index.html`

### 🔹src

- `common`
  - `ScrollToTop.js`
  - `validator.js`
- `components`
  - `Common`
    - `Btn.js` / `Error.js` / `Footer.js` / `GlobalStyles.js` / `Loading.js` / `Pagination.js`
  - `Header`
    - `Navigation.js` / `Header.js`
- `hooks`
  - `useAsync.js`
  - `useInput.js`
  - `useModal.js`
  - `usePagination.js`
  - `useLockBodyScroll.js`
  - `useFileImage.js`
- `pages`
  - `Home`
    - `directory name.module.css` / `index.js` / `componentsName.js (It is only to use in directory)`
  - `Albums`
  - `Edit`
  - `Posts`
  - `Signup`
  - `Todos`
  - `UserDetail`
- `portal`
  - `Modal.js`
  - `DeleteModal.js`
  - `UpdateModal.js`
  - `AlbumModal.js`
- `store`
  - `default.js`
  - `posts.js`
- `App.js`
- `index.js`

## 🔸 Api

### 🔹 Get Api Data

- Users / method : `GET`

### 🔹 Request Api Data (211203 수정사항 : api 전송 => 전역 데이터에서 관리)

이전 코드에서는 API 전송 했으나, 전역 데이터를 이용해 update, delete, update하는걸로 바뀜.
(94e1d0e9481984815c23c6d9bb79bf4e77782bb2 커밋내용 참조)

- Delete / method : `DELETE` / query : `false`
- Create / method : `PUT` / query : `true`
- Update / method : `POST` / query : `true`

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
