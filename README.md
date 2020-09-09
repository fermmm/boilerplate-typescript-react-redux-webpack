# Starting template (boilerplate) for a front end Typescript + React project

This is a lite alternative to create-react-app, it has less fancy features but it's easy to modify, maintain and update. 

create-react-app takes a lot of time to modify or troubleshoot webpack and update it's many modules. 

If you are in a team with many devs in a big frontend it's better to use create-rect-app since it contains many optimizations and you have the resources required to modify and extend it.  

If you are in a small team you can use create-react-app without ejecting and without doing any modifications, that is a good option, but in case you need many modifications in the webpack configuration a boilerplate like this one may be the best bet.

## Included:

-  **Typescript:** Version 4.0.2

-  **React:** 16.13 (hooks supported)

-  **Jest + Enzyme:** Installed and some example basic tests are included

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
