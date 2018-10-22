This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and enriched with my most used features:
- [Redux](https://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Actions](https://github.com/redux-utilities/redux-actions)
- [Sass](https://medium.com/@Connorelsea/using-sass-with-create-react-app-7125d6913760)
- [ESlint](https://eslint.org/) ([airbnb config](https://www.npmjs.com/package/eslint-config-airbnb))
- [React Cookie](https://www.npmjs.com/package/react-cookie)
- [Axios](https://www.npmjs.com/package/axios)
- [Session History](https://www.npmjs.com/package/history)
- [Moment](https://www.npmjs.com/package/moment)
- Custom helpers
- Custom services

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Folder Structure

After creation, your project should look like this:

```
my-app/
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    app/
      Application/
        Main/
          Home/
            Home.jsx
          Main.container.jsx
          Main.jsx
          Main.routes.jsx
        redux/
          application.reducer.js
          application.store.js
        Application.jsx
        Application.routes.jsx
        Application.test.js
      helpers/
        math.helper.js
        routes.helper.js
        utils.helper.js
      services/
        history.service.js
    index.scss
    index.js
    logo.svg
    serviceWorker.js
  .eslintrc
  .gitignore
  package.json
  README.md
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and SCSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.