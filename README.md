# Starting template (voilerplate) for a front end Typescript + React project. 

This boilerplate comes from an ejected create-react-app with more things added and improved based on the experience of the devs that used it and shared their opinions with me. It's also a fork of btmnk/react-skeleton.

Includes:
- **Typescript**
- **React**
- **Redux**
- **React-Router**
- **TSLint rules coded by me and a configuration that bans: "object", "any" and other practices that js devs use when they don't fully understand what is the idea of using a typed language**
- **TSLint errors are also displayed in the browser's console as warnings to give them more visibility**
- **Webpack** 
- **CSS Modules already configured (but you can use any styling solution you want)**
- **PostCSS with some basic plugins that changes automatically your css/sass code into a more cross browser css**
- **Polyfills pack to make your code work on Internet Explorer 11, disabled by default. You can enable this on line 1 of src/index.ts**
- **Environment variables (.env) webpack plugin**
- **HMR**

## Installation

1. Run: `npm install`. On Windows you must also run: `npm install -g win-node-env`. That is all.
2. **Optional** but highly recomended: Install TSLint extension for VSCode or for your prefered text editor. Also configure your editor to fix automatically tslint issues on save, to improve productivity.
3. **Optional**: This project is compatible with the chrome extension: "Redux DevTools", you can install it too.

----

#### To start coding and testing

```
npm start
```

----

#### Production Build

```
npm run build
```

That creates a folder named "dist" with the final site ready to be published.
