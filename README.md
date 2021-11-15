# User Data Project Using jsonplaceholder!

## Directory Config

### common

-common.js => global common JS

### components

- App.js => Common owner component / AJAX networking / data State
- GlobalStyles.js => Global Css
- Header.js => Header Component
- Footer.js => Footer Component
- Loading.js / Error.js => Loading, Error component
- UserItem.js => UserDetail Presenter Component
- PostsItem.js => PostsPresenter Component
- CommentItem.js => PostItem.js Component
- TodoItem.js => TodoPresenter.js Component
- AlbumItem.js => AlbumPresenter.js Component
- Modal.js => DeleteModal / UpdateModal / AlbumModal
- Btns.js => DeleteBtn / CheckIdBtn

#### Pages

- Home

  - index.js => import / export
    - HomeContainer.js => Ajax networking / parent
  - HomePresenter.js => Element / children
  - Home.module.css => css

- UserDetail
- Edit
- Posts
- Todos
- Albums

### hooks

- useInput.js => input Hooks custom JS

### Ect

- api.js => axios config
- index.js
- jsconfig.js => change src path

## Necessary Api

- users
  - user
  - posts
    - comments
  - todos
  - albums
    - photos
- update
  - revise
  - create
- delete
