# CHICKEN TINDER

---

Can never decide where to eat? Try Tinder for restaurants!

## Requirements

---

For development, you will only need Node.js. All dependencies are already included in the package.json file and will install with the instructions below.

### Node

[Node](http://nodejs.org/) is really easy to install & includes [NPM](https://npmjs.org/).

## Install

---

    $ git clone https://github.com/hayeskg/ChickenTinderFrontend.git
    $ cd ChickenTinderFrontend
    $ npm install

### Configure app

Copy `config.sample.json` to `config.json` then edit it with the url where you have setup:

#### firebase authentication

This project uses firebase for user authentication. In order for the project to be run, it is necessary to have a configuration file for firebase. This file should be created in the src/ folder and named fireAuth.js:

`src/fireAuth.js`

This file must be kept locally and never uploaded to any public places as it contains sensitive information.

In order to have firebase authentication on your project, you will have to create a firebase account and project (https://firebase.google.com/). Once you have set up your project, firebase will generate your configuration details which you can paste into the fireAuth.js file created above. It will look something like this (details are random for the purpose of this example):

```js
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCcRqiawdiVgCNi1aw1Mz2Fawd9kW_6pDqy4",
  authDomain: "chicken-tinder-578q27631.firebaseapp.com",
  databaseURL: "https://chicken-tinder-578q27631.firebaseio.com",
  projectId: "chicken-tinder-578q27631",
  storageBucket: "chicken-tinder-578q27631.appspot.com",
  messagingSenderId: "9547875136",
  appId: "1:687635809654:web:bf3d194779543858a09f7",
  measurementId: "G-D8JZRDAFVWASG",
};

const fire = firebase.initializeApp(config);

export default fire;
```

Alternatively, remove all mentions of `fire` from the project.

#### backend api

The project relies on a custom backend for several key functionalities and cannot properly run without it. The backend can be found here: https://github.com/hayeskg/ChickenTinderBackend.

If you wish to integrate your own backend with this project, it will need to be hosted and have GraphQL functionality. All queries and mutation files will have to be adjusted to match your own endpoints. The following link found in App.js will also have to be updated to match the hosted link of your own backend:

```js
const client = new ApolloClient({
  uri: "https://chicken-tinder-backend.herokuapp.com/graphql",
});
```

## Start

---

Just run the following command in the terminal:

    $ npm start

## Update sources

---

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

## Languages & tools

---

### HTML & CSS

- [Material UI](https://material-ui.com/) is used for UI styling.

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.

### GraphQL

- [GraphQL](https://graphql.org/) is used to query and interact with the custom backend (https://github.com/hayeskg/ChickenTinderBackend). 
- [Apollo-client](https://www.apollographql.com/docs/react/) is used to facilitate GraphQL interaction between server and client.

### Authentication

- [firebase](https://firebase.google.com/) is used for user login authentication.

## Authors

---

- [Jordan Tai](https://github.com/jordantai) 
- [Kristof Hayes](https://github.com/hayeskg) 
- [Laura Kenny](https://github.com/Lajanke) 
- [Lee Bates](https://github.com/batespcm) 
- [Telisa du Plessis](https://github.com/BitterBlue22)

## Acknowledgements

---

- [Northcoders](https://northcoders.com/)
