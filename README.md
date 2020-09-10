# Starting template (boilerplate) for a front end Typescript + React project

This was made ejecting a create-react-app project and adding many cool features to it. The downside is that the ejecting was made a couple of years ago, so it lacks some features that a more recent create-reacrt-app has. There is a positive side about this boilerplate: it's much more simple to update, extend and troubleshoot since create-react-app in the last couple of years became more and more complex, Facebook takes a lot of time to make updates on create-react-app dependencies, even the ones that should be safe to update like the Typescript version because the complexity and many versions of thier boilerplate.

So this boilerplate has less recent features but some modules are more updated, it's ideal for quick prototyping and trying new versions of libraries.
For a serious project I recommend create-react-app, Next-js or Razzle.

## Included in this boilerplate:

-  **Typescript:** Version 4.0.2

-  **React:** 16.13 (hooks supported)

-  **Redux:** It's optional, use the no-redux branch if you want to avoid Redux

-  **Jest + Enzyme:** Installed and some example basic tests are included

-  **connected-react-router:** Supports navigation with Redux

-  **TSLint:** With rules coded by me and a configuration that bans "object", "any" and other practices that js devs use when they don't fully understand what is the idea of using a static typed language

-  **TSLint errors:** Are also displayed in the browser's console as warnings to give them more visibility

-  **Prettier:** Configured with pre commit hooks, so prettier fixes files automatically before commit

-  **Webpack:** Exposed webpack configuration

-  **Styled Components:** Installed and implemented an example theme for the project

-  **CSS Modules:** Already configured in case you prefer this option instead of Styled Components

-  **PostCSS:** With some basic plugins that changes automatically your css/sass code into a more cross browser css

-  **Environment variables (.env) webpack plugin**

-  **Axios:** Axios installed with an example http request function implemented using React hooks

-  **HMR:** Fast component reload

## Installation

1. Run: `npm install`. On MS-Windows you must also run: `npm install -g win-node-env`. That is all
2. **Optional** but highly recomended: Install TSLint and Prettier extensions for VSCode or for your prefered text editor
3. **Optional**: This project is compatible with the chrome extension: "Redux DevTools", you can install it too

---

#### To start coding and testing

```
npm start
```

---

#### Production Build

```
npm run build
```

That creates a folder named "dist" with the final site ready to be published
