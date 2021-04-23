# my redux setup

- create project with create react app
- redux folder

  - [store.js]store.js

        - installed redux
        - installed redux-thunk
        - install redux persist
          - what is redux persist :
          * Redux persist is a library allowing to save the redux store in the local storage of your browser. ... This article illustrates, with a basic example, how persistence works with your Redux store, then focus on the persisted store's transformation across code versions and app uses
            <br />
        - add developer tool for chrome
          - window.**REDUX_DEVTOOLS_EXTENSION_COMPOSE** || compose
          - [rootReducer.js]rootReducer.js
          - combineReducers
          - [index.js]index.js
          - exporting rootReducer.js && store.js

    <br />
        * [login] login folder
          - [actionCreator.js]actionCreator.js
            _ importing constants
            _ accessing actions defined in the constants file \* each key is going to have 3 :
            - key
            - key_success
            - key_failure
