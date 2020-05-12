# Starting template (boilerplate) for a front end Typescript + React project.

This boilerplate comes from an ejected create-react-app with more things added and improved based on the experience of the devs that used it and shared their opinions with me. It's also a fork of btmnk/react-skeleton.

## Included:

-  **Typescript:** Version 3.8

-  **React:** 16.13 (hooks supported)

-  **Redux:** It's optional, use no-redux branch if you want to avoid Redux

-  **Jest + Enzyme:** In case your project needs tests

-  **connected-react-router:** Supports navigation with Redux

-  **TSLint:** With rules coded by me and a configuration that bans "object", "any" and other practices that js devs use when they don't fully understand what is the idea of using a static typed language.

-  **TSLint errors:** Are also displayed in the browser's console as warnings to give them more visibility

-  **Prettier:** Configured with pre commit hooks, so prettier fixes files automatically before commit.

-  **Webpack:** Exposed webpack configuration.

-  **CSS Modules:** Already configured but you can combine it with any styling solution you want, like Styles Components.

-  **PostCSS:** With some basic plugins that changes automatically your css/sass code into a more cross browser css

-  **Environment variables (.env) webpack plugin**

-  **HMR:** Fast component reload.

## Installation

1. Run: `npm install`. On Windows you must also run: `npm install -g win-node-env`. That is all.
2. **Optional** but highly recomended: Install TSLint and Prettier extensions for VSCode or for your prefered text editor.
3. **Optional**: This project is compatible with the chrome extension: "Redux DevTools", you can install it too.

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

That creates a folder named "dist" with the final site ready to be published.
